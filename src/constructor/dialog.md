---
title: "dialog (конструктор)"
original: "https://core.telegram.org/constructor/dialog"
section: ref
kind: constructor
layout: layout.njk
---

# dialog

*Конструктор из схемы TL.*

> Chat

## Определение TL

```
dialog#d58a08c6 flags:# pinned:flags.2?true unread_mark:flags.3?true view_forum_as_messages:flags.6?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int notify_settings:PeerNotifySettings pts:flags.0?int draft:flags.1?DraftMessage folder_id:flags.4?int ttl_period:flags.5?int = Dialog;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Is the dialog pinned |
| unread_mark | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether the chat was manually marked as unread |
| view_forum_as_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Users may also choose to display messages from all topics of a [forum](https://core.telegram.org/api/forum) as if they were sent to a normal group, using a "View as messages" setting in the local client. This setting only affects the current account, and is synced to other logged in sessions using the [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) method; invoking this method will update the value of this flag. |
| peer | [Peer](/type/Peer/) | The chat |
| top_message | [int](/type/int/) | The latest message ID |
| read_inbox_max_id | [int](/type/int/) | Position up to which all incoming messages are read. |
| read_outbox_max_id | [int](/type/int/) | Position up to which all outgoing messages are read. |
| unread_count | [int](/type/int/) | Number of unread messages |
| unread_mentions_count | [int](/type/int/) | Number of [unread mentions](https://core.telegram.org/api/mentions) |
| unread_reactions_count | [int](/type/int/) | Number of unread reactions to messages you sent |
| unread_poll_votes_count | [int](/type/int/) | Number of [unread votes cast in non-anonymous polls »](https://core.telegram.org/api/poll#unread-poll-votes) owned by the user in this dialog. |
| notify_settings | [PeerNotifySettings](/type/PeerNotifySettings/) | Notification settings |
| pts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [PTS](/api/updates/) |
| draft | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[DraftMessage](/type/DraftMessage/) | Message [draft](https://core.telegram.org/api/drafts) |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| ttl_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | Time-to-live of all messages sent in this dialog |

## Тип

[Dialog](/type/Dialog/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/)

Users may also choose to display messages from all topics of a [forum](https://core.telegram.org/api/forum) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method.

Invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

#### [Mentions and replies](https://core.telegram.org/api/mentions)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [Polls and quizzes](https://core.telegram.org/api/poll)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
