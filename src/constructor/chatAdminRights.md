---
title: "chatAdminRights (конструктор)"
original: "https://core.telegram.org/constructor/chatAdminRights"
section: ref
kind: constructor
layout: layout.njk
---

# chatAdminRights

*Конструктор из схемы TL.*

> Represents the rights of an admin in a [channel/supergroup](https://core.telegram.org/api/channel).

## Определение TL

```
chatAdminRights#5fb224d5 flags:# change_info:flags.0?true post_messages:flags.1?true edit_messages:flags.2?true delete_messages:flags.3?true ban_users:flags.4?true invite_users:flags.5?true pin_messages:flags.7?true add_admins:flags.9?true anonymous:flags.10?true manage_call:flags.11?true other:flags.12?true manage_topics:flags.13?true post_stories:flags.14?true edit_stories:flags.15?true delete_stories:flags.16?true manage_direct_messages:flags.17?true manage_ranks:flags.18?true = ChatAdminRights;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| change_info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, allows the admin to modify the description of the [channel/supergroup](https://core.telegram.org/api/channel) |
| post_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, allows the admin to post messages in the [channel](https://core.telegram.org/api/channel) |
| edit_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, allows the admin to also edit messages from other admins in the [channel](https://core.telegram.org/api/channel) |
| delete_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, allows the admin to also delete messages from other admins in the [channel](https://core.telegram.org/api/channel) |
| ban_users | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | If set, allows the admin to ban users from the [channel/supergroup](https://core.telegram.org/api/channel) |
| invite_users | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | If set, allows the admin to invite users in the [channel/supergroup](https://core.telegram.org/api/channel) |
| pin_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | If set, allows the admin to pin messages in the [channel/supergroup](https://core.telegram.org/api/channel) |
| add_admins | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | If set, allows the admin to add other admins with the same (or more limited) permissions in the [channel/supergroup](https://core.telegram.org/api/channel) |
| anonymous | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | Whether this admin is anonymous |
| manage_call | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | If set, allows the admin to create and administer [video chats/livestreams »](https://core.telegram.org/api/group-calls#video-chats-livestreams) |
| other | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | Set this flag if none of the other flags are set, but you still want the user to be an admin: if this or any of the other flags are set, the admin can get the chat [admin log](https://core.telegram.org/api/recent-actions), get [chat statistics](https://core.telegram.org/api/stats), get [message statistics in channels](https://core.telegram.org/api/stats), get channel members, see anonymous administrators in supergroups and ignore slow mode. |
| manage_topics | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | If set, allows the admin to create, delete or modify [forum topics »](https://core.telegram.org/api/forum#forum-topics). |
| post_stories | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | If set, allows the admin to post [stories](https://core.telegram.org/api/stories) as the [channel](https://core.telegram.org/api/channel). |
| edit_stories | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](/constructor/true/) | If set, allows the admin to edit [stories](https://core.telegram.org/api/stories) posted by the other admins of the [channel](https://core.telegram.org/api/channel). |
| delete_stories | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | If set, allows the admin to delete [stories](https://core.telegram.org/api/stories) posted by the other admins of the [channel](https://core.telegram.org/api/channel). |
| manage_direct_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[true](/constructor/true/) | If set, allows the admin to manage the [direct messages monoforum »](https://core.telegram.org/api/monoforum) and [decline suggested posts »](https://core.telegram.org/api/suggested-posts). |
| manage_ranks | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[true](/constructor/true/) | If set, allows the admin to modify the [member tag »](https://core.telegram.org/api/rank) of any user. |

## Тип

[ChatAdminRights](/type/ChatAdminRights/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.

#### [Admin log](https://core.telegram.org/api/recent-actions)

Both supergroups and channels offer a so-called admin log, a log of recent relevant supergroup and channel actions, like the modification of group/channel settings or information on behalf of an admin, user kicks and bans, and more.

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Suggested posts](https://core.telegram.org/api/suggested-posts)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
