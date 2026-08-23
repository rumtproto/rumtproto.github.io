---
title: "Updates (тип)"
original: "https://core.telegram.org/type/Updates"
section: ref
kind: type
layout: layout.njk
---

# Updates

*Тип из схемы TL.*

> Object which is perceived by the client without a call on its part when an event occurs.

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;

---functions---

contacts.deleteContacts#96a0e00 id:Vector<InputUser> = Updates;
contacts.addContact#d9ba2e54 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string note:flags.1?TextWithEntities = Updates;
contacts.acceptContact#f831a20f id:InputUser = Updates;
contacts.getLocated#d348bc44 flags:# background:flags.1?true geo_point:InputGeoPoint self_expires:flags.0?int = Updates;
contacts.blockFromReplies#29a8962c flags:# delete_message:flags.0?true delete_history:flags.1?true report_spam:flags.2?true msg_id:int = Updates;

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMedia#330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.forwardMessages#13704a7c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
messages.editChatTitle#73783ffd chat_id:long title:string = Updates;
messages.editChatPhoto#35ddd674 chat_id:long photo:InputChatPhoto = Updates;
messages.deleteChatUser#a2185cab flags:# revoke_history:flags.0?true chat_id:long user_id:InputUser = Updates;
messages.importChatInvite#6c50051c hash:string = Updates;
messages.startBot#e6df7378 bot:InputUser peer:InputPeer random_id:long start_param:string = Updates;
messages.migrateChat#a2875319 chat_id:long = Updates;
messages.sendInlineBotResult#c0cf7646 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut allow_paid_stars:flags.21?long = Updates;
messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
messages.getAllDrafts#6a3f8d65 = Updates;
messages.setGameScore#8ef8ecc0 flags:# edit_message:flags.0?true force:flags.1?true peer:InputPeer id:int user_id:InputUser score:int = Updates;
messages.sendScreenshotNotification#a1405817 peer:InputPeer reply_to:InputReplyTo random_id:long = Updates;
messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
messages.updatePinnedMessage#d2aaf7ec flags:# silent:flags.0?true unpin:flags.1?true pm_oneside:flags.2?true peer:InputPeer id:int = Updates;
messages.sendVote#10ea6184 peer:InputPeer msg_id:int options:Vector<bytes> = Updates;
messages.getPollResults#73bb643b peer:InputPeer msg_id:int = Updates;
messages.editChatDefaultBannedRights#a5866b41 peer:InputPeer banned_rights:ChatBannedRights = Updates;
messages.sendScheduledMessages#bd38850a peer:InputPeer id:Vector<int> = Updates;
messages.deleteScheduledMessages#59ae2b16 peer:InputPeer id:Vector<int> = Updates;
messages.setHistoryTTL#b80e5fe4 peer:InputPeer period:int = Updates;
messages.setChatTheme#81202c9 peer:InputPeer theme:InputChatTheme = Updates;
messages.hideChatJoinRequest#7fe7e815 flags:# approved:flags.0?true peer:InputPeer user_id:InputUser = Updates;
messages.hideAllChatJoinRequests#e085f4ea flags:# approved:flags.0?true peer:InputPeer link:flags.1?string = Updates;
messages.toggleNoForwards#b2081a35 flags:# peer:InputPeer enabled:Bool request_msg_id:flags.0?int = Updates;
messages.sendReaction#d30d78d4 flags:# big:flags.1?true add_to_recent:flags.2?true peer:InputPeer msg_id:int reaction:flags.0?Vector<Reaction> = Updates;
messages.getMessagesReactions#8bba90e6 peer:InputPeer id:Vector<int> = Updates;
messages.setChatAvailableReactions#864b2581 flags:# peer:InputPeer available_reactions:ChatReactions reactions_limit:flags.0?int paid_enabled:flags.1?Bool = Updates;
messages.sendWebViewData#dc0242c8 bot:InputUser random_id:long button_text:string data:string = Updates;
messages.getExtendedMedia#84f80814 peer:InputPeer id:Vector<int> = Updates;
messages.sendBotRequestedPeer#91b2d060 peer:InputPeer msg_id:int button_id:int requested_peers:Vector<InputPeer> = Updates;
messages.setChatWallPaper#8ffacae1 flags:# for_both:flags.3?true revert:flags.4?true peer:InputPeer wallpaper:flags.0?InputWallPaper settings:flags.2?WallPaperSettings id:flags.1?int = Updates;
messages.sendQuickReplyMessages#6c750de1 peer:InputPeer shortcut_id:int id:Vector<int> random_id:Vector<long> = Updates;
messages.deleteQuickReplyMessages#e105e910 shortcut_id:int id:Vector<int> = Updates;
messages.editFactCheck#589ee75 peer:InputPeer msg_id:int text:TextWithEntities = Updates;
messages.deleteFactCheck#d1da940c peer:InputPeer msg_id:int = Updates;
messages.sendPaidReaction#58bbcb50 flags:# peer:InputPeer msg_id:int count:int random_id:long private:flags.0?PaidReactionPrivacy = Updates;
messages.getPaidReactionPrivacy#472455aa = Updates;
messages.toggleTodoCompleted#d3e03124 peer:InputPeer msg_id:int completed:Vector<int> incompleted:Vector<int> = Updates;
messages.appendTodoList#21a61057 peer:InputPeer msg_id:int list:Vector<TodoItem> = Updates;
messages.toggleSuggestedPostApproval#8107455c flags:# reject:flags.1?true peer:InputPeer msg_id:int schedule_date:flags.0?int reject_comment:flags.2?string = Updates;
messages.editForumTopic#cecc1134 flags:# peer:InputPeer topic_id:int title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = Updates;
messages.updatePinnedForumTopic#175df251 peer:InputPeer topic_id:int pinned:Bool = Updates;
messages.reorderPinnedForumTopics#e7841f0 flags:# force:flags.0?true peer:InputPeer order:Vector<int> = Updates;
messages.createForumTopic#2f98c3d5 flags:# title_missing:flags.4?true peer:InputPeer title:string icon_color:flags.0?int icon_emoji_id:flags.3?long random_id:long send_as:flags.2?InputPeer = Updates;
messages.editChatCreator#f743b857 peer:InputPeer user_id:InputUser password:InputCheckPasswordSRP = Updates;
messages.editChatParticipantRank#a00f32b0 peer:InputPeer participant:InputPeer rank:string = Updates;

