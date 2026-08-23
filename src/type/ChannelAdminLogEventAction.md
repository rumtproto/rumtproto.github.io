---
title: "ChannelAdminLogEventAction (тип)"
original: "https://core.telegram.org/type/ChannelAdminLogEventAction"
section: ref
kind: type
layout: layout.njk
---

# ChannelAdminLogEventAction

*Тип из схемы TL.*

> Channel admin log event

## Определение TL

```
channelAdminLogEventActionChangeTitle#e6dfb825 prev_value:string new_value:string = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeAbout#55188a2e prev_value:string new_value:string = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeUsername#6a4afc38 prev_value:string new_value:string = ChannelAdminLogEventAction;
channelAdminLogEventActionChangePhoto#434bd2af prev_photo:Photo new_photo:Photo = ChannelAdminLogEventAction;
channelAdminLogEventActionToggleInvites#1b7907ae new_value:Bool = ChannelAdminLogEventAction;
channelAdminLogEventActionToggleSignatures#26ae0971 new_value:Bool = ChannelAdminLogEventAction;
channelAdminLogEventActionUpdatePinned#e9e82c18 message:Message = ChannelAdminLogEventAction;
channelAdminLogEventActionEditMessage#709b2405 prev_message:Message new_message:Message = ChannelAdminLogEventAction;
channelAdminLogEventActionDeleteMessage#42e047bb message:Message = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantJoin#183040d3 = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantLeave#f89777f2 = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantInvite#e31c34d8 participant:ChannelParticipant = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantToggleBan#e6d83d7e prev_participant:ChannelParticipant new_participant:ChannelParticipant = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantToggleAdmin#d5676710 prev_participant:ChannelParticipant new_participant:ChannelParticipant = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeStickerSet#b1c3caa7 prev_stickerset:InputStickerSet new_stickerset:InputStickerSet = ChannelAdminLogEventAction;
channelAdminLogEventActionTogglePreHistoryHidden#5f5c95f1 new_value:Bool = ChannelAdminLogEventAction;
channelAdminLogEventActionDefaultBannedRights#2df5fc0a prev_banned_rights:ChatBannedRights new_banned_rights:ChatBannedRights = ChannelAdminLogEventAction;
channelAdminLogEventActionStopPoll#8f079643 message:Message = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeLinkedChat#50c7ac8 prev_value:long new_value:long = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeLocation#e6b76ae prev_value:ChannelLocation new_value:ChannelLocation = ChannelAdminLogEventAction;
channelAdminLogEventActionToggleSlowMode#53909779 prev_value:int new_value:int = ChannelAdminLogEventAction;
channelAdminLogEventActionStartGroupCall#23209745 call:InputGroupCall = ChannelAdminLogEventAction;
channelAdminLogEventActionDiscardGroupCall#db9f9140 call:InputGroupCall = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantMute#f92424d2 participant:GroupCallParticipant = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantUnmute#e64429c0 participant:GroupCallParticipant = ChannelAdminLogEventAction;
channelAdminLogEventActionToggleGroupCallSetting#56d6a247 join_muted:Bool = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantJoinByInvite#fe9fc158 flags:# via_chatlist:flags.0?true invite:ExportedChatInvite = ChannelAdminLogEventAction;
channelAdminLogEventActionExportedInviteDelete#5a50fca4 invite:ExportedChatInvite = ChannelAdminLogEventAction;
channelAdminLogEventActionExportedInviteRevoke#410a134e invite:ExportedChatInvite = ChannelAdminLogEventAction;
channelAdminLogEventActionExportedInviteEdit#e90ebb59 prev_invite:ExportedChatInvite new_invite:ExportedChatInvite = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantVolume#3e7f6847 participant:GroupCallParticipant = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeHistoryTTL#6e941a38 prev_value:int new_value:int = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantJoinByRequest#afb6144a invite:ExportedChatInvite approved_by:long = ChannelAdminLogEventAction;
channelAdminLogEventActionToggleNoForwards#cb2ac766 new_value:Bool = ChannelAdminLogEventAction;
channelAdminLogEventActionSendMessage#278f2868 message:Message = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeAvailableReactions#be4e0ef8 prev_value:ChatReactions new_value:ChatReactions = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeUsernames#f04fb3a9 prev_value:Vector<string> new_value:Vector<string> = ChannelAdminLogEventAction;
channelAdminLogEventActionToggleForum#2cc6383 new_value:Bool = ChannelAdminLogEventAction;
channelAdminLogEventActionCreateTopic#58707d28 topic:ForumTopic = ChannelAdminLogEventAction;
channelAdminLogEventActionEditTopic#f06fe208 prev_topic:ForumTopic new_topic:ForumTopic = ChannelAdminLogEventAction;
channelAdminLogEventActionDeleteTopic#ae168909 topic:ForumTopic = ChannelAdminLogEventAction;
channelAdminLogEventActionPinTopic#5d8d353b flags:# prev_topic:flags.0?ForumTopic new_topic:flags.1?ForumTopic = ChannelAdminLogEventAction;
channelAdminLogEventActionToggleAntiSpam#64f36dfc new_value:Bool = ChannelAdminLogEventAction;
channelAdminLogEventActionChangePeerColor#5796e780 prev_value:PeerColor new_value:PeerColor = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeProfilePeerColor#5e477b25 prev_value:PeerColor new_value:PeerColor = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeWallpaper#31bb5d52 prev_value:WallPaper new_value:WallPaper = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeEmojiStatus#3ea9feb1 prev_value:EmojiStatus new_value:EmojiStatus = ChannelAdminLogEventAction;
channelAdminLogEventActionChangeEmojiStickerSet#46d840ab prev_stickerset:InputStickerSet new_stickerset:InputStickerSet = ChannelAdminLogEventAction;
channelAdminLogEventActionToggleSignatureProfiles#60a79c79 new_value:Bool = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantSubExtend#64642db3 prev_participant:ChannelParticipant new_participant:ChannelParticipant = ChannelAdminLogEventAction;
channelAdminLogEventActionToggleAutotranslation#c517f77e new_value:Bool = ChannelAdminLogEventAction;
channelAdminLogEventActionParticipantEditRank#5806b4ec user_id:long prev_rank:string new_rank:string = ChannelAdminLogEventAction;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channelAdminLogEventActionChangeTitle](/constructor/channelAdminLogEventActionChangeTitle/) | Channel/supergroup title was changed |
| [channelAdminLogEventActionChangeAbout](/constructor/channelAdminLogEventActionChangeAbout/) | The description was changed |
| [channelAdminLogEventActionChangeUsername](/constructor/channelAdminLogEventActionChangeUsername/) | Channel/supergroup username was changed |
| [channelAdminLogEventActionChangePhoto](/constructor/channelAdminLogEventActionChangePhoto/) | The channel/supergroup's picture was changed |
| [channelAdminLogEventActionToggleInvites](/constructor/channelAdminLogEventActionToggleInvites/) | Invites were enabled/disabled |
| [channelAdminLogEventActionToggleSignatures](/constructor/channelAdminLogEventActionToggleSignatures/) | Channel signatures were enabled/disabled |
| [channelAdminLogEventActionUpdatePinned](/constructor/channelAdminLogEventActionUpdatePinned/) | A message was pinned |
| [channelAdminLogEventActionEditMessage](/constructor/channelAdminLogEventActionEditMessage/) | A message was edited |
| [channelAdminLogEventActionDeleteMessage](/constructor/channelAdminLogEventActionDeleteMessage/) | A message was deleted |
| [channelAdminLogEventActionParticipantJoin](/constructor/channelAdminLogEventActionParticipantJoin/) | A user has joined the group (in the case of big groups, info of the user that has joined isn't shown) |
| [channelAdminLogEventActionParticipantLeave](/constructor/channelAdminLogEventActionParticipantLeave/) | A user left the channel/supergroup (in the case of big groups, info of the user that has joined isn't shown) |
| [channelAdminLogEventActionParticipantInvite](/constructor/channelAdminLogEventActionParticipantInvite/) | A user was invited to the group |
| [channelAdminLogEventActionParticipantToggleBan](/constructor/channelAdminLogEventActionParticipantToggleBan/) | The banned [rights](https://core.telegram.org/api/rights) of a user were changed |
| [channelAdminLogEventActionParticipantToggleAdmin](/constructor/channelAdminLogEventActionParticipantToggleAdmin/) | The admin [rights](https://core.telegram.org/api/rights) of a user were changed |
| [channelAdminLogEventActionChangeStickerSet](/constructor/channelAdminLogEventActionChangeStickerSet/) | The supergroup's stickerset was changed |
| [channelAdminLogEventActionTogglePreHistoryHidden](/constructor/channelAdminLogEventActionTogglePreHistoryHidden/) | The hidden prehistory setting was [changed](/method/channels.togglePreHistoryHidden/) |
| [channelAdminLogEventActionDefaultBannedRights](/constructor/channelAdminLogEventActionDefaultBannedRights/) | The default banned rights were modified |
| [channelAdminLogEventActionStopPoll](/constructor/channelAdminLogEventActionStopPoll/) | A poll was stopped |
| [channelAdminLogEventActionChangeLinkedChat](/constructor/channelAdminLogEventActionChangeLinkedChat/) | The linked chat was changed |
| [channelAdminLogEventActionChangeLocation](/constructor/channelAdminLogEventActionChangeLocation/) | The geogroup location was changed |
| [channelAdminLogEventActionToggleSlowMode](/constructor/channelAdminLogEventActionToggleSlowMode/) | [Slow mode setting for supergroups was changed](/method/channels.toggleSlowMode/) |
| [channelAdminLogEventActionStartGroupCall](/constructor/channelAdminLogEventActionStartGroupCall/) | A group call was started |
| [channelAdminLogEventActionDiscardGroupCall](/constructor/channelAdminLogEventActionDiscardGroupCall/) | A group call was terminated |
| [channelAdminLogEventActionParticipantMute](/constructor/channelAdminLogEventActionParticipantMute/) | A group call participant was muted |
| [channelAdminLogEventActionParticipantUnmute](/constructor/channelAdminLogEventActionParticipantUnmute/) | A group call participant was unmuted |
| [channelAdminLogEventActionToggleGroupCallSetting](/constructor/channelAdminLogEventActionToggleGroupCallSetting/) | Group call settings were changed |
| [channelAdminLogEventActionParticipantJoinByInvite](/constructor/channelAdminLogEventActionParticipantJoinByInvite/) | A user joined the [supergroup/channel](https://core.telegram.org/api/channel) using a specific invite link |
| [channelAdminLogEventActionExportedInviteDelete](/constructor/channelAdminLogEventActionExportedInviteDelete/) | A chat invite was deleted |
| [channelAdminLogEventActionExportedInviteRevoke](/constructor/channelAdminLogEventActionExportedInviteRevoke/) | A specific invite link was revoked |
| [channelAdminLogEventActionExportedInviteEdit](/constructor/channelAdminLogEventActionExportedInviteEdit/) | A chat invite was edited |
| [channelAdminLogEventActionParticipantVolume](/constructor/channelAdminLogEventActionParticipantVolume/) | channelAdminLogEvent.user_id has set the volume of participant.peer to participant.volume |
| [channelAdminLogEventActionChangeHistoryTTL](/constructor/channelAdminLogEventActionChangeHistoryTTL/) | The Time-To-Live of messages in this chat was changed |
| [channelAdminLogEventActionParticipantJoinByRequest](/constructor/channelAdminLogEventActionParticipantJoinByRequest/) | A new member was accepted to the chat by an admin |
| [channelAdminLogEventActionToggleNoForwards](/constructor/channelAdminLogEventActionToggleNoForwards/) | Forwards were enabled or disabled |
| [channelAdminLogEventActionSendMessage](/constructor/channelAdminLogEventActionSendMessage/) | A message was posted in a channel |
| [channelAdminLogEventActionChangeAvailableReactions](/constructor/channelAdminLogEventActionChangeAvailableReactions/) | The set of allowed [message reactions »](https://core.telegram.org/api/reactions) for this channel has changed |
| [channelAdminLogEventActionChangeUsernames](/constructor/channelAdminLogEventActionChangeUsernames/) | The list of usernames associated with the channel was changed |
| [channelAdminLogEventActionToggleForum](/constructor/channelAdminLogEventActionToggleForum/) | [Forum](https://core.telegram.org/api/forum) functionality was enabled or disabled. |
| [channelAdminLogEventActionCreateTopic](/constructor/channelAdminLogEventActionCreateTopic/) | A [forum topic](https://core.telegram.org/api/forum#forum-topics) was created |
| [channelAdminLogEventActionEditTopic](/constructor/channelAdminLogEventActionEditTopic/) | A [forum topic](https://core.telegram.org/api/forum#forum-topics) was edited |
| [channelAdminLogEventActionDeleteTopic](/constructor/channelAdminLogEventActionDeleteTopic/) | A [forum topic](https://core.telegram.org/api/forum#forum-topics) was deleted |
| [channelAdminLogEventActionPinTopic](/constructor/channelAdminLogEventActionPinTopic/) | A [forum topic](https://core.telegram.org/api/forum#forum-topics) was pinned or unpinned |
| [channelAdminLogEventActionToggleAntiSpam](/constructor/channelAdminLogEventActionToggleAntiSpam/) | [Native antispam](https://core.telegram.org/api/antispam) functionality was enabled or disabled. |
| [channelAdminLogEventActionChangePeerColor](/constructor/channelAdminLogEventActionChangePeerColor/) | The [message accent color](https://core.telegram.org/api/colors) was changed |
| [channelAdminLogEventActionChangeProfilePeerColor](/constructor/channelAdminLogEventActionChangeProfilePeerColor/) | The [profile accent color](https://core.telegram.org/api/colors) was changed |
| [channelAdminLogEventActionChangeWallpaper](/constructor/channelAdminLogEventActionChangeWallpaper/) | The [wallpaper](https://core.telegram.org/api/wallpapers) was changed |
| [channelAdminLogEventActionChangeEmojiStatus](/constructor/channelAdminLogEventActionChangeEmojiStatus/) | The [emoji status](https://core.telegram.org/api/emoji-status) was changed |
| [channelAdminLogEventActionChangeEmojiStickerSet](/constructor/channelAdminLogEventActionChangeEmojiStickerSet/) | The supergroup's [custom emoji stickerset](https://core.telegram.org/api/boost#setting-a-custom-emoji-stickerset-for-supergroups) was changed. |
| [channelAdminLogEventActionToggleSignatureProfiles](/constructor/channelAdminLogEventActionToggleSignatureProfiles/) | Channel signature profiles were enabled/disabled. |
| [channelAdminLogEventActionParticipantSubExtend](/constructor/channelAdminLogEventActionParticipantSubExtend/) | A paid subscriber has extended their [Telegram Star subscription »](https://core.telegram.org/api/stars#star-subscriptions). |
| [channelAdminLogEventActionToggleAutotranslation](/constructor/channelAdminLogEventActionToggleAutotranslation/) | [Channel autotranslation was toggled »](https://core.telegram.org/api/translation#autotranslation-for-channels). |
| [channelAdminLogEventActionParticipantEditRank](/constructor/channelAdminLogEventActionParticipantEditRank/) | A participant's [tag »](https://core.telegram.org/api/rank) was changed. |
