<!--
SPDX-FileCopyrightText: syuilo and other misskey contributors
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<MkModal
	ref="modal"
	v-slot="{ type, maxHeight }"
	:zPriority="'middle'"
	:preferType="asReactionPicker && defaultStore.state.reactionPickerUseDrawerForMobile === false ? 'popup' : 'auto'"
	:transparentBg="true"
	:manualShowing="manualShowing"
	:src="src"
	@click="modal?.close()"
	@opening="opening"
	@close="emit('close')"
	@closed="emit('closed')"
>
	<MkEmojiPicker
		ref="picker"
		class="_popup _shadow"
		:class="{ [$style.drawer]: type === 'drawer' }"
		:showPinned="showPinned"
		:asReactionPicker="asReactionPicker"
		:asDrawer="type === 'drawer'"
		:max-height="maxHeight"
		@chosen="chosen"
	/>
</MkModal>
</template>

<script lang="ts" setup>
import MkModal from '@/components/MkModal.vue';
import MkEmojiPicker from '@/components/MkEmojiPicker.vue';
import { defaultStore } from '@/store.js';

const props = withDefaults(defineProps<{
	manualShowing?: boolean | null;
	src?: HTMLElement;
	showPinned?: boolean;
	asReactionPicker?: boolean;
  choseAndClose?: boolean;
}>(), {
	manualShowing: null,
	showPinned: true,
	asReactionPicker: false,
	choseAndClose: true,
});

const emit = defineEmits<{
	(ev: 'done', v: any): void;
	(ev: 'close'): void;
	(ev: 'closed'): void;
}>();

const modal = $shallowRef<InstanceType<typeof MkModal>>();
const picker = $shallowRef<InstanceType<typeof MkEmojiPicker>>();

function chosen(emoji: any) {
	emit('done', emoji);
	if (props.choseAndClose) {
		modal?.close();
	}
}

function opening() {
	picker?.reset();
	picker?.focus();

	// 何故かちょっと待たないとフォーカスされない
	setTimeout(() => {
		picker?.focus();
	}, 10);
}
</script>

<style lang="scss" module>
.drawer {
	border-radius: 24px;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}
</style>
