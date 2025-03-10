/*
 * version: 2023.12.0-beta.1
 * generatedAt: 2023-12-03T02:04:45.058Z
 */

import type {
	EmptyRequest,
	EmptyResponse,
	AdminMetaResponse,
	AdminAbuseUserReportsRequest,
	AdminAbuseUserReportsResponse,
	AdminAccountsCreateRequest,
	AdminAccountsCreateResponse,
	AdminAccountsDeleteRequest,
	AdminAccountsFindByEmailRequest,
	AdminAdCreateRequest,
	AdminAdDeleteRequest,
	AdminAdListRequest,
	AdminAdUpdateRequest,
	AdminAnnouncementsCreateRequest,
	AdminAnnouncementsCreateResponse,
	AdminAnnouncementsDeleteRequest,
	AdminAnnouncementsListRequest,
	AdminAnnouncementsListResponse,
	AdminAnnouncementsUpdateRequest,
	AdminAvatarDecorationsCreateRequest,
	AdminAvatarDecorationsDeleteRequest,
	AdminAvatarDecorationsListRequest,
	AdminAvatarDecorationsListResponse,
	AdminAvatarDecorationsUpdateRequest,
	AdminDeleteAllFilesOfAUserRequest,
	AdminUnsetUserAvatarRequest,
	AdminUnsetUserBannerRequest,
	AdminDriveFilesRequest,
	AdminDriveFilesResponse,
	AdminDriveShowFileRequest,
	AdminDriveShowFileResponse,
	AdminEmojiAddAliasesBulkRequest,
	AdminEmojiAddRequest,
	AdminEmojiCopyRequest,
	AdminEmojiCopyResponse,
	AdminEmojiDeleteBulkRequest,
	AdminEmojiDeleteRequest,
	AdminEmojiListRemoteRequest,
	AdminEmojiListRemoteResponse,
	AdminEmojiListRequest,
	AdminEmojiListResponse,
	AdminEmojiRemoveAliasesBulkRequest,
	AdminEmojiSetAliasesBulkRequest,
	AdminEmojiSetCategoryBulkRequest,
	AdminEmojiSetLicenseBulkRequest,
	AdminEmojiUpdateRequest,
	AdminFederationDeleteAllFilesRequest,
	AdminFederationRefreshRemoteInstanceMetadataRequest,
	AdminFederationRemoveAllFollowingRequest,
	AdminFederationUpdateInstanceRequest,
	AdminGetTableStatsResponse,
	AdminGetUserIpsRequest,
	AdminInviteCreateRequest,
	AdminInviteCreateResponse,
	AdminInviteListRequest,
	AdminInviteListResponse,
	AdminPromoCreateRequest,
	AdminQueueDeliverDelayedResponse,
	AdminQueueInboxDelayedResponse,
	AdminQueuePromoteRequest,
	AdminQueueStatsResponse,
	AdminRelaysAddRequest,
	AdminRelaysAddResponse,
	AdminRelaysListResponse,
	AdminRelaysRemoveRequest,
	AdminResetPasswordRequest,
	AdminResetPasswordResponse,
	AdminResolveAbuseUserReportRequest,
	AdminSendEmailRequest,
	AdminServerInfoResponse,
	AdminShowModerationLogsRequest,
	AdminShowModerationLogsResponse,
	AdminShowUserRequest,
	AdminShowUserResponse,
	AdminShowUsersRequest,
	AdminShowUsersResponse,
	AdminSuspendUserRequest,
	AdminUnsuspendUserRequest,
	AdminUpdateMetaRequest,
	AdminDeleteAccountRequest,
	AdminDeleteAccountResponse,
	AdminUpdateUserNoteRequest,
	AdminRolesCreateRequest,
	AdminRolesDeleteRequest,
	AdminRolesShowRequest,
	AdminRolesUpdateRequest,
	AdminRolesAssignRequest,
	AdminRolesUnassignRequest,
	AdminRolesUpdateDefaultPoliciesRequest,
	AdminRolesUsersRequest,
	AnnouncementsRequest,
	AnnouncementsResponse,
	AntennasCreateRequest,
	AntennasCreateResponse,
	AntennasDeleteRequest,
	AntennasListResponse,
	AntennasNotesRequest,
	AntennasNotesResponse,
	AntennasShowRequest,
	AntennasShowResponse,
	AntennasUpdateRequest,
	AntennasUpdateResponse,
	ApGetRequest,
	ApGetResponse,
	ApShowRequest,
	ApShowResponse,
	AppCreateRequest,
	AppCreateResponse,
	AppShowRequest,
	AppShowResponse,
	AuthSessionGenerateRequest,
	AuthSessionGenerateResponse,
	AuthSessionShowRequest,
	AuthSessionShowResponse,
	AuthSessionUserkeyRequest,
	AuthSessionUserkeyResponse,
	BlockingCreateRequest,
	BlockingCreateResponse,
	BlockingDeleteRequest,
	BlockingDeleteResponse,
	BlockingListRequest,
	BlockingListResponse,
	ChannelsCreateRequest,
	ChannelsCreateResponse,
	ChannelsFeaturedResponse,
	ChannelsFollowRequest,
	ChannelsFollowedRequest,
	ChannelsFollowedResponse,
	ChannelsOwnedRequest,
	ChannelsOwnedResponse,
	ChannelsShowRequest,
	ChannelsShowResponse,
	ChannelsTimelineRequest,
	ChannelsTimelineResponse,
	ChannelsUnfollowRequest,
	ChannelsUpdateRequest,
	ChannelsUpdateResponse,
	ChannelsFavoriteRequest,
	ChannelsUnfavoriteRequest,
	ChannelsMyFavoritesResponse,
	ChannelsSearchRequest,
	ChannelsSearchResponse,
	ChartsActiveUsersRequest,
	ChartsActiveUsersResponse,
	ChartsApRequestRequest,
	ChartsApRequestResponse,
	ChartsDriveRequest,
	ChartsDriveResponse,
	ChartsFederationRequest,
	ChartsFederationResponse,
	ChartsInstanceRequest,
	ChartsInstanceResponse,
	ChartsNotesRequest,
	ChartsNotesResponse,
	ChartsUserDriveRequest,
	ChartsUserDriveResponse,
	ChartsUserFollowingRequest,
	ChartsUserFollowingResponse,
	ChartsUserNotesRequest,
	ChartsUserNotesResponse,
	ChartsUserPvRequest,
	ChartsUserPvResponse,
	ChartsUserReactionsRequest,
	ChartsUserReactionsResponse,
	ChartsUsersRequest,
	ChartsUsersResponse,
	ClipsAddNoteRequest,
	ClipsRemoveNoteRequest,
	ClipsCreateRequest,
	ClipsCreateResponse,
	ClipsDeleteRequest,
	ClipsListResponse,
	ClipsNotesRequest,
	ClipsNotesResponse,
	ClipsShowRequest,
	ClipsShowResponse,
	ClipsUpdateRequest,
	ClipsUpdateResponse,
	ClipsFavoriteRequest,
	ClipsUnfavoriteRequest,
	ClipsMyFavoritesResponse,
	DriveResponse,
	DriveFilesRequest,
	DriveFilesResponse,
	DriveFilesAttachedNotesRequest,
	DriveFilesAttachedNotesResponse,
	DriveFilesCheckExistenceRequest,
	DriveFilesCheckExistenceResponse,
	DriveFilesCreateRequest,
	DriveFilesCreateResponse,
	DriveFilesDeleteRequest,
	DriveFilesFindByHashRequest,
	DriveFilesFindByHashResponse,
	DriveFilesFindRequest,
	DriveFilesFindResponse,
	DriveFilesShowRequest,
	DriveFilesShowResponse,
	DriveFilesUpdateRequest,
	DriveFilesUpdateResponse,
	DriveFilesUploadFromUrlRequest,
	DriveFoldersRequest,
	DriveFoldersResponse,
	DriveFoldersCreateRequest,
	DriveFoldersCreateResponse,
	DriveFoldersDeleteRequest,
	DriveFoldersFindRequest,
	DriveFoldersFindResponse,
	DriveFoldersShowRequest,
	DriveFoldersShowResponse,
	DriveFoldersUpdateRequest,
	DriveFoldersUpdateResponse,
	DriveStreamRequest,
	DriveStreamResponse,
	EmailAddressAvailableRequest,
	EmailAddressAvailableResponse,
	EndpointRequest,
	EndpointsResponse,
	FederationFollowersRequest,
	FederationFollowersResponse,
	FederationFollowingRequest,
	FederationFollowingResponse,
	FederationInstancesRequest,
	FederationInstancesResponse,
	FederationShowInstanceRequest,
	FederationShowInstanceResponse,
	FederationUpdateRemoteUserRequest,
	FederationUsersRequest,
	FederationUsersResponse,
	FederationStatsRequest,
	FollowingCreateRequest,
	FollowingCreateResponse,
	FollowingDeleteRequest,
	FollowingDeleteResponse,
	FollowingUpdateRequest,
	FollowingUpdateResponse,
	FollowingUpdateAllRequest,
	FollowingInvalidateRequest,
	FollowingInvalidateResponse,
	FollowingRequestsAcceptRequest,
	FollowingRequestsCancelRequest,
	FollowingRequestsCancelResponse,
	FollowingRequestsListRequest,
	FollowingRequestsListResponse,
	FollowingRequestsRejectRequest,
	GalleryFeaturedRequest,
	GalleryFeaturedResponse,
	GalleryPopularResponse,
	GalleryPostsRequest,
	GalleryPostsResponse,
	GalleryPostsCreateRequest,
	GalleryPostsCreateResponse,
	GalleryPostsDeleteRequest,
	GalleryPostsLikeRequest,
	GalleryPostsShowRequest,
	GalleryPostsShowResponse,
	GalleryPostsUnlikeRequest,
	GalleryPostsUpdateRequest,
	GalleryPostsUpdateResponse,
	GetAvatarDecorationsResponse,
	HashtagsListRequest,
	HashtagsListResponse,
	HashtagsSearchRequest,
	HashtagsSearchResponse,
	HashtagsShowRequest,
	HashtagsShowResponse,
	HashtagsTrendResponse,
	HashtagsUsersRequest,
	HashtagsUsersResponse,
	IResponse,
	IClaimAchievementRequest,
	IFavoritesRequest,
	IFavoritesResponse,
	IGalleryLikesRequest,
	IGalleryLikesResponse,
	IGalleryPostsRequest,
	IGalleryPostsResponse,
	INotificationsRequest,
	INotificationsResponse,
	INotificationsGroupedRequest,
	INotificationsGroupedResponse,
	IPageLikesRequest,
	IPageLikesResponse,
	IPagesRequest,
	IPagesResponse,
	IPinRequest,
	IPinResponse,
	IReadAnnouncementRequest,
	IRegistryGetAllRequest,
	IRegistryGetDetailRequest,
	IRegistryGetRequest,
	IRegistryKeysWithTypeRequest,
	IRegistryKeysRequest,
	IRegistryRemoveRequest,
	IRegistrySetRequest,
	IUnpinRequest,
	IUnpinResponse,
	IUpdateRequest,
	IUpdateResponse,
	IWebhooksCreateRequest,
	IWebhooksShowRequest,
	IWebhooksUpdateRequest,
	IWebhooksDeleteRequest,
	InviteCreateResponse,
	InviteDeleteRequest,
	InviteListRequest,
	InviteListResponse,
	InviteLimitResponse,
	MetaRequest,
	MetaResponse,
	EmojisResponse,
	EmojiRequest,
	EmojiResponse,
	MuteCreateRequest,
	MuteDeleteRequest,
	MuteListRequest,
	MuteListResponse,
	RenoteMuteCreateRequest,
	RenoteMuteDeleteRequest,
	RenoteMuteListRequest,
	RenoteMuteListResponse,
	MyAppsRequest,
	MyAppsResponse,
	NotesRequest,
	NotesResponse,
	NotesChildrenRequest,
	NotesChildrenResponse,
	NotesClipsRequest,
	NotesClipsResponse,
	NotesConversationRequest,
	NotesConversationResponse,
	NotesCreateRequest,
	NotesCreateResponse,
	NotesDeleteRequest,
	NotesFavoritesCreateRequest,
	NotesFavoritesDeleteRequest,
	NotesFeaturedRequest,
	NotesFeaturedResponse,
	NotesGlobalTimelineRequest,
	NotesGlobalTimelineResponse,
	NotesHybridTimelineRequest,
	NotesHybridTimelineResponse,
	NotesLocalTimelineRequest,
	NotesLocalTimelineResponse,
	NotesMentionsRequest,
	NotesMentionsResponse,
	NotesPollsRecommendationRequest,
	NotesPollsRecommendationResponse,
	NotesPollsVoteRequest,
	NotesReactionsRequest,
	NotesReactionsResponse,
	NotesReactionsCreateRequest,
	NotesReactionsDeleteRequest,
	NotesRenotesRequest,
	NotesRenotesResponse,
	NotesRepliesRequest,
	NotesRepliesResponse,
	NotesSearchByTagRequest,
	NotesSearchByTagResponse,
	NotesSearchRequest,
	NotesSearchResponse,
	NotesShowRequest,
	NotesShowResponse,
	NotesStateRequest,
	NotesStateResponse,
	NotesThreadMutingCreateRequest,
	NotesThreadMutingDeleteRequest,
	NotesTimelineRequest,
	NotesTimelineResponse,
	NotesTranslateRequest,
	NotesTranslateResponse,
	NotesUnrenoteRequest,
	NotesUserListTimelineRequest,
	NotesUserListTimelineResponse,
	NotificationsCreateRequest,
	PagesCreateRequest,
	PagesCreateResponse,
	PagesDeleteRequest,
	PagesFeaturedResponse,
	PagesLikeRequest,
	PagesShowRequest,
	PagesShowResponse,
	PagesUnlikeRequest,
	PagesUpdateRequest,
	FlashCreateRequest,
	FlashDeleteRequest,
	FlashFeaturedResponse,
	FlashLikeRequest,
	FlashShowRequest,
	FlashShowResponse,
	FlashUnlikeRequest,
	FlashUpdateRequest,
	FlashMyRequest,
	FlashMyResponse,
	FlashMyLikesRequest,
	FlashMyLikesResponse,
	PingResponse,
	PinnedUsersResponse,
	PromoReadRequest,
	RolesShowRequest,
	RolesUsersRequest,
	RolesNotesRequest,
	RolesNotesResponse,
	RequestResetPasswordRequest,
	ResetPasswordRequest,
	StatsResponse,
	SwShowRegistrationRequest,
	SwShowRegistrationResponse,
	SwUpdateRegistrationRequest,
	SwUpdateRegistrationResponse,
	SwRegisterRequest,
	SwRegisterResponse,
	SwUnregisterRequest,
	TestRequest,
	UsernameAvailableRequest,
	UsernameAvailableResponse,
	UsersRequest,
	UsersResponse,
	UsersClipsRequest,
	UsersClipsResponse,
	UsersFollowersRequest,
	UsersFollowersResponse,
	UsersFollowingRequest,
	UsersFollowingResponse,
	UsersGalleryPostsRequest,
	UsersGalleryPostsResponse,
	UsersGetFrequentlyRepliedUsersRequest,
	UsersGetFrequentlyRepliedUsersResponse,
	UsersFeaturedNotesRequest,
	UsersFeaturedNotesResponse,
	UsersListsCreateRequest,
	UsersListsCreateResponse,
	UsersListsDeleteRequest,
	UsersListsListRequest,
	UsersListsListResponse,
	UsersListsPullRequest,
	UsersListsPushRequest,
	UsersListsShowRequest,
	UsersListsShowResponse,
	UsersListsFavoriteRequest,
	UsersListsUnfavoriteRequest,
	UsersListsUpdateRequest,
	UsersListsUpdateResponse,
	UsersListsCreateFromPublicRequest,
	UsersListsCreateFromPublicResponse,
	UsersListsUpdateMembershipRequest,
	UsersListsGetMembershipsRequest,
	UsersNotesRequest,
	UsersNotesResponse,
	UsersPagesRequest,
	UsersPagesResponse,
	UsersFlashsRequest,
	UsersFlashsResponse,
	UsersReactionsRequest,
	UsersReactionsResponse,
	UsersRecommendationRequest,
	UsersRecommendationResponse,
	UsersRelationRequest,
	UsersRelationResponse,
	UsersReportAbuseRequest,
	UsersSearchByUsernameAndHostRequest,
	UsersSearchByUsernameAndHostResponse,
	UsersSearchRequest,
	UsersSearchResponse,
	UsersShowRequest,
	UsersShowResponse,
	UsersAchievementsRequest,
	UsersUpdateMemoRequest,
	FetchRssRequest,
	FetchExternalResourcesRequest,
	RetentionResponse,
} from './entities.js';

export type Endpoints = {
	'admin/meta': { req: EmptyRequest; res: AdminMetaResponse };
	'admin/abuse-user-reports': { req: AdminAbuseUserReportsRequest; res: AdminAbuseUserReportsResponse };
	'admin/accounts/create': { req: AdminAccountsCreateRequest; res: AdminAccountsCreateResponse };
	'admin/accounts/delete': { req: AdminAccountsDeleteRequest; res: EmptyResponse };
	'admin/accounts/find-by-email': { req: AdminAccountsFindByEmailRequest; res: EmptyResponse };
	'admin/ad/create': { req: AdminAdCreateRequest; res: EmptyResponse };
	'admin/ad/delete': { req: AdminAdDeleteRequest; res: EmptyResponse };
	'admin/ad/list': { req: AdminAdListRequest; res: EmptyResponse };
	'admin/ad/update': { req: AdminAdUpdateRequest; res: EmptyResponse };
	'admin/announcements/create': { req: AdminAnnouncementsCreateRequest; res: AdminAnnouncementsCreateResponse };
	'admin/announcements/delete': { req: AdminAnnouncementsDeleteRequest; res: EmptyResponse };
	'admin/announcements/list': { req: AdminAnnouncementsListRequest; res: AdminAnnouncementsListResponse };
	'admin/announcements/update': { req: AdminAnnouncementsUpdateRequest; res: EmptyResponse };
	'admin/avatar-decorations/create': { req: AdminAvatarDecorationsCreateRequest; res: EmptyResponse };
	'admin/avatar-decorations/delete': { req: AdminAvatarDecorationsDeleteRequest; res: EmptyResponse };
	'admin/avatar-decorations/list': { req: AdminAvatarDecorationsListRequest; res: AdminAvatarDecorationsListResponse };
	'admin/avatar-decorations/update': { req: AdminAvatarDecorationsUpdateRequest; res: EmptyResponse };
	'admin/delete-all-files-of-a-user': { req: AdminDeleteAllFilesOfAUserRequest; res: EmptyResponse };
	'admin/unset-user-avatar': { req: AdminUnsetUserAvatarRequest; res: EmptyResponse };
	'admin/unset-user-banner': { req: AdminUnsetUserBannerRequest; res: EmptyResponse };
	'admin/drive/clean-remote-files': { req: EmptyRequest; res: EmptyResponse };
	'admin/drive/cleanup': { req: EmptyRequest; res: EmptyResponse };
	'admin/drive/files': { req: AdminDriveFilesRequest; res: AdminDriveFilesResponse };
	'admin/drive/show-file': { req: AdminDriveShowFileRequest; res: AdminDriveShowFileResponse };
	'admin/emoji/add-aliases-bulk': { req: AdminEmojiAddAliasesBulkRequest; res: EmptyResponse };
	'admin/emoji/add': { req: AdminEmojiAddRequest; res: EmptyResponse };
	'admin/emoji/copy': { req: AdminEmojiCopyRequest; res: AdminEmojiCopyResponse };
	'admin/emoji/delete-bulk': { req: AdminEmojiDeleteBulkRequest; res: EmptyResponse };
	'admin/emoji/delete': { req: AdminEmojiDeleteRequest; res: EmptyResponse };
	'admin/emoji/list-remote': { req: AdminEmojiListRemoteRequest; res: AdminEmojiListRemoteResponse };
	'admin/emoji/list': { req: AdminEmojiListRequest; res: AdminEmojiListResponse };
	'admin/emoji/remove-aliases-bulk': { req: AdminEmojiRemoveAliasesBulkRequest; res: EmptyResponse };
	'admin/emoji/set-aliases-bulk': { req: AdminEmojiSetAliasesBulkRequest; res: EmptyResponse };
	'admin/emoji/set-category-bulk': { req: AdminEmojiSetCategoryBulkRequest; res: EmptyResponse };
	'admin/emoji/set-license-bulk': { req: AdminEmojiSetLicenseBulkRequest; res: EmptyResponse };
	'admin/emoji/update': { req: AdminEmojiUpdateRequest; res: EmptyResponse };
	'admin/federation/delete-all-files': { req: AdminFederationDeleteAllFilesRequest; res: EmptyResponse };
	'admin/federation/refresh-remote-instance-metadata': { req: AdminFederationRefreshRemoteInstanceMetadataRequest; res: EmptyResponse };
	'admin/federation/remove-all-following': { req: AdminFederationRemoveAllFollowingRequest; res: EmptyResponse };
	'admin/federation/update-instance': { req: AdminFederationUpdateInstanceRequest; res: EmptyResponse };
	'admin/get-index-stats': { req: EmptyRequest; res: EmptyResponse };
	'admin/get-table-stats': { req: EmptyRequest; res: AdminGetTableStatsResponse };
	'admin/get-user-ips': { req: AdminGetUserIpsRequest; res: EmptyResponse };
	'admin/invite/create': { req: AdminInviteCreateRequest; res: AdminInviteCreateResponse };
	'admin/invite/list': { req: AdminInviteListRequest; res: AdminInviteListResponse };
	'admin/promo/create': { req: AdminPromoCreateRequest; res: EmptyResponse };
	'admin/queue/clear': { req: EmptyRequest; res: EmptyResponse };
	'admin/queue/deliver-delayed': { req: EmptyRequest; res: AdminQueueDeliverDelayedResponse };
	'admin/queue/inbox-delayed': { req: EmptyRequest; res: AdminQueueInboxDelayedResponse };
	'admin/queue/promote': { req: AdminQueuePromoteRequest; res: EmptyResponse };
	'admin/queue/stats': { req: EmptyRequest; res: AdminQueueStatsResponse };
	'admin/relays/add': { req: AdminRelaysAddRequest; res: AdminRelaysAddResponse };
	'admin/relays/list': { req: EmptyRequest; res: AdminRelaysListResponse };
	'admin/relays/remove': { req: AdminRelaysRemoveRequest; res: EmptyResponse };
	'admin/reset-password': { req: AdminResetPasswordRequest; res: AdminResetPasswordResponse };
	'admin/resolve-abuse-user-report': { req: AdminResolveAbuseUserReportRequest; res: EmptyResponse };
	'admin/send-email': { req: AdminSendEmailRequest; res: EmptyResponse };
	'admin/server-info': { req: EmptyRequest; res: AdminServerInfoResponse };
	'admin/show-moderation-logs': { req: AdminShowModerationLogsRequest; res: AdminShowModerationLogsResponse };
	'admin/show-user': { req: AdminShowUserRequest; res: AdminShowUserResponse };
	'admin/show-users': { req: AdminShowUsersRequest; res: AdminShowUsersResponse };
	'admin/suspend-user': { req: AdminSuspendUserRequest; res: EmptyResponse };
	'admin/unsuspend-user': { req: AdminUnsuspendUserRequest; res: EmptyResponse };
	'admin/update-meta': { req: AdminUpdateMetaRequest; res: EmptyResponse };
	'admin/delete-account': { req: AdminDeleteAccountRequest; res: AdminDeleteAccountResponse };
	'admin/update-user-note': { req: AdminUpdateUserNoteRequest; res: EmptyResponse };
	'admin/roles/create': { req: AdminRolesCreateRequest; res: EmptyResponse };
	'admin/roles/delete': { req: AdminRolesDeleteRequest; res: EmptyResponse };
	'admin/roles/list': { req: EmptyRequest; res: EmptyResponse };
	'admin/roles/show': { req: AdminRolesShowRequest; res: EmptyResponse };
	'admin/roles/update': { req: AdminRolesUpdateRequest; res: EmptyResponse };
	'admin/roles/assign': { req: AdminRolesAssignRequest; res: EmptyResponse };
	'admin/roles/unassign': { req: AdminRolesUnassignRequest; res: EmptyResponse };
	'admin/roles/update-default-policies': { req: AdminRolesUpdateDefaultPoliciesRequest; res: EmptyResponse };
	'admin/roles/users': { req: AdminRolesUsersRequest; res: EmptyResponse };
	'announcements': { req: AnnouncementsRequest; res: AnnouncementsResponse };
	'antennas/create': { req: AntennasCreateRequest; res: AntennasCreateResponse };
	'antennas/delete': { req: AntennasDeleteRequest; res: EmptyResponse };
	'antennas/list': { req: EmptyRequest; res: AntennasListResponse };
	'antennas/notes': { req: AntennasNotesRequest; res: AntennasNotesResponse };
	'antennas/show': { req: AntennasShowRequest; res: AntennasShowResponse };
	'antennas/update': { req: AntennasUpdateRequest; res: AntennasUpdateResponse };
	'ap/get': { req: ApGetRequest; res: ApGetResponse };
	'ap/show': { req: ApShowRequest; res: ApShowResponse };
	'app/create': { req: AppCreateRequest; res: AppCreateResponse };
	'app/show': { req: AppShowRequest; res: AppShowResponse };
	'auth/session/generate': { req: AuthSessionGenerateRequest; res: AuthSessionGenerateResponse };
	'auth/session/show': { req: AuthSessionShowRequest; res: AuthSessionShowResponse };
	'auth/session/userkey': { req: AuthSessionUserkeyRequest; res: AuthSessionUserkeyResponse };
	'blocking/create': { req: BlockingCreateRequest; res: BlockingCreateResponse };
	'blocking/delete': { req: BlockingDeleteRequest; res: BlockingDeleteResponse };
	'blocking/list': { req: BlockingListRequest; res: BlockingListResponse };
	'channels/create': { req: ChannelsCreateRequest; res: ChannelsCreateResponse };
	'channels/featured': { req: EmptyRequest; res: ChannelsFeaturedResponse };
	'channels/follow': { req: ChannelsFollowRequest; res: EmptyResponse };
	'channels/followed': { req: ChannelsFollowedRequest; res: ChannelsFollowedResponse };
	'channels/owned': { req: ChannelsOwnedRequest; res: ChannelsOwnedResponse };
	'channels/show': { req: ChannelsShowRequest; res: ChannelsShowResponse };
	'channels/timeline': { req: ChannelsTimelineRequest; res: ChannelsTimelineResponse };
	'channels/unfollow': { req: ChannelsUnfollowRequest; res: EmptyResponse };
	'channels/update': { req: ChannelsUpdateRequest; res: ChannelsUpdateResponse };
	'channels/favorite': { req: ChannelsFavoriteRequest; res: EmptyResponse };
	'channels/unfavorite': { req: ChannelsUnfavoriteRequest; res: EmptyResponse };
	'channels/my-favorites': { req: EmptyRequest; res: ChannelsMyFavoritesResponse };
	'channels/search': { req: ChannelsSearchRequest; res: ChannelsSearchResponse };
	'charts/active-users': { req: ChartsActiveUsersRequest; res: ChartsActiveUsersResponse };
	'charts/ap-request': { req: ChartsApRequestRequest; res: ChartsApRequestResponse };
	'charts/drive': { req: ChartsDriveRequest; res: ChartsDriveResponse };
	'charts/federation': { req: ChartsFederationRequest; res: ChartsFederationResponse };
	'charts/instance': { req: ChartsInstanceRequest; res: ChartsInstanceResponse };
	'charts/notes': { req: ChartsNotesRequest; res: ChartsNotesResponse };
	'charts/user/drive': { req: ChartsUserDriveRequest; res: ChartsUserDriveResponse };
	'charts/user/following': { req: ChartsUserFollowingRequest; res: ChartsUserFollowingResponse };
	'charts/user/notes': { req: ChartsUserNotesRequest; res: ChartsUserNotesResponse };
	'charts/user/pv': { req: ChartsUserPvRequest; res: ChartsUserPvResponse };
	'charts/user/reactions': { req: ChartsUserReactionsRequest; res: ChartsUserReactionsResponse };
	'charts/users': { req: ChartsUsersRequest; res: ChartsUsersResponse };
	'clips/add-note': { req: ClipsAddNoteRequest; res: EmptyResponse };
	'clips/remove-note': { req: ClipsRemoveNoteRequest; res: EmptyResponse };
	'clips/create': { req: ClipsCreateRequest; res: ClipsCreateResponse };
	'clips/delete': { req: ClipsDeleteRequest; res: EmptyResponse };
	'clips/list': { req: EmptyRequest; res: ClipsListResponse };
	'clips/notes': { req: ClipsNotesRequest; res: ClipsNotesResponse };
	'clips/show': { req: ClipsShowRequest; res: ClipsShowResponse };
	'clips/update': { req: ClipsUpdateRequest; res: ClipsUpdateResponse };
	'clips/favorite': { req: ClipsFavoriteRequest; res: EmptyResponse };
	'clips/unfavorite': { req: ClipsUnfavoriteRequest; res: EmptyResponse };
	'clips/my-favorites': { req: EmptyRequest; res: ClipsMyFavoritesResponse };
	'drive': { req: EmptyRequest; res: DriveResponse };
	'drive/files': { req: DriveFilesRequest; res: DriveFilesResponse };
	'drive/files/attached-notes': { req: DriveFilesAttachedNotesRequest; res: DriveFilesAttachedNotesResponse };
	'drive/files/check-existence': { req: DriveFilesCheckExistenceRequest; res: DriveFilesCheckExistenceResponse };
	'drive/files/create': { req: DriveFilesCreateRequest; res: DriveFilesCreateResponse };
	'drive/files/delete': { req: DriveFilesDeleteRequest; res: EmptyResponse };
	'drive/files/find-by-hash': { req: DriveFilesFindByHashRequest; res: DriveFilesFindByHashResponse };
	'drive/files/find': { req: DriveFilesFindRequest; res: DriveFilesFindResponse };
	'drive/files/show': { req: DriveFilesShowRequest; res: DriveFilesShowResponse };
	'drive/files/update': { req: DriveFilesUpdateRequest; res: DriveFilesUpdateResponse };
	'drive/files/upload-from-url': { req: DriveFilesUploadFromUrlRequest; res: EmptyResponse };
	'drive/folders': { req: DriveFoldersRequest; res: DriveFoldersResponse };
	'drive/folders/create': { req: DriveFoldersCreateRequest; res: DriveFoldersCreateResponse };
	'drive/folders/delete': { req: DriveFoldersDeleteRequest; res: EmptyResponse };
	'drive/folders/find': { req: DriveFoldersFindRequest; res: DriveFoldersFindResponse };
	'drive/folders/show': { req: DriveFoldersShowRequest; res: DriveFoldersShowResponse };
	'drive/folders/update': { req: DriveFoldersUpdateRequest; res: DriveFoldersUpdateResponse };
	'drive/stream': { req: DriveStreamRequest; res: DriveStreamResponse };
	'email-address/available': { req: EmailAddressAvailableRequest; res: EmailAddressAvailableResponse };
	'endpoint': { req: EndpointRequest; res: EmptyResponse };
	'endpoints': { req: EmptyRequest; res: EndpointsResponse };
	'federation/followers': { req: FederationFollowersRequest; res: FederationFollowersResponse };
	'federation/following': { req: FederationFollowingRequest; res: FederationFollowingResponse };
	'federation/instances': { req: FederationInstancesRequest; res: FederationInstancesResponse };
	'federation/show-instance': { req: FederationShowInstanceRequest; res: FederationShowInstanceResponse };
	'federation/update-remote-user': { req: FederationUpdateRemoteUserRequest; res: EmptyResponse };
	'federation/users': { req: FederationUsersRequest; res: FederationUsersResponse };
	'federation/stats': { req: FederationStatsRequest; res: EmptyResponse };
	'following/create': { req: FollowingCreateRequest; res: FollowingCreateResponse };
	'following/delete': { req: FollowingDeleteRequest; res: FollowingDeleteResponse };
	'following/update': { req: FollowingUpdateRequest; res: FollowingUpdateResponse };
	'following/update-all': { req: FollowingUpdateAllRequest; res: EmptyResponse };
	'following/invalidate': { req: FollowingInvalidateRequest; res: FollowingInvalidateResponse };
	'following/requests/accept': { req: FollowingRequestsAcceptRequest; res: EmptyResponse };
	'following/requests/cancel': { req: FollowingRequestsCancelRequest; res: FollowingRequestsCancelResponse };
	'following/requests/list': { req: FollowingRequestsListRequest; res: FollowingRequestsListResponse };
	'following/requests/reject': { req: FollowingRequestsRejectRequest; res: EmptyResponse };
	'gallery/featured': { req: GalleryFeaturedRequest; res: GalleryFeaturedResponse };
	'gallery/popular': { req: EmptyRequest; res: GalleryPopularResponse };
	'gallery/posts': { req: GalleryPostsRequest; res: GalleryPostsResponse };
	'gallery/posts/create': { req: GalleryPostsCreateRequest; res: GalleryPostsCreateResponse };
	'gallery/posts/delete': { req: GalleryPostsDeleteRequest; res: EmptyResponse };
	'gallery/posts/like': { req: GalleryPostsLikeRequest; res: EmptyResponse };
	'gallery/posts/show': { req: GalleryPostsShowRequest; res: GalleryPostsShowResponse };
	'gallery/posts/unlike': { req: GalleryPostsUnlikeRequest; res: EmptyResponse };
	'gallery/posts/update': { req: GalleryPostsUpdateRequest; res: GalleryPostsUpdateResponse };
	'get-online-users-count': { req: EmptyRequest; res: EmptyResponse };
	'get-avatar-decorations': { req: EmptyRequest; res: GetAvatarDecorationsResponse };
	'hashtags/list': { req: HashtagsListRequest; res: HashtagsListResponse };
	'hashtags/search': { req: HashtagsSearchRequest; res: HashtagsSearchResponse };
	'hashtags/show': { req: HashtagsShowRequest; res: HashtagsShowResponse };
	'hashtags/trend': { req: EmptyRequest; res: HashtagsTrendResponse };
	'hashtags/users': { req: HashtagsUsersRequest; res: HashtagsUsersResponse };
	'i': { req: EmptyRequest; res: IResponse };
	'i/claim-achievement': { req: IClaimAchievementRequest; res: EmptyResponse };
	'i/favorites': { req: IFavoritesRequest; res: IFavoritesResponse };
	'i/gallery/likes': { req: IGalleryLikesRequest; res: IGalleryLikesResponse };
	'i/gallery/posts': { req: IGalleryPostsRequest; res: IGalleryPostsResponse };
	'i/notifications': { req: INotificationsRequest; res: INotificationsResponse };
	'i/notifications-grouped': { req: INotificationsGroupedRequest; res: INotificationsGroupedResponse };
	'i/page-likes': { req: IPageLikesRequest; res: IPageLikesResponse };
	'i/pages': { req: IPagesRequest; res: IPagesResponse };
	'i/pin': { req: IPinRequest; res: IPinResponse };
	'i/read-all-unread-notes': { req: EmptyRequest; res: EmptyResponse };
	'i/read-announcement': { req: IReadAnnouncementRequest; res: EmptyResponse };
	'i/registry/get-all': { req: IRegistryGetAllRequest; res: EmptyResponse };
	'i/registry/get-detail': { req: IRegistryGetDetailRequest; res: EmptyResponse };
	'i/registry/get': { req: IRegistryGetRequest; res: EmptyResponse };
	'i/registry/keys-with-type': { req: IRegistryKeysWithTypeRequest; res: EmptyResponse };
	'i/registry/keys': { req: IRegistryKeysRequest; res: EmptyResponse };
	'i/registry/remove': { req: IRegistryRemoveRequest; res: EmptyResponse };
	'i/registry/set': { req: IRegistrySetRequest; res: EmptyResponse };
	'i/unpin': { req: IUnpinRequest; res: IUnpinResponse };
	'i/update': { req: IUpdateRequest; res: IUpdateResponse };
	'i/webhooks/create': { req: IWebhooksCreateRequest; res: EmptyResponse };
	'i/webhooks/list': { req: EmptyRequest; res: EmptyResponse };
	'i/webhooks/show': { req: IWebhooksShowRequest; res: EmptyResponse };
	'i/webhooks/update': { req: IWebhooksUpdateRequest; res: EmptyResponse };
	'i/webhooks/delete': { req: IWebhooksDeleteRequest; res: EmptyResponse };
	'invite/create': { req: EmptyRequest; res: InviteCreateResponse };
	'invite/delete': { req: InviteDeleteRequest; res: EmptyResponse };
	'invite/list': { req: InviteListRequest; res: InviteListResponse };
	'invite/limit': { req: EmptyRequest; res: InviteLimitResponse };
	'meta': { req: MetaRequest; res: MetaResponse };
	'emojis': { req: EmptyRequest; res: EmojisResponse };
	'emoji': { req: EmojiRequest; res: EmojiResponse };
	'mute/create': { req: MuteCreateRequest; res: EmptyResponse };
	'mute/delete': { req: MuteDeleteRequest; res: EmptyResponse };
	'mute/list': { req: MuteListRequest; res: MuteListResponse };
	'renote-mute/create': { req: RenoteMuteCreateRequest; res: EmptyResponse };
	'renote-mute/delete': { req: RenoteMuteDeleteRequest; res: EmptyResponse };
	'renote-mute/list': { req: RenoteMuteListRequest; res: RenoteMuteListResponse };
	'my/apps': { req: MyAppsRequest; res: MyAppsResponse };
	'notes': { req: NotesRequest; res: NotesResponse };
	'notes/children': { req: NotesChildrenRequest; res: NotesChildrenResponse };
	'notes/clips': { req: NotesClipsRequest; res: NotesClipsResponse };
	'notes/conversation': { req: NotesConversationRequest; res: NotesConversationResponse };
	'notes/create': { req: NotesCreateRequest; res: NotesCreateResponse };
	'notes/delete': { req: NotesDeleteRequest; res: EmptyResponse };
	'notes/favorites/create': { req: NotesFavoritesCreateRequest; res: EmptyResponse };
	'notes/favorites/delete': { req: NotesFavoritesDeleteRequest; res: EmptyResponse };
	'notes/featured': { req: NotesFeaturedRequest; res: NotesFeaturedResponse };
	'notes/global-timeline': { req: NotesGlobalTimelineRequest; res: NotesGlobalTimelineResponse };
	'notes/hybrid-timeline': { req: NotesHybridTimelineRequest; res: NotesHybridTimelineResponse };
	'notes/local-timeline': { req: NotesLocalTimelineRequest; res: NotesLocalTimelineResponse };
	'notes/mentions': { req: NotesMentionsRequest; res: NotesMentionsResponse };
	'notes/polls/recommendation': { req: NotesPollsRecommendationRequest; res: NotesPollsRecommendationResponse };
	'notes/polls/vote': { req: NotesPollsVoteRequest; res: EmptyResponse };
	'notes/reactions': { req: NotesReactionsRequest; res: NotesReactionsResponse };
	'notes/reactions/create': { req: NotesReactionsCreateRequest; res: EmptyResponse };
	'notes/reactions/delete': { req: NotesReactionsDeleteRequest; res: EmptyResponse };
	'notes/renotes': { req: NotesRenotesRequest; res: NotesRenotesResponse };
	'notes/replies': { req: NotesRepliesRequest; res: NotesRepliesResponse };
	'notes/search-by-tag': { req: NotesSearchByTagRequest; res: NotesSearchByTagResponse };
	'notes/search': { req: NotesSearchRequest; res: NotesSearchResponse };
	'notes/show': { req: NotesShowRequest; res: NotesShowResponse };
	'notes/state': { req: NotesStateRequest; res: NotesStateResponse };
	'notes/thread-muting/create': { req: NotesThreadMutingCreateRequest; res: EmptyResponse };
	'notes/thread-muting/delete': { req: NotesThreadMutingDeleteRequest; res: EmptyResponse };
	'notes/timeline': { req: NotesTimelineRequest; res: NotesTimelineResponse };
	'notes/translate': { req: NotesTranslateRequest; res: NotesTranslateResponse };
	'notes/unrenote': { req: NotesUnrenoteRequest; res: EmptyResponse };
	'notes/user-list-timeline': { req: NotesUserListTimelineRequest; res: NotesUserListTimelineResponse };
	'notifications/create': { req: NotificationsCreateRequest; res: EmptyResponse };
	'notifications/mark-all-as-read': { req: EmptyRequest; res: EmptyResponse };
	'notifications/test-notification': { req: EmptyRequest; res: EmptyResponse };
	'pages/create': { req: PagesCreateRequest; res: PagesCreateResponse };
	'pages/delete': { req: PagesDeleteRequest; res: EmptyResponse };
	'pages/featured': { req: EmptyRequest; res: PagesFeaturedResponse };
	'pages/like': { req: PagesLikeRequest; res: EmptyResponse };
	'pages/show': { req: PagesShowRequest; res: PagesShowResponse };
	'pages/unlike': { req: PagesUnlikeRequest; res: EmptyResponse };
	'pages/update': { req: PagesUpdateRequest; res: EmptyResponse };
	'flash/create': { req: FlashCreateRequest; res: EmptyResponse };
	'flash/delete': { req: FlashDeleteRequest; res: EmptyResponse };
	'flash/featured': { req: EmptyRequest; res: FlashFeaturedResponse };
	'flash/like': { req: FlashLikeRequest; res: EmptyResponse };
	'flash/show': { req: FlashShowRequest; res: FlashShowResponse };
	'flash/unlike': { req: FlashUnlikeRequest; res: EmptyResponse };
	'flash/update': { req: FlashUpdateRequest; res: EmptyResponse };
	'flash/my': { req: FlashMyRequest; res: FlashMyResponse };
	'flash/my-likes': { req: FlashMyLikesRequest; res: FlashMyLikesResponse };
	'ping': { req: EmptyRequest; res: PingResponse };
	'pinned-users': { req: EmptyRequest; res: PinnedUsersResponse };
	'promo/read': { req: PromoReadRequest; res: EmptyResponse };
	'roles/list': { req: EmptyRequest; res: EmptyResponse };
	'roles/show': { req: RolesShowRequest; res: EmptyResponse };
	'roles/users': { req: RolesUsersRequest; res: EmptyResponse };
	'roles/notes': { req: RolesNotesRequest; res: RolesNotesResponse };
	'request-reset-password': { req: RequestResetPasswordRequest; res: EmptyResponse };
	'reset-db': { req: EmptyRequest; res: EmptyResponse };
	'reset-password': { req: ResetPasswordRequest; res: EmptyResponse };
	'server-info': { req: EmptyRequest; res: EmptyResponse };
	'stats': { req: EmptyRequest; res: StatsResponse };
	'sw/show-registration': { req: SwShowRegistrationRequest; res: SwShowRegistrationResponse };
	'sw/update-registration': { req: SwUpdateRegistrationRequest; res: SwUpdateRegistrationResponse };
	'sw/register': { req: SwRegisterRequest; res: SwRegisterResponse };
	'sw/unregister': { req: SwUnregisterRequest; res: EmptyResponse };
	'test': { req: TestRequest; res: EmptyResponse };
	'username/available': { req: UsernameAvailableRequest; res: UsernameAvailableResponse };
	'users': { req: UsersRequest; res: UsersResponse };
	'users/clips': { req: UsersClipsRequest; res: UsersClipsResponse };
	'users/followers': { req: UsersFollowersRequest; res: UsersFollowersResponse };
	'users/following': { req: UsersFollowingRequest; res: UsersFollowingResponse };
	'users/gallery/posts': { req: UsersGalleryPostsRequest; res: UsersGalleryPostsResponse };
	'users/get-frequently-replied-users': { req: UsersGetFrequentlyRepliedUsersRequest; res: UsersGetFrequentlyRepliedUsersResponse };
	'users/featured-notes': { req: UsersFeaturedNotesRequest; res: UsersFeaturedNotesResponse };
	'users/lists/create': { req: UsersListsCreateRequest; res: UsersListsCreateResponse };
	'users/lists/delete': { req: UsersListsDeleteRequest; res: EmptyResponse };
	'users/lists/list': { req: UsersListsListRequest; res: UsersListsListResponse };
	'users/lists/pull': { req: UsersListsPullRequest; res: EmptyResponse };
	'users/lists/push': { req: UsersListsPushRequest; res: EmptyResponse };
	'users/lists/show': { req: UsersListsShowRequest; res: UsersListsShowResponse };
	'users/lists/favorite': { req: UsersListsFavoriteRequest; res: EmptyResponse };
	'users/lists/unfavorite': { req: UsersListsUnfavoriteRequest; res: EmptyResponse };
	'users/lists/update': { req: UsersListsUpdateRequest; res: UsersListsUpdateResponse };
	'users/lists/create-from-public': { req: UsersListsCreateFromPublicRequest; res: UsersListsCreateFromPublicResponse };
	'users/lists/update-membership': { req: UsersListsUpdateMembershipRequest; res: EmptyResponse };
	'users/lists/get-memberships': { req: UsersListsGetMembershipsRequest; res: EmptyResponse };
	'users/notes': { req: UsersNotesRequest; res: UsersNotesResponse };
	'users/pages': { req: UsersPagesRequest; res: UsersPagesResponse };
	'users/flashs': { req: UsersFlashsRequest; res: UsersFlashsResponse };
	'users/reactions': { req: UsersReactionsRequest; res: UsersReactionsResponse };
	'users/recommendation': { req: UsersRecommendationRequest; res: UsersRecommendationResponse };
	'users/relation': { req: UsersRelationRequest; res: UsersRelationResponse };
	'users/report-abuse': { req: UsersReportAbuseRequest; res: EmptyResponse };
	'users/search-by-username-and-host': { req: UsersSearchByUsernameAndHostRequest; res: UsersSearchByUsernameAndHostResponse };
	'users/search': { req: UsersSearchRequest; res: UsersSearchResponse };
	'users/show': { req: UsersShowRequest; res: UsersShowResponse };
	'users/achievements': { req: UsersAchievementsRequest; res: EmptyResponse };
	'users/update-memo': { req: UsersUpdateMemoRequest; res: EmptyResponse };
	'fetch-rss': { req: FetchRssRequest; res: EmptyResponse };
	'fetch-external-resources': { req: FetchExternalResourcesRequest; res: EmptyResponse };
	'retention': { req: EmptyRequest; res: RetentionResponse };
}