channels.createChannel#91006707 flags:# broadcast:flags.0?true megagroup:flags.1?true for_import:flags.3?true forum:flags.5?true title:string about:string geo_point:flags.2?InputGeoPoint address:flags.2?string ttl_period:flags.4?int = Updates;
channels.editAdmin#9a98ad68 flags:# channel:InputChannel user_id:InputUser admin_rights:ChatAdminRights rank:flags.0?string = Updates;
channels.editTitle#566decd0 channel:InputChannel title:string = Updates;
channels.editPhoto#f12e57c9 channel:InputChannel photo:InputChatPhoto = Updates;
channels.joinChannel#24b524c5 channel:InputChannel = Updates;
channels.leaveChannel#f836aa95 channel:InputChannel = Updates;
channels.deleteChannel#c0111fe3 channel:InputChannel = Updates;
channels.toggleSignatures#418d549c flags:# signatures_enabled:flags.0?true profiles_enabled:flags.1?true channel:InputChannel = Updates;
channels.editBanned#96e6cd81 channel:InputChannel participant:InputPeer banned_rights:ChatBannedRights = Updates;
channels.deleteHistory#9baa9647 flags:# for_everyone:flags.0?true channel:InputChannel max_id:int = Updates;
channels.togglePreHistoryHidden#eabbb94c channel:InputChannel enabled:Bool = Updates;
channels.toggleSlowMode#edd49ef0 channel:InputChannel seconds:int = Updates;
channels.convertToGigagroup#b290c69 channel:InputChannel = Updates;
channels.toggleJoinToSend#e4cb9580 channel:InputChannel enabled:Bool = Updates;
channels.toggleJoinRequest#4c2985b6 channel:InputChannel enabled:Bool = Updates;
channels.toggleForum#3ff75734 channel:InputChannel enabled:Bool tabs:Bool = Updates;
channels.toggleAntiSpam#68f3e4eb channel:InputChannel enabled:Bool = Updates;
channels.toggleParticipantsHidden#6a6e7854 channel:InputChannel enabled:Bool = Updates;
channels.updateColor#d8aa3671 flags:# for_profile:flags.1?true channel:InputChannel color:flags.2?int background_emoji_id:flags.0?long = Updates;
channels.toggleViewForumAsMessages#9738bb15 channel:InputChannel enabled:Bool = Updates;
channels.updateEmojiStatus#f0d3e6a8 channel:InputChannel emoji_status:EmojiStatus = Updates;
channels.setBoostsToUnblockRestrictions#ad399cee channel:InputChannel boosts:int = Updates;
channels.restrictSponsoredMessages#9ae91519 channel:InputChannel restricted:Bool = Updates;
channels.updatePaidMessagesPrice#4b12327b flags:# broadcast_messages_allowed:flags.0?true channel:InputChannel send_paid_messages_stars:long = Updates;
channels.toggleAutotranslation#167fc0a1 channel:InputChannel enabled:Bool = Updates;

phone.discardCall#b2cbc1c0 flags:# video:flags.0?true peer:InputPhoneCall duration:int reason:PhoneCallDiscardReason connection_id:long = Updates;
phone.setCallRating#59ead627 flags:# user_initiative:flags.0?true peer:InputPhoneCall rating:int comment:string = Updates;
phone.createGroupCall#48cdc6d8 flags:# rtmp_stream:flags.2?true peer:InputPeer random_id:int title:flags.0?string schedule_date:flags.1?int = Updates;
phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;
phone.leaveGroupCall#500377f9 call:InputGroupCall source:int = Updates;
phone.inviteToGroupCall#7b393160 call:InputGroupCall users:Vector<InputUser> = Updates;
phone.discardGroupCall#7a777135 call:InputGroupCall = Updates;
phone.toggleGroupCallSettings#974392f2 flags:# reset_invite_hash:flags.1?true call:InputGroupCall join_muted:flags.0?Bool messages_enabled:flags.2?Bool send_paid_messages_stars:flags.3?long = Updates;
phone.toggleGroupCallRecord#f128c708 flags:# start:flags.0?true video:flags.2?true call:InputGroupCall title:flags.1?string video_portrait:flags.2?Bool = Updates;
phone.editGroupCallParticipant#a5273abf flags:# call:InputGroupCall participant:InputPeer muted:flags.0?Bool volume:flags.1?int raise_hand:flags.2?Bool video_stopped:flags.3?Bool video_paused:flags.4?Bool presentation_paused:flags.5?Bool = Updates;
phone.editGroupCallTitle#1ca6ac0a call:InputGroupCall title:string = Updates;
phone.toggleGroupCallStartSubscription#219c34e6 call:InputGroupCall subscribed:Bool = Updates;
phone.startScheduledGroupCall#5680e342 call:InputGroupCall = Updates;
phone.joinGroupCallPresentation#cbea6bc4 call:InputGroupCall params:DataJSON = Updates;
phone.leaveGroupCallPresentation#1c50d144 call:InputGroupCall = Updates;
phone.createConferenceCall#7d0444bb flags:# muted:flags.0?true video_stopped:flags.2?true join:flags.3?true random_id:int public_key:flags.3?int256 block:flags.3?bytes params:flags.3?DataJSON = Updates;
phone.deleteConferenceCallParticipants#8ca60525 flags:# only_left:flags.0?true kick:flags.1?true call:InputGroupCall ids:Vector<long> block:bytes = Updates;
phone.sendConferenceCallBroadcast#c6701900 call:InputGroupCall block:bytes = Updates;
phone.inviteConferenceCallParticipant#bcf22685 flags:# video:flags.0?true call:InputGroupCall user_id:InputUser = Updates;
phone.declineConferenceCallInvite#3c479971 msg_id:int = Updates;
phone.getGroupCallChainBlocks#ee9f88a6 call:InputGroupCall sub_chain_id:int offset:int limit:int = Updates;
phone.sendGroupCallMessage#b1d11410 flags:# call:InputGroupCall random_id:long message:TextWithEntities allow_paid_stars:flags.0?long send_as:flags.1?InputPeer = Updates;
phone.deleteGroupCallMessages#f64f54f7 flags:# report_spam:flags.0?true call:InputGroupCall messages:Vector<int> = Updates;
phone.deleteGroupCallParticipantMessages#1dbfeca0 flags:# report_spam:flags.0?true call:InputGroupCall participant:InputPeer = Updates;

