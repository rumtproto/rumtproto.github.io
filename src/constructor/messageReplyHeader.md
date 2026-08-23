---
title: "messageReplyHeader (конструктор)"
original: "https://core.telegram.org/constructor/messageReplyHeader"
section: ref
kind: constructor
layout: layout.njk
---

# messageReplyHeader

*Конструктор из схемы TL.*

> Message replies and [thread](https://core.telegram.org/api/threads) information

## Определение TL

```
messageReplyHeader#6917560b flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int = MessageReplyHeader;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| reply_to_scheduled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | This is a reply to a scheduled message. |
| forum_topic | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this message was sent in a [forum topic](https://core.telegram.org/api/forum#forum-topics) (except for the General topic). |
| quote | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Whether this message is quoting a part of another message. |
| reply_to_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | ID of message to which this message is replying |
| reply_to_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Peer](/type/Peer/) | For replies sent in [channel discussion threads](https://core.telegram.org/api/threads) of which the current user is not a member, the discussion group ID |
| reply_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[MessageFwdHeader](/type/MessageFwdHeader/) | When replying to a message sent by a certain peer to another chat, contains info about the peer that originally sent the message to that other chat. |
| reply_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[MessageMedia](/type/MessageMedia/) | When replying to a media sent by a certain peer to another chat, contains the media of the replied-to message. |
| reply_to_top_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | ID of the message that started this [message thread](https://core.telegram.org/api/threads) |
| quote_text | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[string](/type/string/) | Used to quote-reply to only a certain section (specified here) of the original message. |
| quote_entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) from the quote_text field. |
| quote_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | Offset of the message quote_text within the original message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)). |
| todo_item_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[int](/type/int/) | Can be set to reply to the specified item of a [todo list »](https://core.telegram.org/api/todo). |
| poll_option | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[bytes](/type/bytes/) | If the message is a [reply to a specific poll answer option »](https://core.telegram.org/api/poll#replying-to-poll-options), the option bytes of the answer the reply is directed at. |

## Тип

[MessageReplyHeader](/type/MessageReplyHeader/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Checklists and to-do lists](https://core.telegram.org/api/todo)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.

#### [Polls and quizzes](https://core.telegram.org/api/poll)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.
