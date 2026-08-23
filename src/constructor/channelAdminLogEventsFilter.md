---
title: "channelAdminLogEventsFilter (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventsFilter"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventsFilter

*Конструктор из схемы TL.*

> Filter only certain admin log events

## Определение TL

```
channelAdminLogEventsFilter#ea107ae4 flags:# join:flags.0?true leave:flags.1?true invite:flags.2?true ban:flags.3?true unban:flags.4?true kick:flags.5?true unkick:flags.6?true promote:flags.7?true demote:flags.8?true info:flags.9?true settings:flags.10?true pinned:flags.11?true edit:flags.12?true delete:flags.13?true group_call:flags.14?true invites:flags.15?true send:flags.16?true forums:flags.17?true sub_extend:flags.18?true edit_rank:flags.19?true = ChannelAdminLogEventsFilter;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| join | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | [Join events](/constructor/channelAdminLogEventActionParticipantJoin/), including [joins using invite links](/constructor/channelAdminLogEventActionParticipantJoinByInvite/) and [join requests](/constructor/channelAdminLogEventActionParticipantJoinByRequest/). |
| leave | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | [Leave events](/constructor/channelAdminLogEventActionParticipantLeave/) |
| invite | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | [Invite events](/constructor/channelAdminLogEventActionParticipantInvite/) |
| ban | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | [Ban events](/constructor/channelAdminLogEventActionParticipantToggleBan/) |
| unban | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | [Unban events](/constructor/channelAdminLogEventActionParticipantToggleBan/) |
| kick | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | [Kick events](/constructor/channelAdminLogEventActionParticipantToggleBan/) |
| unkick | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | [Unkick events](/constructor/channelAdminLogEventActionParticipantToggleBan/) |
| promote | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | [Admin promotion events](/constructor/channelAdminLogEventActionParticipantToggleAdmin/) |
| demote | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | [Admin demotion events](/constructor/channelAdminLogEventActionParticipantToggleAdmin/) |
| info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Info change events (when [about](/constructor/channelAdminLogEventActionChangeAbout/), [linked chat](/constructor/channelAdminLogEventActionChangeLinkedChat/), [location](/constructor/channelAdminLogEventActionChangeLocation/), [photo](/constructor/channelAdminLogEventActionChangePhoto/), [stickerset](/constructor/channelAdminLogEventActionChangeStickerSet/), [title](/constructor/channelAdminLogEventActionChangeTitle/) or [username](/constructor/channelAdminLogEventActionChangeUsername/), [slowmode](/constructor/channelAdminLogEventActionToggleSlowMode/), [history TTL](/constructor/channelAdminLogEventActionChangeHistoryTTL/) settings of a channel gets modified) |
| settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | Settings change events ([invites](/constructor/channelAdminLogEventActionToggleInvites/), [hidden prehistory](/constructor/channelAdminLogEventActionTogglePreHistoryHidden/), [signatures](/constructor/channelAdminLogEventActionToggleSignatures/), [default banned rights](/constructor/channelAdminLogEventActionDefaultBannedRights/), [forum toggle events](/constructor/channelAdminLogEventActionToggleForum/)) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | [Message pin events](/constructor/channelAdminLogEventActionUpdatePinned/) |
| edit | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | [Message edit events](/constructor/channelAdminLogEventActionEditMessage/) |
| delete | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | [Message deletion events](/constructor/channelAdminLogEventActionDeleteMessage/) |
| group_call | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | Group call events |
| invites | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](/constructor/true/) | Invite events |
| send | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | A message was posted in a channel |
| forums | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[true](/constructor/true/) | [Forum](https://core.telegram.org/api/forum)-related events |
| sub_extend | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[true](/constructor/true/) | [Telegram Star subscription extension events »](/constructor/channelAdminLogEventActionParticipantSubExtend/) |
| edit_rank | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | Events where a participant's custom [tag (rank) »](https://core.telegram.org/api/rank) was changed ([channelAdminLogEventActionParticipantEditRank](/constructor/channelAdminLogEventActionParticipantEditRank/)). |

## Тип

[ChannelAdminLogEventsFilter](/type/ChannelAdminLogEventsFilter/)

## Related pages

#### [channelAdminLogEventActionParticipantJoin](/constructor/channelAdminLogEventActionParticipantJoin/)

A user has joined the group (in the case of big groups, info of the user that has joined isn't shown)

#### [channelAdminLogEventActionParticipantJoinByInvite](/constructor/channelAdminLogEventActionParticipantJoinByInvite/)

A user joined the [supergroup/channel](https://core.telegram.org/api/channel) using a specific invite link

#### [channelAdminLogEventActionParticipantJoinByRequest](/constructor/channelAdminLogEventActionParticipantJoinByRequest/)

A new member was accepted to the chat by an admin

#### [channelAdminLogEventActionParticipantLeave](/constructor/channelAdminLogEventActionParticipantLeave/)

A user left the channel/supergroup (in the case of big groups, info of the user that has joined isn't shown)

#### [channelAdminLogEventActionParticipantInvite](/constructor/channelAdminLogEventActionParticipantInvite/)

A user was invited to the group

#### [channelAdminLogEventActionParticipantToggleBan](/constructor/channelAdminLogEventActionParticipantToggleBan/)

The banned [rights](https://core.telegram.org/api/rights) of a user were changed

#### [channelAdminLogEventActionParticipantToggleAdmin](/constructor/channelAdminLogEventActionParticipantToggleAdmin/)

The admin [rights](https://core.telegram.org/api/rights) of a user were changed

#### [channelAdminLogEventActionChangeAbout](/constructor/channelAdminLogEventActionChangeAbout/)

The description was changed

#### [channelAdminLogEventActionChangeLinkedChat](/constructor/channelAdminLogEventActionChangeLinkedChat/)

The linked chat was changed

#### [channelAdminLogEventActionChangeLocation](/constructor/channelAdminLogEventActionChangeLocation/)

The geogroup location was changed

#### [channelAdminLogEventActionChangePhoto](/constructor/channelAdminLogEventActionChangePhoto/)

The channel/supergroup's picture was changed

#### [channelAdminLogEventActionChangeStickerSet](/constructor/channelAdminLogEventActionChangeStickerSet/)

The supergroup's stickerset was changed

#### [channelAdminLogEventActionChangeTitle](/constructor/channelAdminLogEventActionChangeTitle/)

Channel/supergroup title was changed

#### [channelAdminLogEventActionChangeUsername](/constructor/channelAdminLogEventActionChangeUsername/)

Channel/supergroup username was changed

#### [channelAdminLogEventActionToggleSlowMode](/constructor/channelAdminLogEventActionToggleSlowMode/)

[Slow mode setting for supergroups was changed](/method/channels.toggleSlowMode/)

#### [channelAdminLogEventActionChangeHistoryTTL](/constructor/channelAdminLogEventActionChangeHistoryTTL/)

The Time-To-Live of messages in this chat was changed

#### [channelAdminLogEventActionToggleInvites](/constructor/channelAdminLogEventActionToggleInvites/)

Invites were enabled/disabled

#### [channelAdminLogEventActionTogglePreHistoryHidden](/constructor/channelAdminLogEventActionTogglePreHistoryHidden/)

The hidden prehistory setting was [changed](/method/channels.togglePreHistoryHidden/)

#### [channelAdminLogEventActionToggleSignatures](/constructor/channelAdminLogEventActionToggleSignatures/)

Channel signatures were enabled/disabled

#### [channelAdminLogEventActionDefaultBannedRights](/constructor/channelAdminLogEventActionDefaultBannedRights/)

The default banned rights were modified

#### [channelAdminLogEventActionToggleForum](/constructor/channelAdminLogEventActionToggleForum/)

[Forum](https://core.telegram.org/api/forum) functionality was enabled or disabled.

#### [channelAdminLogEventActionUpdatePinned](/constructor/channelAdminLogEventActionUpdatePinned/)

A message was pinned

#### [channelAdminLogEventActionEditMessage](/constructor/channelAdminLogEventActionEditMessage/)

A message was edited

#### [channelAdminLogEventActionDeleteMessage](/constructor/channelAdminLogEventActionDeleteMessage/)

A message was deleted

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [channelAdminLogEventActionParticipantSubExtend](/constructor/channelAdminLogEventActionParticipantSubExtend/)

A paid subscriber has extended their [Telegram Star subscription »](https://core.telegram.org/api/stars#star-subscriptions).

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.

#### [channelAdminLogEventActionParticipantEditRank](/constructor/channelAdminLogEventActionParticipantEditRank/)

A participant's [tag »](https://core.telegram.org/api/rank) was changed.