account.getNotifyExceptions#53577479 flags:# compare_sound:flags.1?true compare_stories:flags.2?true peer:flags.0?InputNotifyPeer = Updates;
account.updateConnectedBot#66a08c7e flags:# deleted:flags.1?true rights:flags.0?BusinessBotRights bot:InputUser recipients:InputBusinessBotRecipients = Updates;
account.getBotBusinessConnection#76a86270 connection_id:string = Updates;

folders.editPeerFolders#6847d0ab folder_peers:Vector<InputFolderPeer> = Updates;

payments.assignAppStoreTransaction#80ed747d receipt:bytes purpose:InputStorePaymentPurpose = Updates;
payments.assignPlayMarketTransaction#dffd50d3 receipt:DataJSON purpose:InputStorePaymentPurpose = Updates;
payments.applyGiftCode#f6e26854 slug:string = Updates;
payments.launchPrepaidGiveaway#5ff58f20 peer:InputPeer giveaway_id:long purpose:InputStorePaymentPurpose = Updates;
payments.refundStarsCharge#25ae8f4a user_id:InputUser charge_id:string = Updates;
payments.upgradeStarGift#aed6e4f5 flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = Updates;
payments.transferStarGift#7f18176a stargift:InputSavedStarGift to_id:InputPeer = Updates;
payments.updateStarGiftPrice#edbe6ccb stargift:InputSavedStarGift resell_amount:StarsAmount = Updates;
payments.resolveStarGiftOffer#e9ce781c flags:# decline:flags.0?true offer_msg_id:int = Updates;
payments.sendStarGiftOffer#8fb86b41 flags:# peer:InputPeer slug:string price:StarsAmount duration:int random_id:long allow_paid_stars:flags.0?long = Updates;
payments.craftStarGift#b0f9684f stargift:Vector<InputSavedStarGift> = Updates;

chatlists.joinChatlistInvite#a6b1e39a slug:string peers:Vector<InputPeer> = Updates;
chatlists.joinChatlistUpdates#e089f8f5 chatlist:InputChatlist peers:Vector<InputPeer> = Updates;
chatlists.leaveChatlist#74fae13a chatlist:InputChatlist peers:Vector<InputPeer> = Updates;

stories.sendStory#737fc2ec flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> = Updates;
stories.editStory#b583ba46 flags:# peer:InputPeer id:int media:flags.0?InputMedia media_areas:flags.3?Vector<MediaArea> caption:flags.1?string entities:flags.1?Vector<MessageEntity> privacy_rules:flags.2?Vector<InputPrivacyRule> = Updates;
stories.activateStealthMode#57bbd166 flags:# past:flags.0?true future:flags.1?true = Updates;
stories.sendReaction#7fd736b2 flags:# add_to_recent:flags.0?true peer:InputPeer story_id:int reaction:Reaction = Updates;
stories.getAllReadPeerStories#9b5ae7f9 = Updates;
stories.startLive#d069ccde flags:# pinned:flags.2?true noforwards:flags.4?true rtmp_stream:flags.5?true peer:InputPeer caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long messages_enabled:flags.6?Bool send_paid_messages_stars:flags.7?long = Updates;

bots.allowSendMessage#f132e3ef bot:InputUser = Updates;

users.suggestBirthday#fc533372 id:InputUser birthday:Birthday = Updates;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [updatesTooLong](/constructor/updatesTooLong/) | The number of queued updates in the common message box is too large to be delivered passively through the socket, invoke [updates.getDifference](/method/updates.getDifference/) to fetch the difference as specified in the [documentation »](/api/updates/). Does not necessarily indicate the [message box size limit was reached](https://core.telegram.org/api/updates/#recovering-gaps-for-very-old-messages), it simply indicates that the number of queued updates in a message box is too large to be delivered passively through the socket. |
| [updateShortMessage](/constructor/updateShortMessage/) | Info about a message sent to (received from) another user |
| [updateShortChatMessage](/constructor/updateShortChatMessage/) | Shortened constructor containing info on one new incoming text message from a chat |
| [updateShort](/constructor/updateShort/) | Shortened constructor containing info on one update not requiring auxiliary data |
| [updatesCombined](/constructor/updatesCombined/) | Constructor for a group of updates. |
| [updates](/constructor/updates/) | Full constructor of updates |
| [updateShortSentMessage](/constructor/updateShortSentMessage/) | Shortened constructor containing info on one outgoing message to a contact (the destination chat has to be extracted from the method call that returned this object). |

