---
title: "forumTopic (конструктор)"
original: "https://core.telegram.org/constructor/forumTopic"
section: ref
kind: constructor
layout: layout.njk
---

# forumTopic

*Конструктор из схемы TL.*

> Represents a [forum topic](https://core.telegram.org/api/forum#forum-topics).

## Определение TL

```
forumTopic#cdff0eca flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| my | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the topic was created by the current user |
| closed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the topic is closed (no messages can be sent to it) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether the topic is pinned |
| short | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether this constructor is a reduced version of the full topic information. If set, only the my, closed, id, date, title, icon_color, icon_emoji_id and from_id parameters will contain valid information. Reduced info is usually only returned in topic-related [admin log events »](https://core.telegram.org/api/recent-actions) and in the [messages.channelMessages](/constructor/messages.channelMessages/) constructor: if needed, full information can be fetched using [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/). |
| hidden | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether the topic is hidden (only valid for the "General" topic, id=1) |
| title_missing | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | If set, the topic has no user-defined title, can only be set for the per-user topics of [bot forums](https://core.telegram.org/api/forum#bot-forums); if this field is set, the topic title likely needs to be changed by the bot. |
| id | [int](/type/int/) | [Topic ID](https://core.telegram.org/api/forum#forum-topics) |
| date | [int](/type/int/) | Topic creation date |
| peer | [Peer](/type/Peer/) | Contains the supergroup/private chat where the topic is located. This field is useful especially when this object is returned by methods like [messages.getMessages](/method/messages.getMessages/), which can return messages and forum topics belonging to different (private chat) peers in the same method call, making it impossible to tell the topic's peer based on the method call parameters or surrounding context. |
| title | [string](/type/string/) | Topic title |
| icon_color | [int](/type/int/) | If no custom emoji icon is specified, specifies the color of the fallback topic icon (RGB), one of 0x6FB9F0, 0xFFD67E, 0xCB86DB, 0x8EEE98, 0xFF93B2, or 0xFB6F5F. |
| icon_emoji_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | ID of the [custom emoji](https://core.telegram.org/api/custom-emoji) used as topic icon. |
| top_message | [int](/type/int/) | ID of the last message that was sent to this topic |
| read_inbox_max_id | [int](/type/int/) | Position up to which all incoming messages are read. |
| read_outbox_max_id | [int](/type/int/) | Position up to which all outgoing messages are read. |
| unread_count | [int](/type/int/) | Number of unread messages |
| unread_mentions_count | [int](/type/int/) | Number of [unread mentions](https://core.telegram.org/api/mentions) |
| unread_reactions_count | [int](/type/int/) | Number of unread reactions to messages you sent |
| unread_poll_votes_count | [int](/type/int/) | Number of [unread votes cast in non-anonymous polls »](https://core.telegram.org/api/poll#unread-poll-votes) owned by the user in this forum topic. |
| from_id | [Peer](/type/Peer/) | ID of the peer that created the topic |
| notify_settings | [PeerNotifySettings](/type/PeerNotifySettings/) | Notification settings |
| draft | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[DraftMessage](/type/DraftMessage/) | Message [draft](https://core.telegram.org/api/drafts) |

## Тип

[ForumTopic](/type/ForumTopic/)

## Related pages

#### [Admin log](https://core.telegram.org/api/recent-actions)

Both supergroups and channels offer a so-called admin log, a log of recent relevant supergroup and channel actions, like the modification of group/channel settings or information on behalf of an admin, user kicks and bans, and more.

#### [messages.channelMessages](/constructor/messages.channelMessages/)

Channel messages

#### [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/)

Get forum topics by their ID

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [messages.getMessages](/method/messages.getMessages/)

Returns the list of messages by their IDs.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Mentions and replies](https://core.telegram.org/api/mentions)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [Polls and quizzes](https://core.telegram.org/api/poll)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts
