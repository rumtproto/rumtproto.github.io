---
title: "Update (тип)"
original: "https://core.telegram.org/type/Update"
section: ref
kind: type
layout: layout.njk
---

# Update

*Тип из схемы TL.*

> Object contains info on events occurred.

## Определение TL

```
updateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;
updateMessageID#4e90bfd6 id:int random_id:long = Update;
updateDeleteMessages#a20db0e5 messages:Vector<int> pts:int pts_count:int = Update;
updateUserTyping#2a17bf5c flags:# user_id:long top_msg_id:flags.0?int action:SendMessageAction = Update;
updateChatUserTyping#83487af0 chat_id:long from_id:Peer action:SendMessageAction = Update;
updateChatParticipants#7761198 participants:ChatParticipants = Update;
updateUserStatus#e5bdf8de user_id:long status:UserStatus = Update;
updateUserName#a7848924 user_id:long first_name:string last_name:string usernames:Vector<Username> = Update;
updateNewAuthorization#8951abef flags:# unconfirmed:flags.0?true hash:long date:flags.0?int device:flags.0?string location:flags.0?string = Update;
updateNewEncryptedMessage#12bcbd9a message:EncryptedMessage qts:int = Update;
updateEncryptedChatTyping#1710f156 chat_id:int = Update;
updateEncryption#b4a2e88d chat:EncryptedChat date:int = Update;
updateEncryptedMessagesRead#38fe25b7 chat_id:int max_date:int date:int = Update;
updateChatParticipantAdd#3dda5451 chat_id:long user_id:long inviter_id:long date:int version:int = Update;
updateChatParticipantDelete#e32f3d77 chat_id:long user_id:long version:int = Update;
updateDcOptions#8e5e9873 dc_options:Vector<DcOption> = Update;
updateNotifySettings#bec268ef peer:NotifyPeer notify_settings:PeerNotifySettings = Update;
updateServiceNotification#ebe46819 flags:# popup:flags.0?true invert_media:flags.2?true inbox_date:flags.1?int type:string message:string media:MessageMedia entities:Vector<MessageEntity> = Update;
updatePrivacy#ee3b272a key:PrivacyKey rules:Vector<PrivacyRule> = Update;
updateUserPhone#5492a13 user_id:long phone:string = Update;
updateReadHistoryInbox#9e84bc99 flags:# folder_id:flags.0?int peer:Peer top_msg_id:flags.1?int max_id:int still_unread_count:int pts:int pts_count:int = Update;
updateReadHistoryOutbox#2f2f21bf peer:Peer max_id:int pts:int pts_count:int = Update;
updateWebPage#7f891213 webpage:WebPage pts:int pts_count:int = Update;
updateReadMessagesContents#f8227181 flags:# messages:Vector<int> pts:int pts_count:int date:flags.0?int = Update;
updateChannelTooLong#108d941f flags:# channel_id:long pts:flags.0?int = Update;
updateChannel#635b4c09 channel_id:long = Update;
updateNewChannelMessage#62ba04d9 message:Message pts:int pts_count:int = Update;
updateReadChannelInbox#922e6e10 flags:# folder_id:flags.0?int channel_id:long max_id:int still_unread_count:int pts:int = Update;
updateDeleteChannelMessages#c32d5b12 channel_id:long messages:Vector<int> pts:int pts_count:int = Update;
updateChannelMessageViews#f226ac08 channel_id:long id:int views:int = Update;
updateChatParticipantAdmin#d7ca61a2 chat_id:long user_id:long is_admin:Bool version:int = Update;
updateNewStickerSet#688a30aa stickerset:messages.StickerSet = Update;
updateStickerSetsOrder#bb2d201 flags:# masks:flags.0?true emojis:flags.1?true order:Vector<long> = Update;
updateStickerSets#31c24808 flags:# masks:flags.0?true emojis:flags.1?true = Update;
updateSavedGifs#9375341e = Update;
updateBotInlineQuery#496f379c flags:# query_id:long user_id:long query:string geo:flags.0?GeoPoint peer_type:flags.1?InlineQueryPeerType offset:string = Update;
updateBotInlineSend#12f12a07 flags:# user_id:long query:string geo:flags.0?GeoPoint id:string msg_id:flags.1?InputBotInlineMessageID = Update;
updateEditChannelMessage#1b3f4df7 message:Message pts:int pts_count:int = Update;
updateBotCallbackQuery#b9cfc48d flags:# query_id:long user_id:long peer:Peer msg_id:int chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;
updateEditMessage#e40370a3 message:Message pts:int pts_count:int = Update;
updateInlineBotCallbackQuery#691e9052 flags:# query_id:long user_id:long msg_id:InputBotInlineMessageID chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;
updateReadChannelOutbox#b75f99a9 channel_id:long max_id:int = Update;
updateDraftMessage#edfc111e flags:# peer:Peer top_msg_id:flags.0?int saved_peer_id:flags.1?Peer draft:DraftMessage = Update;
updateReadFeaturedStickers#571d2742 = Update;
updateRecentStickers#9a422c20 = Update;
updateConfig#a229dd06 = Update;
updatePtsChanged#3354678f = Update;
updateChannelWebPage#2f2ba99f channel_id:long webpage:WebPage pts:int pts_count:int = Update;
updateDialogPinned#6e6fe51c flags:# pinned:flags.0?true folder_id:flags.1?int peer:DialogPeer = Update;
updatePinnedDialogs#fa0f3ca2 flags:# folder_id:flags.1?int order:flags.0?Vector<DialogPeer> = Update;
updateBotWebhookJSON#8317c0c3 data:DataJSON = Update;
updateBotWebhookJSONQuery#9b9240a6 query_id:long data:DataJSON timeout:int = Update;
updateBotShippingQuery#b5aefd7d query_id:long user_id:long payload:bytes shipping_address:PostAddress = Update;
updateBotPrecheckoutQuery#8caa9a96 flags:# query_id:long user_id:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string currency:string total_amount:long = Update;
updatePhoneCall#ab0f6b1e phone_call:PhoneCall = Update;
updateLangPackTooLong#46560264 lang_code:string = Update;
updateLangPack#56022f4d difference:LangPackDifference = Update;
updateFavedStickers#e511996d = Update;
updateChannelReadMessagesContents#25f324f7 flags:# channel_id:long top_msg_id:flags.0?int saved_peer_id:flags.1?Peer messages:Vector<int> = Update;
updateContactsReset#7084a7be = Update;
updateChannelAvailableMessages#b23fc698 channel_id:long available_min_id:int = Update;
updateDialogUnreadMark#b658f23e flags:# unread:flags.0?true peer:DialogPeer saved_peer_id:flags.1?Peer = Update;
updateMessagePoll#aca1657b flags:# poll_id:long poll:flags.0?Poll results:PollResults = Update;
updateChatDefaultBannedRights#54c01850 peer:Peer default_banned_rights:ChatBannedRights version:int = Update;
updateFolderPeers#19360dc0 folder_peers:Vector<FolderPeer> pts:int pts_count:int = Update;
updatePeerSettings#6a7e7366 peer:Peer settings:PeerSettings = Update;
updatePeerLocated#b4afcfb0 peers:Vector<PeerLocated> = Update;
updateNewScheduledMessage#39a51dfb message:Message = Update;
updateDeleteScheduledMessages#f2a71983 flags:# peer:Peer messages:Vector<int> sent_messages:flags.0?Vector<int> = Update;
updateTheme#8216fba3 theme:Theme = Update;
updateGeoLiveViewed#871fb939 peer:Peer msg_id:int = Update;
updateLoginToken#564fe691 = Update;
updateMessagePollVote#24f40e77 poll_id:long peer:Peer options:Vector<bytes> qts:int = Update;
updateDialogFilter#26ffde7d flags:# id:int filter:flags.0?DialogFilter = Update;
updateDialogFilterOrder#a5d72105 order:Vector<int> = Update;
updateDialogFilters#3504914f = Update;
updatePhoneCallSignalingData#2661bf09 phone_call_id:long data:bytes = Update;
updateChannelMessageForwards#d29a27f4 channel_id:long id:int forwards:int = Update;
updateReadChannelDiscussionInbox#d6b19546 flags:# channel_id:long top_msg_id:int read_max_id:int broadcast_id:flags.0?long broadcast_post:flags.0?int = Update;
updateReadChannelDiscussionOutbox#695c9e7c channel_id:long top_msg_id:int read_max_id:int = Update;
updatePeerBlocked#ebe07752 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer = Update;
updateChannelUserTyping#8c88c923 flags:# channel_id:long top_msg_id:flags.0?int from_id:Peer action:SendMessageAction = Update;
updatePinnedMessages#ed85eab5 flags:# pinned:flags.0?true peer:Peer messages:Vector<int> pts:int pts_count:int = Update;
updatePinnedChannelMessages#5bb98608 flags:# pinned:flags.0?true channel_id:long messages:Vector<int> pts:int pts_count:int = Update;
updateChat#f89a6a4e chat_id:long = Update;
updateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;
updateGroupCall#9d2216e0 flags:# live_story:flags.2?true peer:flags.1?Peer call:GroupCall = Update;
updatePeerHistoryTTL#bb9bb9a5 flags:# peer:Peer ttl_period:flags.0?int = Update;
updateChatParticipant#d087663a flags:# chat_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChatParticipant new_participant:flags.1?ChatParticipant invite:flags.2?ExportedChatInvite qts:int = Update;
updateChannelParticipant#985d3abb flags:# via_chatlist:flags.3?true channel_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChannelParticipant new_participant:flags.1?ChannelParticipant invite:flags.2?ExportedChatInvite qts:int = Update;
updateBotStopped#c4870a49 user_id:long date:int stopped:Bool qts:int = Update;
updateGroupCallConnection#b783982 flags:# presentation:flags.0?true params:DataJSON = Update;
updateBotCommands#4d712f2e peer:Peer bot_id:long commands:Vector<BotCommand> = Update;
updatePendingJoinRequests#7063c3db peer:Peer requests_pending:int recent_requesters:Vector<long> = Update;
updateBotChatInviteRequester#11dfa986 peer:Peer date:int user_id:long about:string invite:ExportedChatInvite qts:int = Update;
updateMessageReactions#1e297bfa flags:# peer:Peer msg_id:int top_msg_id:flags.0?int saved_peer_id:flags.1?Peer reactions:MessageReactions = Update;
updateAttachMenuBots#17b7a20b = Update;
updateWebViewResultSent#1592b79d query_id:long = Update;
updateBotMenuButton#14b85813 bot_id:long button:BotMenuButton = Update;
updateSavedRingtones#74d8be99 = Update;
updateTranscribedAudio#84cd5a flags:# pending:flags.0?true peer:Peer msg_id:int transcription_id:long text:string = Update;
updateReadFeaturedEmojiStickers#fb4c496c = Update;
updateUserEmojiStatus#28373599 user_id:long emoji_status:EmojiStatus = Update;
updateRecentEmojiStatuses#30f443db = Update;
updateRecentReactions#6f7863f4 = Update;
updateMoveStickerSetToTop#86fccf85 flags:# masks:flags.0?true emojis:flags.1?true stickerset:long = Update;
updateMessageExtendedMedia#d5a41724 peer:Peer msg_id:int extended_media:Vector<MessageExtendedMedia> = Update;
updateUser#20529438 user_id:long = Update;
updateAutoSaveSettings#ec05b097 = Update;
updateStory#75b3b798 peer:Peer story:StoryItem = Update;
updateReadStories#f74e932b peer:Peer max_id:int = Update;
updateStoryID#1bf335b9 id:int random_id:long = Update;
updateStoriesStealthMode#2c084dc1 stealth_mode:StoriesStealthMode = Update;
updateSentStoryReaction#7d627683 peer:Peer story_id:int reaction:Reaction = Update;
updateBotChatBoost#904dd49c peer:Peer boost:Boost qts:int = Update;
updateChannelViewForumAsMessages#7b68920 channel_id:long enabled:Bool = Update;
updatePeerWallpaper#ae3f101d flags:# wallpaper_overridden:flags.1?true peer:Peer wallpaper:flags.0?WallPaper = Update;
updateBotMessageReaction#ac21d3ce peer:Peer msg_id:int date:int actor:Peer old_reactions:Vector<Reaction> new_reactions:Vector<Reaction> qts:int = Update;
updateBotMessageReactions#9cb7759 peer:Peer msg_id:int date:int reactions:Vector<ReactionCount> qts:int = Update;
updateSavedDialogPinned#aeaf9e74 flags:# pinned:flags.0?true peer:DialogPeer = Update;
updatePinnedSavedDialogs#686c85a6 flags:# order:flags.0?Vector<DialogPeer> = Update;
updateSavedReactionTags#39c67432 = Update;
updateSmsJob#f16269d4 job_id:string = Update;
updateQuickReplies#f9470ab2 quick_replies:Vector<QuickReply> = Update;
updateNewQuickReply#f53da717 quick_reply:QuickReply = Update;
updateDeleteQuickReply#53e6f1ec shortcut_id:int = Update;
updateQuickReplyMessage#3e050d0f message:Message = Update;
updateDeleteQuickReplyMessages#566fe7cd shortcut_id:int messages:Vector<int> = Update;
updateBotBusinessConnect#8ae5c97a connection:BotBusinessConnection qts:int = Update;
updateBotNewBusinessMessage#9ddb347c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;
updateBotEditBusinessMessage#7df587c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;
updateBotDeleteBusinessMessage#a02a982e connection_id:string peer:Peer messages:Vector<int> qts:int = Update;
updateNewStoryReaction#1824e40b story_id:int peer:Peer reaction:Reaction = Update;
updateStarsBalance#4e80a379 balance:StarsAmount = Update;
updateBusinessBotCallbackQuery#1ea2fda7 flags:# query_id:long user_id:long connection_id:string message:Message reply_to_message:flags.2?Message chat_instance:long data:flags.0?bytes = Update;
updateStarsRevenueStatus#a584b019 peer:Peer status:StarsRevenueStatus = Update;
updateBotPurchasedPaidMedia#283bd312 user_id:long payload:string qts:int = Update;
updatePaidReactionPrivacy#8b725fce private:PaidReactionPrivacy = Update;
updateSentPhoneCode#504aa18f sent_code:auth.SentCode = Update;
updateGroupCallChainBlocks#a477288f call:InputGroupCall sub_chain_id:int blocks:Vector<bytes> next_offset:int = Update;
updateReadMonoForumInbox#77b0e372 channel_id:long saved_peer_id:Peer read_max_id:int = Update;
updateReadMonoForumOutbox#a4a79376 channel_id:long saved_peer_id:Peer read_max_id:int = Update;
updateMonoForumNoPaidException#9f812b08 flags:# exception:flags.0?true channel_id:long saved_peer_id:Peer = Update;
updateGroupCallMessage#d8326f0d call:InputGroupCall message:GroupCallMessage = Update;
updateGroupCallEncryptedMessage#c957a766 call:InputGroupCall from_id:Peer encrypted_message:bytes = Update;
updatePinnedForumTopic#683b2c52 flags:# pinned:flags.0?true peer:Peer topic_id:int = Update;
updatePinnedForumTopics#def143d0 flags:# peer:Peer order:flags.0?Vector<int> = Update;
updateDeleteGroupCallMessages#3e85e92c call:InputGroupCall messages:Vector<int> = Update;
updateStarGiftAuctionState#48e246c2 gift_id:long state:StarGiftAuctionState = Update;
updateStarGiftAuctionUserState#dc58f31e gift_id:long user_state:StarGiftAuctionUserState = Update;
updateEmojiGameInfo#fb9c547a info:messages.EmojiGameInfo = Update;
updateStarGiftCraftFail#ac072444 = Update;
updateChatParticipantRank#bd8367b9 chat_id:long user_id:long rank:string version:int = Update;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [updateNewMessage](/constructor/updateNewMessage/) | New message in a private chat or in a [basic group](https://core.telegram.org/api/channel#basic-groups). |
| [updateMessageID](/constructor/updateMessageID/) | Sent message with random_id client identifier was assigned an identifier. |
| [updateDeleteMessages](/constructor/updateDeleteMessages/) | Messages were deleted. |
| [updateUserTyping](/constructor/updateUserTyping/) | The user is preparing a message; typing, recording, uploading, etc. This update is valid for 6 seconds. If no further updates of this kind are received after 6 seconds, it should be considered that the user stopped doing whatever they were doing |
| [updateChatUserTyping](/constructor/updateChatUserTyping/) | The user is preparing a message in a group; typing, recording, uploading, etc. This update is valid for 6 seconds. If no further updates of this kind are received after 6 seconds, it should be considered that the user stopped doing whatever they were doing |
| [updateChatParticipants](/constructor/updateChatParticipants/) | The participants of a [basic group »](https://core.telegram.org/api/channel#basic-groups) changed. |
| [updateUserStatus](/constructor/updateUserStatus/) | Contact status update. |
| [updateUserName](/constructor/updateUserName/) | Changes the user's first name, last name and username. |
| [updateNewAuthorization](/constructor/updateNewAuthorization/) | A new session logged into the current user's account through an unknown device. |
| [updateNewEncryptedMessage](/constructor/updateNewEncryptedMessage/) | New encrypted message. |
| [updateEncryptedChatTyping](/constructor/updateEncryptedChatTyping/) | Interlocutor is typing a message in an encrypted chat. Update period is 6 second. If upon this time there is no repeated update, it shall be considered that the interlocutor stopped typing. |
| [updateEncryption](/constructor/updateEncryption/) | Change of state in an encrypted chat. |
| [updateEncryptedMessagesRead](/constructor/updateEncryptedMessagesRead/) | Communication history in an encrypted chat was marked as read. |
| [updateChatParticipantAdd](/constructor/updateChatParticipantAdd/) | New group member. |
| [updateChatParticipantDelete](/constructor/updateChatParticipantDelete/) | A member has left the [basic group](https://core.telegram.org/api/channel#basic-groups). |
| [updateDcOptions](/constructor/updateDcOptions/) | Changes in the data center configuration options. |
| [updateNotifySettings](/constructor/updateNotifySettings/) | Changes in notification settings. |
| [updateServiceNotification](/constructor/updateServiceNotification/) | A service message for the user. The app must show the message to the user upon receiving this update. In case the popup parameter was passed, the text message must be displayed in a popup alert immediately upon receipt. It is recommended to handle the text as you would an ordinary message in terms of highlighting links, etc. The message must also be stored locally as part of the message history with the user id 777000 (Telegram Notifications). |
| [updatePrivacy](/constructor/updatePrivacy/) | Privacy rules were changed |
| [updateUserPhone](/constructor/updateUserPhone/) | A user's phone number was changed |
| [updateReadHistoryInbox](/constructor/updateReadHistoryInbox/) | Incoming messages were read |
| [updateReadHistoryOutbox](/constructor/updateReadHistoryOutbox/) | Outgoing messages were read |
| [updateWebPage](/constructor/updateWebPage/) | An [instant view](https://instantview.telegram.org) webpage preview was generated |
| [updateReadMessagesContents](/constructor/updateReadMessagesContents/) | Contents of messages in the common [message box](/api/updates/) were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [messages.readMessageContents](/method/messages.readMessageContents/)). |
| [updateChannelTooLong](/constructor/updateChannelTooLong/) | There are new updates in the specified channel, the client must fetch them manually by invoking [updates.getChannelDifference](/method/updates.getChannelDifference/) as specified in the [documentation »](/api/updates/). If the channel's PTS isn't currently stored in the database (i.e. we joined this channel on another client while the current client was offline), start fetching from the specified pts. Does not necessarily indicate the [channel message box size limit was reached](https://core.telegram.org/api/updates/#recovering-gaps-for-very-old-messages), it simply indicates that the number of queued updates in a message box is too large to be delivered passively through the socket. |
| [updateChannel](/constructor/updateChannel/) | Channel/supergroup ([channel](/constructor/channel/) and/or [channelFull](/constructor/channelFull/)) information was updated. This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will always come bundled with the updated [channel](/constructor/channel/), that should be applied [as usual »](https://core.telegram.org/api/peers), without re-fetching the info manually. However, full peer information will not come bundled in updates, so the full peer cache ([channelFull](/constructor/channelFull/)) must be invalidated for channel_id when receiving this update. |
| [updateNewChannelMessage](/constructor/updateNewChannelMessage/) | A new message was sent in a [channel/supergroup](https://core.telegram.org/api/channel) |
| [updateReadChannelInbox](/constructor/updateReadChannelInbox/) | Incoming messages in a [channel/supergroup](https://core.telegram.org/api/channel) were read |
| [updateDeleteChannelMessages](/constructor/updateDeleteChannelMessages/) | Some messages in a [supergroup/channel](https://core.telegram.org/api/channel) were deleted |
| [updateChannelMessageViews](/constructor/updateChannelMessageViews/) | The view counter of a message in a channel has changed |
| [updateChatParticipantAdmin](/constructor/updateChatParticipantAdmin/) | Admin permissions of a user in a [basic group](https://core.telegram.org/api/channel#basic-groups) were changed |
| [updateNewStickerSet](/constructor/updateNewStickerSet/) | A new stickerset was installed |
| [updateStickerSetsOrder](/constructor/updateStickerSetsOrder/) | The order of stickersets was changed |
| [updateStickerSets](/constructor/updateStickerSets/) | Installed stickersets have changed, the client should refetch them as [described in the docs](https://core.telegram.org/api/stickers#installing-stickersets). |
| [updateSavedGifs](/constructor/updateSavedGifs/) | The saved gif list has changed, the client should refetch it using [messages.getSavedGifs](https://core.telegram.org/method/messages.getSavedGifs) |
| [updateBotInlineQuery](/constructor/updateBotInlineQuery/) | An incoming inline query |
| [updateBotInlineSend](/constructor/updateBotInlineSend/) | The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the [feedback collecting](https://core.telegram.org/bots/inline#collecting-feedback) for details on how to enable these updates for your bot. |
| [updateEditChannelMessage](/constructor/updateEditChannelMessage/) | A message was edited in a [channel/supergroup](https://core.telegram.org/api/channel) |
| [updateBotCallbackQuery](/constructor/updateBotCallbackQuery/) | A callback button was pressed, and the button data was sent to the bot that created the button |
| [updateEditMessage](/constructor/updateEditMessage/) | A message was edited |
| [updateInlineBotCallbackQuery](/constructor/updateInlineBotCallbackQuery/) | This notification is received by bots when a button is pressed |
| [updateReadChannelOutbox](/constructor/updateReadChannelOutbox/) | Outgoing messages in a [channel/supergroup](https://core.telegram.org/api/channel) were read |
| [updateDraftMessage](/constructor/updateDraftMessage/) | Notifies a change of a message [draft](https://core.telegram.org/api/drafts). |
| [updateReadFeaturedStickers](/constructor/updateReadFeaturedStickers/) | Some featured stickers were marked as read |
| [updateRecentStickers](/constructor/updateRecentStickers/) | The recent sticker list was updated |
| [updateConfig](/constructor/updateConfig/) | The server-side configuration has changed; the client should re-fetch the config using [help.getConfig](/method/help.getConfig/) and [help.getAppConfig](/method/help.getAppConfig/). |
| [updatePtsChanged](/constructor/updatePtsChanged/) | [Common message box sequence PTS](/api/updates/) has changed, [state has to be refetched using updates.getState](https://core.telegram.org/api/updates/#fetching-state) |
| [updateChannelWebPage](/constructor/updateChannelWebPage/) | A webpage preview of a link in a [channel/supergroup](https://core.telegram.org/api/channel) message was generated |
| [updateDialogPinned](/constructor/updateDialogPinned/) | A dialog was pinned/unpinned |
| [updatePinnedDialogs](/constructor/updatePinnedDialogs/) | Pinned dialogs were updated |
| [updateBotWebhookJSON](/constructor/updateBotWebhookJSON/) | A new incoming event; for bots only |
| [updateBotWebhookJSONQuery](/constructor/updateBotWebhookJSONQuery/) | A new incoming query; for bots only |
| [updateBotShippingQuery](/constructor/updateBotShippingQuery/) | This object contains information about an incoming shipping query. |
| [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/) | This object contains information about an incoming pre-checkout query. |
| [updatePhoneCall](/constructor/updatePhoneCall/) | An incoming phone call |
| [updateLangPackTooLong](/constructor/updateLangPackTooLong/) | A language pack has changed, the client should manually fetch the changed strings using [langpack.getDifference](/method/langpack.getDifference/) |
| [updateLangPack](/constructor/updateLangPack/) | Language pack updated |
| [updateFavedStickers](/constructor/updateFavedStickers/) | The list of favorited stickers was changed, the client should call [messages.getFavedStickers](/method/messages.getFavedStickers/) to refetch the new list |
| [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/) | The specified [channel/supergroup](https://core.telegram.org/api/channel) messages were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [channels.readMessageContents](/method/channels.readMessageContents/)) |
| [updateContactsReset](/constructor/updateContactsReset/) | All contacts were deleted |
| [updateChannelAvailableMessages](/constructor/updateChannelAvailableMessages/) | The history of a [channel/supergroup](https://core.telegram.org/api/channel) was hidden. |
| [updateDialogUnreadMark](/constructor/updateDialogUnreadMark/) | The manual unread mark of a chat was changed |
| [updateMessagePoll](/constructor/updateMessagePoll/) | The results of a poll have changed |
| [updateChatDefaultBannedRights](/constructor/updateChatDefaultBannedRights/) | Default banned rights in a [basic group](https://core.telegram.org/api/channel#basic-groups) were updated |
| [updateFolderPeers](/constructor/updateFolderPeers/) | The peer list of a [peer folder](https://core.telegram.org/api/folders#peer-folders) was updated |
| [updatePeerSettings](/constructor/updatePeerSettings/) | Settings of a certain peer have changed |
| [updatePeerLocated](/constructor/updatePeerLocated/) | List of peers near you was updated |
| [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/) | A message was added to the [schedule queue of a chat](https://core.telegram.org/api/scheduled-messages) |
| [updateDeleteScheduledMessages](/constructor/updateDeleteScheduledMessages/) | Some [scheduled messages](https://core.telegram.org/api/scheduled-messages) were deleted (or sent) from the schedule queue of a chat |
| [updateTheme](/constructor/updateTheme/) | A cloud theme was updated |
| [updateGeoLiveViewed](/constructor/updateGeoLiveViewed/) | Live geoposition message was viewed |
| [updateLoginToken](/constructor/updateLoginToken/) | A login token (for login via QR code) was accepted. |
| [updateMessagePollVote](/constructor/updateMessagePollVote/) | A specific peer has voted in a poll (this update can only be received by a bot). |
| [updateDialogFilter](/constructor/updateDialogFilter/) | A new [folder](https://core.telegram.org/api/folders) was added |
| [updateDialogFilterOrder](/constructor/updateDialogFilterOrder/) | New [folder](https://core.telegram.org/api/folders) order |
| [updateDialogFilters](/constructor/updateDialogFilters/) | Clients should update [folder](https://core.telegram.org/api/folders) info |
| [updatePhoneCallSignalingData](/constructor/updatePhoneCallSignalingData/) | Incoming phone call signaling payload |
| [updateChannelMessageForwards](/constructor/updateChannelMessageForwards/) | The forward counter of a message in a channel has changed |
| [updateReadChannelDiscussionInbox](/constructor/updateReadChannelDiscussionInbox/) | Incoming comments in a [discussion thread](https://core.telegram.org/api/threads) were marked as read |
| [updateReadChannelDiscussionOutbox](/constructor/updateReadChannelDiscussionOutbox/) | Outgoing comments in a [discussion thread](https://core.telegram.org/api/threads) were marked as read |
| [updatePeerBlocked](/constructor/updatePeerBlocked/) | We blocked a peer, see [here »](https://core.telegram.org/api/block) for more info on blocklists. |
| [updateChannelUserTyping](/constructor/updateChannelUserTyping/) | A user is typing in a [supergroup, channel](https://core.telegram.org/api/channel) or [message thread](https://core.telegram.org/api/threads) |
| [updatePinnedMessages](/constructor/updatePinnedMessages/) | Some messages were pinned in a chat |
| [updatePinnedChannelMessages](/constructor/updatePinnedChannelMessages/) | Messages were pinned/unpinned in a [channel/supergroup](https://core.telegram.org/api/channel) |
| [updateChat](/constructor/updateChat/) | Chat ([chat](/constructor/chat/) and/or [chatFull](/constructor/chatFull/)) information was updated. This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will always come bundled with the updated [chat](/constructor/chat/), that should be applied [as usual »](https://core.telegram.org/api/peers), without re-fetching the info manually. However, full peer information will not come bundled in updates, so the full peer cache ([chatFull](/constructor/chatFull/)) must be invalidated for chat_id when receiving this update. |
| [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) | The participant list of a [group call](https://core.telegram.org/api/group-calls#applying-group-call-updates) has changed. |
| [updateGroupCall](/constructor/updateGroupCall/) | Indicates that group call information changed, see [applying group call updates »](https://core.telegram.org/api/group-calls#applying-group-call-updates). |
| [updatePeerHistoryTTL](/constructor/updatePeerHistoryTTL/) | The Time-To-Live for messages sent by the current user in a specific chat has changed |
| [updateChatParticipant](/constructor/updateChatParticipant/) | A user has joined or left a specific [basic group »](https://core.telegram.org/api/channel#basic-groups): this update can only be received by bots, see [here »](https://core.telegram.org/api/peers#basic-group-updates) for the user version of this update. |
| [updateChannelParticipant](/constructor/updateChannelParticipant/) | A participant has left, joined, was banned or admined in a [channel or supergroup](https://core.telegram.org/api/channel). |
| [updateBotStopped](/constructor/updateBotStopped/) | A bot was stopped or re-started. |
| [updateGroupCallConnection](/constructor/updateGroupCallConnection/) | Connection parameters returned after joining a group call, see [presentations »](https://core.telegram.org/api/group-calls#presentations) and [stream mode »](https://core.telegram.org/api/group-calls#stream-mode). If presentation is set, the parameters belong to the separate [presentation connection](https://core.telegram.org/api/group-calls#presentations); otherwise they belong to the main connection. For a normal WebRTC connection, pass params to the local tgcalls group-call engine as its join response payload. For [stream-mode calls](https://core.telegram.org/api/group-calls#detecting-stream-mode), where the client plays the call by [downloading media chunks »](https://core.telegram.org/api/group-calls#downloading-media-chunks) instead of using WebRTC, params instead has one of the following shapes: json<br>{<br> "stream": true<br>}<br> for a call that entered [stream mode](https://core.telegram.org/api/group-calls#stream-mode), or json<br>{<br> "stream": true,<br> "rtmp": true<br>}<br> for an [RTMP-mode call](https://core.telegram.org/api/group-calls#creating-and-publishing-an-rtmp-livestream). |
| [updateBotCommands](/constructor/updateBotCommands/) | The [command set](https://core.telegram.org/api/bots/commands) of a certain bot in a certain chat has changed. |
| [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/) | Someone has requested to join a chat or channel |
| [updateBotChatInviteRequester](/constructor/updateBotChatInviteRequester/) | Someone has requested to join a chat or channel (bots only, users will receive an [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/), instead) |
| [updateMessageReactions](/constructor/updateMessageReactions/) | New [message reactions »](https://core.telegram.org/api/reactions) are available |
| [updateAttachMenuBots](/constructor/updateAttachMenuBots/) | The list of installed [attachment menu entries »](https://core.telegram.org/api/bots/attach) has changed, use [messages.getAttachMenuBots](/method/messages.getAttachMenuBots/) to fetch the updated list. |
| [updateWebViewResultSent](/constructor/updateWebViewResultSent/) | Indicates to a bot that a webview was closed and an inline message was sent on behalf of the user using [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/) |
| [updateBotMenuButton](/constructor/updateBotMenuButton/) | The menu button behavior for the specified bot has changed |
| [updateSavedRingtones](/constructor/updateSavedRingtones/) | The list of saved notification sounds has changed, use [account.getSavedRingtones](/method/account.getSavedRingtones/) to fetch the new list. |
| [updateTranscribedAudio](/constructor/updateTranscribedAudio/) | A pending [voice message transcription »](https://core.telegram.org/api/transcribe) initiated with [messages.transcribeAudio](/method/messages.transcribeAudio/) was updated. |
| [updateReadFeaturedEmojiStickers](/constructor/updateReadFeaturedEmojiStickers/) | Some featured [custom emoji stickers](https://core.telegram.org/api/custom-emoji) were marked as read |
| [updateUserEmojiStatus](/constructor/updateUserEmojiStatus/) | The [emoji status](https://core.telegram.org/api/emoji-status) of a certain user has changed |
| [updateRecentEmojiStatuses](/constructor/updateRecentEmojiStatuses/) | The list of recent [emoji statuses](https://core.telegram.org/api/emoji-status) has changed |
| [updateRecentReactions](/constructor/updateRecentReactions/) | The list of recent [message reactions](https://core.telegram.org/api/reactions) has changed |
| [updateMoveStickerSetToTop](/constructor/updateMoveStickerSetToTop/) | A stickerset was just moved to top, [see here for more info »](https://core.telegram.org/api/stickers#recent-stickersets) |
| [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) | You [bought a paid media »](https://core.telegram.org/api/paid-media): this update contains the revealed media. |
| [updateUser](/constructor/updateUser/) | User ([user](/constructor/user/) and/or [userFull](/constructor/userFull/)) information was updated. This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will always come bundled with the updated [user](/constructor/user/), that should be applied [as usual »](https://core.telegram.org/api/peers), without re-fetching the info manually. However, full peer information will not come bundled in updates, so the full peer cache ([userFull](/constructor/userFull/)) must be invalidated for user_id when receiving this update. |
| [updateAutoSaveSettings](/constructor/updateAutoSaveSettings/) | Media autosave settings have changed and must be refetched using [account.getAutoSaveSettings](/method/account.getAutoSaveSettings/). |
| [updateStory](/constructor/updateStory/) | A new story was posted. |
| [updateReadStories](/constructor/updateReadStories/) | Stories of a specific peer were marked as read. |
| [updateStoryID](/constructor/updateStoryID/) | A story was successfully uploaded. Once a story is successfully uploaded, an [updateStoryID](/constructor/updateStoryID/) will be returned, indicating the story ID (id) that was attributed to the story (like for messages, random_id indicates the random_id that was passed to [stories.sendStory](/method/stories.sendStory/): this way, you can tell which story was assigned a specific id by checking which [stories.sendStory](/method/stories.sendStory/) call has the returned random_id). |
| [updateStoriesStealthMode](/constructor/updateStoriesStealthMode/) | Indicates that [stories stealth mode](https://core.telegram.org/api/stories#stealth-mode) was activated. |
| [updateSentStoryReaction](/constructor/updateSentStoryReaction/) | Indicates we [reacted to a story »](https://core.telegram.org/api/stories#reactions). |
| [updateBotChatBoost](/constructor/updateBotChatBoost/) | A [channel/supergroup boost](https://core.telegram.org/api/boost) has changed (bots only) |
| [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/) | Users may also choose to display messages from all topics as if they were sent to a normal group, using a "View as messages" setting in the local client. This setting only affects the current account, and is synced to other logged in sessions using the [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) method; invoking this method will update the value of the view_forum_as_messages flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/). |
| [updatePeerWallpaper](/constructor/updatePeerWallpaper/) | The [wallpaper »](https://core.telegram.org/api/wallpapers) of a given peer has changed. |
| [updateBotMessageReaction](/constructor/updateBotMessageReaction/) | Bots only: a user has changed their reactions on a message with public reactions. |
| [updateBotMessageReactions](/constructor/updateBotMessageReactions/) | Bots only: the number of reactions on a message with anonymous reactions has changed. |
| [updateSavedDialogPinned](/constructor/updateSavedDialogPinned/) | A [saved message dialog](https://core.telegram.org/api/saved-messages) was pinned/unpinned |
| [updatePinnedSavedDialogs](/constructor/updatePinnedSavedDialogs/) | [Pinned saved dialogs »](https://core.telegram.org/api/saved-messages) were updated |
| [updateSavedReactionTags](/constructor/updateSavedReactionTags/) | The list of [reaction tag »](https://core.telegram.org/api/saved-messages#tags) names assigned by the user has changed and should be refetched using [messages.getSavedReactionTags »](/method/messages.getSavedReactionTags/). |
| [updateSmsJob](/constructor/updateSmsJob/) | A new SMS job was received |
| [updateQuickReplies](/constructor/updateQuickReplies/) | Info about or the order of [quick reply shortcuts »](https://core.telegram.org/api/business#quick-reply-shortcuts) was changed. |
| [updateNewQuickReply](/constructor/updateNewQuickReply/) | A new [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) was created. |
| [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/) | A [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) was deleted. This will not emit [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) updates, even if all the messages in the shortcut are also deleted by this update. |
| [updateQuickReplyMessage](/constructor/updateQuickReplyMessage/) | A new message was added to a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) | One or more messages in a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) were deleted. |
| [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) | Connecting or disconnecting a [business bot](https://core.telegram.org/api/bots/connected-business-bots) or changing the connection settings will emit an [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) update to the bot, with the new settings and a connection_id that will be used by the bot to handle updates from and send messages as the user. |
| [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/) | A message was received via a [connected business chat »](https://core.telegram.org/api/bots/connected-business-bots). |
| [updateBotEditBusinessMessage](/constructor/updateBotEditBusinessMessage/) | A message was edited in a [connected business chat »](https://core.telegram.org/api/bots/connected-business-bots). |
| [updateBotDeleteBusinessMessage](/constructor/updateBotDeleteBusinessMessage/) | A message was deleted in a [connected business chat »](https://core.telegram.org/api/bots/connected-business-bots). |
| [updateNewStoryReaction](/constructor/updateNewStoryReaction/) | Represents a new [reaction to a story](https://core.telegram.org/api/reactions#notifications-about-reactions). |
| [updateStarsBalance](/constructor/updateStarsBalance/) | The current account's [Telegram Stars balance »](https://core.telegram.org/api/stars) has changed. |
| [updateBusinessBotCallbackQuery](/constructor/updateBusinessBotCallbackQuery/) | A callback button sent via a [business connection](https://core.telegram.org/api/bots/connected-business-bots) was pressed, and the button data was sent to the bot that created the button. |
| [updateStarsRevenueStatus](/constructor/updateStarsRevenueStatus/) | The [Telegram Star balance of a channel/bot we own has changed »](https://core.telegram.org/api/stars#revenue-statistics). |
| [updateBotPurchasedPaidMedia](/constructor/updateBotPurchasedPaidMedia/) | Bots only: a user has purchased a [paid media](https://core.telegram.org/api/paid-media). |
| [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) | Contains the current [default paid reaction privacy, see here »](https://core.telegram.org/api/reactions#paid-reactions) for more info. Clients should invoke [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/) on startup to fetch the current default reaction privacy because this update is only sent to currently online sessions and cannot be fetched using getDifference on client startup. |
| [updateSentPhoneCode](/constructor/updateSentPhoneCode/) | A paid login SMS code was successfully sent. |
| [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) | Contains conference call blockchain blocks, see [handling E2E group call updates »](https://core.telegram.org/api/end-to-end/group-calls#handling-updates). |
| [updateReadMonoForumInbox](/constructor/updateReadMonoForumInbox/) | Incoming messages in a [monoforum topic](https://core.telegram.org/api/monoforum) were read |
| [updateReadMonoForumOutbox](/constructor/updateReadMonoForumOutbox/) | Outgoing messages in a [monoforum](https://core.telegram.org/api/monoforum) were read. |
| [updateMonoForumNoPaidException](/constructor/updateMonoForumNoPaidException/) | An admin has (un)exempted this [monoforum topic »](https://core.telegram.org/api/monoforum) from payment to send messages using [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/). |
| [updateGroupCallMessage](/constructor/updateGroupCallMessage/) | A new message, reaction, paid comment or donation was received through the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages). |
| [updateGroupCallEncryptedMessage](/constructor/updateGroupCallEncryptedMessage/) | A new E2E-encrypted message or emoji reaction was received in a conference call, see [here »](https://core.telegram.org/api/end-to-end/group-calls#receiving-and-decrypting-a-message) for the decryption process. |
| [updatePinnedForumTopic](/constructor/updatePinnedForumTopic/) | A [forum topic »](https://core.telegram.org/api/forum#forum-topics) was pinned or unpinned. |
| [updatePinnedForumTopics](/constructor/updatePinnedForumTopics/) | The [pinned topics](https://core.telegram.org/api/forum#forum-topics) of a forum have changed. |
| [updateDeleteGroupCallMessages](/constructor/updateDeleteGroupCallMessages/) | Indicates that messages were deleted from the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages) of a video chat/livestream or live story, including in RTMP mode. |
| [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) | Contains updates to [auction state, see here »](https://core.telegram.org/api/auctions) for more info on how to enable these updates. |
| [updateStarGiftAuctionUserState](/constructor/updateStarGiftAuctionUserState/) | Contains updates to [auction state related to the current user, see here »](https://core.telegram.org/api/auctions) for more info on how to enable these updates. |
| [updateEmojiGameInfo](/constructor/updateEmojiGameInfo/) | Dice game update. |
| [updateStarGiftCraftFail](/constructor/updateStarGiftCraftFail/) | Indicates that a [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts) attempt did not produce a new collectible gift. |
| [updateChatParticipantRank](/constructor/updateChatParticipantRank/) | The [tag »](https://core.telegram.org/api/rank) of a participant of a [basic group »](https://core.telegram.org/api/channel#basic-groups) has changed. |
| [updateManagedBot](https://core.telegram.org/constructor/updateManagedBot) | [Manager bots](https://core.telegram.org/api/bots/managed-bots) only: a bot managed by the currently logged in bot was created or updated. |
| [updateBotGuestChatQuery](https://core.telegram.org/constructor/updateBotGuestChatQuery) | Sent to [guest bots »](https://core.telegram.org/api/bots/guest-mode) when a user invokes the bot as a guest in a chat. The bot should reply by invoking [messages.setBotGuestChatResult](https://core.telegram.org/method/messages.setBotGuestChatResult), see [here »](https://core.telegram.org/api/bots/guest-mode#handling-guest-queries-bot-side) for more info. |
| [updateAiComposeTones](https://core.telegram.org/constructor/updateAiComposeTones) | The list of saved [AI composer tones »](https://core.telegram.org/api/ai#ai-compose-tones) of the current user has changed, and should be refetched using [aicompose.getTones](https://core.telegram.org/method/aicompose.getTones). |