## Методы

| Method | Описание |
|---|---|
| [account.getNotifyExceptions](/method/account.getNotifyExceptions/) | Returns list of chats with non-default notification settings |
| [account.updateConnectedBot](/method/account.updateConnectedBot/) | Connect a [business bot »](https://core.telegram.org/api/bots/connected-business-bots) to the current account, or to change the current connection settings. |
| [account.getBotBusinessConnection](/method/account.getBotBusinessConnection/) | Bots may invoke this method to re-fetch the [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) constructor associated with a specific [business connection_id, see here »](https://core.telegram.org/api/bots/connected-business-bots) for more info on connected business bots. This is needed for example for freshly logged in bots that are receiving some [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/), etc. updates because some users have already connected to the bot before it could login. In this case, the bot is receiving messages from the business connection, but it hasn't cached the associated [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) with info about the connection (can it reply to messages? etc.) yet, and cannot receive the old ones because they were sent when the bot wasn't logged into the session yet. This method can be used to fetch info about a not-yet-cached business connection, and should not be invoked if the info is already cached or to fetch changes, as eventual changes will automatically be sent as new [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) updates to the bot using the usual [update delivery methods »](/api/updates/). |
| [users.suggestBirthday](/method/users.suggestBirthday/) | Suggest a birthday to another user, see [here »](https://core.telegram.org/api/profile#birthday) for more info on birthdays in the API. |
| [contacts.deleteContacts](/method/contacts.deleteContacts/) | Deletes several contacts from the list. |
| [contacts.addContact](/method/contacts.addContact/) | Add an existing telegram user as contact. Use [contacts.importContacts](/method/contacts.importContacts/) to add contacts by phone number, without knowing their Telegram ID. |
| [contacts.acceptContact](/method/contacts.acceptContact/) | If the [add contact action bar is active](https://core.telegram.org/api/action-bar#add-contact), add that user as contact |
| [contacts.getLocated](/method/contacts.getLocated/) | Get users and geochats near you, see [here »](https://core.telegram.org/api/nearby) for more info. |
| [contacts.blockFromReplies](/method/contacts.blockFromReplies/) | Stop getting notifications about [discussion replies](https://core.telegram.org/api/discussion) of a certain user in @replies |
| [messages.sendMessage](/method/messages.sendMessage/) | Sends a message to a chat |
| [messages.sendMedia](/method/messages.sendMedia/) | Send a media |
| [messages.forwardMessages](/method/messages.forwardMessages/) | Forwards messages by their IDs. |
| [messages.editChatTitle](/method/messages.editChatTitle/) | Changes chat name and sends a service message on it. |
| [messages.editChatPhoto](/method/messages.editChatPhoto/) | Changes chat photo and sends a service message on it |
| [messages.deleteChatUser](/method/messages.deleteChatUser/) | Deletes a user from a chat and sends a service message on it. |
| [messages.importChatInvite](/method/messages.importChatInvite/) | Import a chat invite and join a private chat/supergroup/channel |
| [messages.startBot](/method/messages.startBot/) | Start a conversation with a bot using a [deep linking parameter](https://core.telegram.org/api/links#bot-links) |
| [messages.migrateChat](/method/messages.migrateChat/) | Turn a [basic group into a supergroup](https://core.telegram.org/api/channel#migration) |
| [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/) | Send a result obtained using [messages.getInlineBotResults](/method/messages.getInlineBotResults/). |
| [messages.editMessage](/method/messages.editMessage/) | Edit message |
| [messages.getAllDrafts](/method/messages.getAllDrafts/) | Return all message [drafts](https://core.telegram.org/api/drafts). Returns all the latest [updateDraftMessage](/constructor/updateDraftMessage/) updates related to all chats with drafts. |
| [messages.setGameScore](/method/messages.setGameScore/) | Use this method to set the score of the specified user in a game sent as a normal message (bots only). |
| [messages.sendScreenshotNotification](/method/messages.sendScreenshotNotification/) | Notify the other user in a private chat that a screenshot of the chat was taken |
| [messages.sendMultiMedia](/method/messages.sendMultiMedia/) | Send an [album or grouped media](https://core.telegram.org/api/files/#albums-grouped-media) |
| [messages.updatePinnedMessage](/method/messages.updatePinnedMessage/) | Pin a message |
| [messages.sendVote](/method/messages.sendVote/) | Vote in a [poll](/constructor/poll/) Starting from layer 159, the vote will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/). Before voting, clients should check that the user is actually allowed to vote: voting is not possible if the poll is closed, if it is [subscriber-only »](https://core.telegram.org/api/poll#subscriber-only-polls) and the user is not an eligible subscriber, or if it is [country-restricted »](https://core.telegram.org/api/poll#country-restricted-polls) and the user's [phone_country_iso2 »](https://core.telegram.org/api/config#phone-country-iso2) is not in the poll's allowed country list. See [vote restrictions »](https://core.telegram.org/api/poll#vote-restrictions) for the full list of conditions. |
| [messages.getPollResults](/method/messages.getPollResults/) | Get poll results |
| [messages.editChatDefaultBannedRights](/method/messages.editChatDefaultBannedRights/) | Edit the default banned rights of a [channel/supergroup/group](https://core.telegram.org/api/channel). |
| [messages.sendScheduledMessages](/method/messages.sendScheduledMessages/) | Send scheduled messages right away |
| [messages.deleteScheduledMessages](/method/messages.deleteScheduledMessages/) | Delete scheduled messages |
| [messages.setHistoryTTL](/method/messages.setHistoryTTL/) | Set maximum Time-To-Live of all messages in the specified chat |
| [messages.setChatTheme](/method/messages.setChatTheme/) | Change the chat theme of a certain chat, see [here »](https://core.telegram.org/api/themes#chat-themes) for more info. |
| [messages.hideChatJoinRequest](/method/messages.hideChatJoinRequest/) | Dismiss or approve a chat [join request](https://core.telegram.org/api/invites#join-requests) related to a specific chat or channel. |
| [messages.hideAllChatJoinRequests](/method/messages.hideAllChatJoinRequests/) | Dismiss or approve all [join requests](https://core.telegram.org/api/invites#join-requests) related to a specific chat or channel. |
| [messages.toggleNoForwards](/method/messages.toggleNoForwards/) | Enable or disable [content protection](https://core.telegram.org/api/content-protection) on a channel, group or private chat. |
| [messages.sendReaction](/method/messages.sendReaction/) | React to message. Starting from layer 159, the reaction will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/). |
| [messages.getMessagesReactions](/method/messages.getMessagesReactions/) | Get [message reactions »](https://core.telegram.org/api/reactions) |
| [messages.setChatAvailableReactions](/method/messages.setChatAvailableReactions/) | Change the set of [message reactions »](https://core.telegram.org/api/reactions) that can be used in a certain group, supergroup or channel |
| [messages.sendWebViewData](/method/messages.sendWebViewData/) | Used by the user to relay data from an opened [reply keyboard bot mini app](https://core.telegram.org/api/bots/webapps) to the bot that owns it. |
| [messages.getExtendedMedia](/method/messages.getExtendedMedia/) | Fetch updated information about [paid media, see here »](https://core.telegram.org/api/paid-media) for the full flow. This method will return an array of [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) updates, only for messages containing already bought paid media. No information will be returned for messages containing not yet bought paid media. |
| [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) | Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button. |
| [messages.setChatWallPaper](/method/messages.setChatWallPaper/) | Set a custom [wallpaper »](https://core.telegram.org/api/wallpapers) in a specific private chat with another user. |
| [messages.sendQuickReplyMessages](/method/messages.sendQuickReplyMessages/) | Send a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| [messages.deleteQuickReplyMessages](/method/messages.deleteQuickReplyMessages/) | Delete one or more messages from a [quick reply shortcut](https://core.telegram.org/api/business#quick-reply-shortcuts). This will also emit an [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) update. |
| [messages.editFactCheck](/method/messages.editFactCheck/) | Edit/create a [fact-check](https://core.telegram.org/api/factcheck) on a message. Can only be used by independent fact-checkers as specified by the [appConfig.can_edit_factcheck](https://core.telegram.org/api/config#can-edit-factcheck) configuration flag. |
| [messages.deleteFactCheck](/method/messages.deleteFactCheck/) | Delete a [fact-check](https://core.telegram.org/api/factcheck) from a message. Can only be used by independent fact-checkers as specified by the [appConfig.can_edit_factcheck](https://core.telegram.org/api/config#can-edit-factcheck) configuration flag. |
| [messages.sendPaidReaction](/method/messages.sendPaidReaction/) | Sends one or more [paid Telegram Star reactions »](https://core.telegram.org/api/reactions#paid-reactions), transferring [Telegram Stars »](https://core.telegram.org/api/stars) to a channel's balance. |
| [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/) | Fetches an [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) update with the current [default paid reaction privacy, see here »](https://core.telegram.org/api/reactions#paid-reactions) for more info. |
| [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/) | Mark one or more items of a [todo list »](https://core.telegram.org/api/todo) as completed or not completed. |
| [messages.appendTodoList](/method/messages.appendTodoList/) | Appends one or more items to a [todo list »](https://core.telegram.org/api/todo). |
| [messages.toggleSuggestedPostApproval](/method/messages.toggleSuggestedPostApproval/) | Approve or reject a [suggested post »](https://core.telegram.org/api/suggested-posts). |
| [messages.editForumTopic](/method/messages.editForumTopic/) | Edit [forum topic](https://core.telegram.org/api/forum). |
| [messages.updatePinnedForumTopic](/method/messages.updatePinnedForumTopic/) | Pin or unpin [forum topics](https://core.telegram.org/api/forum) |
| [messages.reorderPinnedForumTopics](/method/messages.reorderPinnedForumTopics/) | Reorder pinned forum topics |
| [messages.createForumTopic](/method/messages.createForumTopic/) | Create a [forum topic](https://core.telegram.org/api/forum). |
| [messages.editChatCreator](/method/messages.editChatCreator/) | Transfer the ownership of a basic group, supergroup or channel to another user, see [here »](https://core.telegram.org/api/channel#transferring-ownership-of-a-group-channel) for the full flow. |
| [messages.editChatParticipantRank](/method/messages.editChatParticipantRank/) | Edit a group participant's [tag »](https://core.telegram.org/api/rank). |
| [messages.addPollAnswer](https://core.telegram.org/method/messages.addPollAnswer) | Add an answer option to an [open-answer poll »](https://core.telegram.org/api/poll#open-answer-polls) |
| [messages.deletePollAnswer](https://core.telegram.org/method/messages.deletePollAnswer) | Remove an answer option from an [open-answer poll »](https://core.telegram.org/api/poll#open-answer-polls) |
| [messages.deleteParticipantReaction](https://core.telegram.org/method/messages.deleteParticipantReaction) | As an admin, remove all of a specific participant's [reactions](https://core.telegram.org/api/reactions) from a single message. |
| [channels.createChannel](/method/channels.createChannel/) | Create a [supergroup/channel](https://core.telegram.org/api/channel). |
| [channels.editAdmin](/method/channels.editAdmin/) | Modify the admin rights of a user in a [supergroup/channel](https://core.telegram.org/api/channel). |
| [channels.editTitle](/method/channels.editTitle/) | Edit the name of a [channel/supergroup](https://core.telegram.org/api/channel) |
| [channels.editPhoto](/method/channels.editPhoto/) | Change the photo of a [channel/supergroup](https://core.telegram.org/api/channel) |
| [channels.joinChannel](/method/channels.joinChannel/) | Join a channel/supergroup |
| [channels.leaveChannel](/method/channels.leaveChannel/) | Leave a [channel/supergroup](https://core.telegram.org/api/channel) |
| [channels.deleteChannel](/method/channels.deleteChannel/) | Delete a [channel/supergroup](https://core.telegram.org/api/channel) |
| [channels.toggleSignatures](/method/channels.toggleSignatures/) | Enable/disable message signatures in channels |
| [channels.editBanned](/method/channels.editBanned/) | Ban/unban/kick a user in a [supergroup/channel](https://core.telegram.org/api/channel). |
| [channels.deleteHistory](/method/channels.deleteHistory/) | Delete the history of a [supergroup](https://core.telegram.org/api/channel) |
| [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/) | Hide/unhide message history for new channel/supergroup users |
| [channels.toggleSlowMode](/method/channels.toggleSlowMode/) | Toggle supergroup slow mode: if enabled, users will only be able to send one message every seconds seconds |
| [channels.convertToGigagroup](/method/channels.convertToGigagroup/) | Convert a [supergroup](https://core.telegram.org/api/channel) to a [gigagroup](https://core.telegram.org/api/channel), when requested by [channel suggestions](https://core.telegram.org/api/config#channel-suggestions). |
| [channels.toggleJoinToSend](/method/channels.toggleJoinToSend/) | Set whether all users [should join a discussion group in order to comment on a post »](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) |
| [channels.toggleJoinRequest](/method/channels.toggleJoinRequest/) | Set whether all users should [request admin approval to join the group »](https://core.telegram.org/api/invites#join-requests). |
| [channels.toggleForum](/method/channels.toggleForum/) | Enable or disable [forum functionality](https://core.telegram.org/api/forum) in a supergroup. |
| [channels.toggleAntiSpam](/method/channels.toggleAntiSpam/) | Enable or disable the [native antispam system](https://core.telegram.org/api/antispam). |
| [channels.toggleParticipantsHidden](/method/channels.toggleParticipantsHidden/) | Hide or display the participants list in a [supergroup](https://core.telegram.org/api/channel). The supergroup must have at least hidden_members_group_size_min participants in order to use this method, as specified by the [client configuration parameters »](https://core.telegram.org/api/config#client-configuration). |
| [channels.updateColor](/method/channels.updateColor/) | Update the [accent color and background custom emoji »](https://core.telegram.org/api/colors) of a channel. |
| [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) | Users may also choose to display messages from all topics of a [forum](https://core.telegram.org/api/forum) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method. Invoking this method will update the value of the view_forum_as_messages flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/). |
| [channels.updateEmojiStatus](/method/channels.updateEmojiStatus/) | Set an [emoji status](https://core.telegram.org/api/emoji-status) for a channel or supergroup. |
| [channels.setBoostsToUnblockRestrictions](/method/channels.setBoostsToUnblockRestrictions/) | Admins with [ban_users admin rights »](/constructor/chatAdminRights/) may allow users that apply a certain number of [booosts »](https://core.telegram.org/api/boost) to the group to bypass [slow mode »](/method/channels.toggleSlowMode/) and [other »](https://core.telegram.org/api/rights#default-rights) supergroup restrictions, see [here »](https://core.telegram.org/api/boost#bypass-slowmode-and-chat-restrictions) for more info. |
| [channels.restrictSponsoredMessages](/method/channels.restrictSponsoredMessages/) | Disable ads on the specified channel, for all users. Available only after reaching at least the [boost level »](https://core.telegram.org/api/boost) specified in the [channel_restrict_sponsored_level_min »](https://core.telegram.org/api/config#channel-restrict-sponsored-level-min) config parameter. |
| [channels.updatePaidMessagesPrice](/method/channels.updatePaidMessagesPrice/) | Enable or disable [paid messages »](https://core.telegram.org/api/paid-messages) in this [supergroup](https://core.telegram.org/api/channel) or [monoforum](https://core.telegram.org/api/monoforum). Also used to [enable or disable monoforums aka direct messages in a channel](https://core.telegram.org/api/monoforum). Note that passing the ID of the monoforum itself to channel will return a CHANNEL_MONOFORUM_UNSUPPORTED error: pass the ID of the associated channel to edit the settings of the associated monoforum, instead. |
| [channels.toggleAutotranslation](/method/channels.toggleAutotranslation/) | Toggle autotranslation in a channel, for all users: see [here »](https://core.telegram.org/api/translation#autotranslation-for-channels) for more info. |
| [bots.allowSendMessage](/method/bots.allowSendMessage/) | Allow the specified bot to send us messages |
| [payments.assignAppStoreTransaction](/method/payments.assignAppStoreTransaction/) | Informs server about a purchase made through the App Store: for official applications only. |
| [payments.assignPlayMarketTransaction](/method/payments.assignPlayMarketTransaction/) | Informs server about a purchase made through the Play Store: for official applications only. |
| [payments.applyGiftCode](/method/payments.applyGiftCode/) | Apply a [Telegram Premium giftcode »](https://core.telegram.org/api/giveaways) |
| [payments.launchPrepaidGiveaway](/method/payments.launchPrepaidGiveaway/) | Launch a [prepaid giveaway »](https://core.telegram.org/api/giveaways). |
| [payments.refundStarsCharge](/method/payments.refundStarsCharge/) | Refund a [Telegram Stars](https://core.telegram.org/api/stars) transaction, see [here »](https://core.telegram.org/api/payments#6-refunds) for more info. |
| [payments.upgradeStarGift](/method/payments.upgradeStarGift/) | Upgrade a [gift](https://core.telegram.org/api/gifts) to a [collectible gift](https://core.telegram.org/api/gifts#collectible-gifts): can only be used if the upgrade was already paid by the gift sender; see [here »](https://core.telegram.org/api/gifts#upgrade-a-gift-to-a-collectible-gift) for more info on the full flow (including the different flow to use in case the upgrade was not paid by the gift sender). |
| [payments.transferStarGift](/method/payments.transferStarGift/) | Transfer a [collectible gift](https://core.telegram.org/api/gifts#collectible-gifts) to another user or channel: can only be used if transfer is free (i.e. [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/).transfer_stars is not set); see [here »](https://core.telegram.org/api/gifts#transferring-collectible-gifts) for more info on the full flow (including the different flow to use in case the transfer isn't free). |
| [payments.updateStarGiftPrice](/method/payments.updateStarGiftPrice/) | A [collectible gift we own »](https://core.telegram.org/api/gifts#collectible-gifts) can be put up for sale on the [gift marketplace »](https://telegram.org/blog/gift-marketplace-and-more) with this method, see [here »](https://core.telegram.org/api/gifts#reselling-collectible-gifts) for more info. |
| [payments.resolveStarGiftOffer](/method/payments.resolveStarGiftOffer/) | Accept or decline a previously received [collectible gift purchase offer »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers), see [here »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) for the full flow. |
| [payments.sendStarGiftOffer](/method/payments.sendStarGiftOffer/) | Send an offer to purchase a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers), see [here »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) for the full flow. |
| [payments.craftStarGift](/method/payments.craftStarGift/) | Craft a new [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) by combining 1 to 4 owned collectible gifts of the same base gift type. The passed gifts must all have the same [starGiftUnique](/constructor/starGiftUnique/).gift_id, must be usable for crafting, and must not be blocked by a future can_craft_at timestamp. The first passed gift must not be [located on the TON blockchain](https://core.telegram.org/api/gifts#hosted-collectible-gifts). |
| [phone.discardCall](/method/phone.discardCall/) | Refuse or end running call, see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow. |
| [phone.setCallRating](/method/phone.setCallRating/) | Rate a call, returns info about the rating message sent to the official VoIP bot, see [here »](https://core.telegram.org/api/calls#call-rating) for more info on the full flow. |
| [phone.createGroupCall](/method/phone.createGroupCall/) | Create a video chat or livestream, see [here »](https://core.telegram.org/api/group-calls#video-chats-livestreams) for the full flow. |
| [phone.joinGroupCall](/method/phone.joinGroupCall/) | Join any [group call type »](https://core.telegram.org/api/group-calls#group-call-types). Conference calls additionally require the [E2E joining flow »](https://core.telegram.org/api/end-to-end/group-calls#joining-a-call). The params field must contain a join payload generated by the local tgcalls group-call engine. It contains a random non-zero audio ssrc, ICE ufrag and pwd, DTLS fingerprints, and, when publishing video, ssrc-groups. For example, a join payload without published video has the following shape: json<br>{<br> "ssrc": 123456789,<br> "ufrag": "...",<br> "pwd": "...",<br> "fingerprints": [{<br> "hash": "sha-256",<br> "fingerprint": "...",<br> "setup": "passive"<br> }]<br>}<br> When joining an RTMP-mode call, generate the payload without published video source groups. |
| [phone.leaveGroupCall](/method/phone.leaveGroupCall/) | Leave a group call without ending it for other participants. This method can be used with all group call types, see [here »](https://core.telegram.org/api/group-calls#managing-an-active-group-call) for more info. |
| [phone.inviteToGroupCall](/method/phone.inviteToGroupCall/) | Invite a set of users to a [video chat/livestream »](https://core.telegram.org/api/group-calls#video-chats-livestreams); cannot be used for [live stories »](https://core.telegram.org/api/group-calls#live-stories) or [conference calls »](https://core.telegram.org/api/group-calls#conference-calls). |
| [phone.discardGroupCall](/method/phone.discardGroupCall/) | Terminate a group call, ending the room for all participants. This method can be used with all group call types, see [here »](https://core.telegram.org/api/group-calls#managing-an-active-group-call) for more info. |
| [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/) | Change group call settings. Each setting supports different group call types, see [here »](https://core.telegram.org/api/group-calls#managing-an-active-group-call) for more info. |
| [phone.toggleGroupCallRecord](/method/phone.toggleGroupCallRecord/) | Start or stop recording a video chat/livestream, see [here »](https://core.telegram.org/api/group-calls#video-chats-livestreams) for more info. The recorded audio and video streams will be automatically sent to Saved Messages (the chat with ourselves). |
| [phone.editGroupCallParticipant](/method/phone.editGroupCallParticipant/) | Edit information about a participant of a non-RTMP video chat/livestream or conference. The raise_hand field is only supported in video chats/livestreams, see [here »](https://core.telegram.org/api/group-calls#managing-an-active-group-call) for more info. Note: [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).N?[Bool](/type/Bool/) parameters can have three possible values: - If the [TL flag](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) is not set, the previous value will not be changed. - If the [TL flag](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) is set and contains a [boolTrue](/constructor/boolTrue/), the previous value will be overwritten to true. - If the [TL flag](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) is set and contains a [boolFalse](/constructor/boolFalse/), the previous value will be overwritten to false. |
| [phone.editGroupCallTitle](/method/phone.editGroupCallTitle/) | Edit the title of a video chat or livestream. This method cannot be used with live stories or conferences, see [here »](https://core.telegram.org/api/group-calls#video-chats-livestreams) for more info. |
| [phone.toggleGroupCallStartSubscription](/method/phone.toggleGroupCallStartSubscription/) | Subscribe or unsubscribe to a scheduled [group call](https://core.telegram.org/api/group-calls#video-chats-livestreams). |
| [phone.startScheduledGroupCall](/method/phone.startScheduledGroupCall/) | Start a scheduled [group call](https://core.telegram.org/api/group-calls#video-chats-livestreams). |
| [phone.joinGroupCallPresentation](/method/phone.joinGroupCallPresentation/) | Start screen sharing in a non-RTMP video chat/livestream or conference. Presentations are not supported in live stories or RTMP-mode video chats/livestreams, see [here »](https://core.telegram.org/api/group-calls#presentations) for more info. |
| [phone.leaveGroupCallPresentation](/method/phone.leaveGroupCallPresentation/) | Stop screen sharing in a non-RTMP video chat/livestream or conference. Presentations are not supported in live stories or RTMP-mode video chats/livestreams, see [here »](https://core.telegram.org/api/group-calls#presentations) for more info. |
| [phone.createConferenceCall](/method/phone.createConferenceCall/) | Create and optionally join a new [conference call »](https://core.telegram.org/api/group-calls#conference-calls). |
| [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/) | Remove participants from a [conference call »](https://core.telegram.org/api/end-to-end/group-calls#removing-a-participant). Exactly one of the only_left and kick flags must be set. |
| [phone.sendConferenceCallBroadcast](/method/phone.sendConferenceCallBroadcast/) | Submit a verification message to conference call subchain 1, see [subchains »](https://core.telegram.org/api/end-to-end/group-calls#subchains). |
| [phone.inviteConferenceCallParticipant](/method/phone.inviteConferenceCallParticipant/) | Invite a user to a [conference call](https://core.telegram.org/api/group-calls#conference-calls). |
| [phone.declineConferenceCallInvite](/method/phone.declineConferenceCallInvite/) | Decline a [conference call](https://core.telegram.org/api/group-calls#conference-calls) invite. |
| [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) | Fetch blocks from a conference call [subchain »](https://core.telegram.org/api/end-to-end/group-calls#subchains); handle the returned [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) as [specified here »](https://core.telegram.org/api/end-to-end/group-calls#handling-updates). If the number of blocks returned by any call to this method is equal to limit, this method must be re-invoked immediately after processing the returned [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/), with the newly committed offset (usually equal to the returned next_offset). |
| [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/) | Send an in-call message to all participants of a video chat/livestream or live story, including in RTMP mode, see [here »](https://core.telegram.org/api/group-calls#in-call-messages) for more info. The send_as field can only be populated for live stories, where it optionally selects the displayed author. If omitted, the server automatically selects the appropriate author. Do not populate it for video chats/livestreams. Video chats/livestreams and live stories support [animated emoji reactions »](https://core.telegram.org/api/group-calls#in-call-reactions), encoded as messages containing only a standard available reaction emoji or a single custom emoji entity. For a paid live story comment, pass the user-confirmed donation amount in allow_paid_stars. For commenters other than the live story owner, this amount must be at least the current [groupCall](/constructor/groupCall/).send_paid_messages_stars minimum. A higher amount may be donated to highlight the comment. The live story owner may comment without populating allow_paid_stars. To send a standalone paid live story donation, pass a positive allow_paid_stars value and an empty message, see [here »](https://core.telegram.org/api/group-calls#paid-live-story-donations) for the full flow. |
| [phone.deleteGroupCallMessages](/method/phone.deleteGroupCallMessages/) | Delete specific messages from the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages) of a video chat/livestream or live story, including in RTMP mode. Non-admin participants may delete messages they sent; admins may delete any message. |
| [phone.deleteGroupCallParticipantMessages](/method/phone.deleteGroupCallParticipantMessages/) | As an admin, delete all messages from a specific participant in the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages) of a video chat/livestream or live story, including in RTMP mode. |
| [folders.editPeerFolders](/method/folders.editPeerFolders/) | Edit peers in [peer folder](https://core.telegram.org/api/folders#peer-folders) |
| [chatlists.joinChatlistInvite](/method/chatlists.joinChatlistInvite/) | Import a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links), joining some or all the chats in the folder. |
| [chatlists.joinChatlistUpdates](/method/chatlists.joinChatlistUpdates/) | Join channels and supergroups recently added to a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| [chatlists.leaveChatlist](/method/chatlists.leaveChatlist/) | Delete a folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) |
| [stories.sendStory](/method/stories.sendStory/) | Uploads a [Telegram Story](https://core.telegram.org/api/stories). May also be used in a [business connection](https://core.telegram.org/api/bots/connected-business-bots), not by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the ID of a controlled business user in peer. |
| [stories.editStory](/method/stories.editStory/) | Edit an uploaded [story](https://core.telegram.org/api/stories) May also be used in a [business connection](https://core.telegram.org/api/bots/connected-business-bots), not by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the ID of a controlled business user in peer: in this context, the method can only be used to edit stories posted by the same business bot on behalf of the user with [stories.sendStory](/method/stories.sendStory/). |
| [stories.activateStealthMode](/method/stories.activateStealthMode/) | Activates [stories stealth mode](https://core.telegram.org/api/stories#stealth-mode), see [here »](https://core.telegram.org/api/stories#stealth-mode) for more info. Will return an [updateStoriesStealthMode](/constructor/updateStoriesStealthMode/). |
| [stories.sendReaction](/method/stories.sendReaction/) | React to a story. |
| [stories.getAllReadPeerStories](/method/stories.getAllReadPeerStories/) | Obtain the latest read story ID for all peers when first logging in, returned as a list of [updateReadStories](/constructor/updateReadStories/) updates, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info. |
| [stories.startLive](/method/stories.startLive/) | Start a live story, optionally using RTMP livestream mode, see [here »](https://core.telegram.org/api/group-calls#live-stories) for the full flow. |
