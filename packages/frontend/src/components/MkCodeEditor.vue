<!--
SPDX-FileCopyrightText: syuilo and other misskey contributors
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div :class="[$style.codeEditorRoot, { [$style.disabled]: disabled, [$style.focused]: focused }]">
	<div :class="$style.codeEditorScroller">
		<textarea
			ref="inputEl"
			v-model="vModel"
			:class="[$style.textarea]"
			:disabled="disabled"
			:required="required"
			:readonly="readonly"
			autocomplete="off"
			wrap="off"
			spellcheck="false"
			@focus="focused = true"
			@blur="focused = false"
			@keydown="onKeydown($event)"
			@input="onInput"
		></textarea>
		<XCode :class="$style.codeEditorHighlighter" :codeEditor="true" :code="v" :lang="lang"/>
	</div>
</div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, shallowRef, nextTick } from 'vue';
import XCode from '@/components/MkCode.core.vue';

const props = withDefaults(defineProps<{
	modelValue: string | null;
	lang: string;
	required?: boolean;
	readonly?: boolean;
	disabled?: boolean;
}>(), {
	lang: 'js',
});

const emit = defineEmits<{
	(ev: 'change', _ev: KeyboardEvent): void;
	(ev: 'keydown', _ev: KeyboardEvent): void;
	(ev: 'enter'): void;
	(ev: 'update:modelValue', value: string): void;
}>();

const { modelValue } = toRefs(props);
const vModel = ref<string>(modelValue.value ?? '');
const v = ref<string>(modelValue.value ?? '');
const focused = ref(false);
const changed = ref(false);
const inputEl = shallowRef<HTMLTextAreaElement>();

const onInput = (ev) => {
	v.value = ev.target?.value ?? v.value;
	changed.value = true;
	emit('change', ev);
};

const onKeydown = (ev: KeyboardEvent) => {
	if (ev.isComposing || ev.key === 'Process' || ev.keyCode === 229) return;

	emit('keydown', ev);

	if (ev.code === 'Enter') {
		const pos = inputEl.value?.selectionStart ?? 0;
		const posEnd = inputEl.value?.selectionEnd ?? vModel.value.length;
		if (pos === posEnd) {
			const lines = vModel.value.slice(0, pos).split('\n');
			const currentLine = lines[lines.length - 1];
			const currentLineSpaces = currentLine.match(/^\s+/);
			const posDelta = currentLineSpaces ? currentLineSpaces[0].length : 0;
			ev.preventDefault();
			vModel.value = vModel.value.slice(0, pos) + '\n' + (currentLineSpaces ? currentLineSpaces[0] : '') + vModel.value.slice(pos);
			v.value = vModel.value;
			nextTick(() => {
				inputEl.value?.setSelectionRange(pos + 1 + posDelta, pos + 1 + posDelta);
			});
		}
		emit('enter');
	}

	if (ev.key === 'Tab') {
		const pos = inputEl.value?.selectionStart ?? 0;
		const posEnd = inputEl.value?.selectionEnd ?? vModel.value.length;
		vModel.value = vModel.value.slice(0, pos) + '\t' + vModel.value.slice(posEnd);
		v.value = vModel.value;
		nextTick(() => {
			inputEl.value?.setSelectionRange(pos + 1, pos + 1);
		});
		ev.preventDefault();
	}
};

const updated = () => {
	changed.value = false;
	emit('update:modelValue', v.value);
};

watch(modelValue, newValue => {
	v.value = newValue ?? '';
});

watch(v, () => {
	updated();
});
</script>

<style lang="scss" module>
.codeEditorRoot {
	min-width: 100%;
	max-width: 100%;
	overflow-x: auto;
	overflow-y: hidden;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	color: var(--fg);
	border: solid 1px var(--panel);
	transition: border-color 0.1s ease-out;
	font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
	&:hover {
		border-color: var(--inputBorderHover) !important;
	}
}

.focused.codeEditorRoot {
	border-color: var(--accent) !important;
	border-radius: 6px;
}

.codeEditorScroller {
	position: relative;
	display: inline-block;
	min-width: 100%;
	height: 100%;
}

.textarea, .codeEditorHighlighter {
	margin: 0;
}

.textarea {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: inline-block;
	appearance: none;
	resize: none;
	text-align: left;
	color: transparent;
	caret-color: rgb(225, 228, 232);
	background-color: transparent;
	border: 0;
	outline: 0;
	min-width: calc(100% - 24px);
	height: calc(100% - 24px);
	padding: 12px;
	line-height: 1.5em;
	font-size: 1em;
	font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
}

.textarea::selection {
	color: #fff;
}
</style>
