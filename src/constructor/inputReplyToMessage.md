---
title: "inputReplyToMessage (конструктор)"
original: "https://core.telegram.org/constructor/inputReplyToMessage"
section: ref
kind: constructor
layout: layout.njk
---

# inputReplyToMessage

*Конструктор из схемы TL.*

> Reply to a message.

## Определение TL

```
inputReplyToMessage#869fbe10 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int = InputReplyTo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| reply_to_msg_id | [int](/type/int/) | The message ID to reply to. |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | This field must contain the topic ID only when replying to messages in forum topics different from the "General" topic (i.e. reply_to_msg_id is set and reply_to_msg_id != topicID and topicID != 1). If the replied-to message is deleted before the method finishes execution, the value in this field will be used to send the message to the correct topic, instead of the "General" topic. |
| reply_to_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputPeer](/type/InputPeer/) | Used to reply to messages sent to another chat (specified here), can only be used for non-protected chats and messages. |
| quote_text | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Used to quote-reply to only a certain section (specified here) of the original message. The maximum UTF-8 length for quotes is specified in the [quote_length_max](https://core.telegram.org/api/config#quote-length-max) config key. |
| quote_entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) from the quote_text field. |
| quote_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Offset of the message quote_text within the original message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)). |
| monoforum_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[InputPeer](/type/InputPeer/) | Must be set to the ID of the topic when replying to a message within a [monoforum topic](https://core.telegram.org/api/monoforum). |
| todo_item_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[int](/type/int/) | Can be set to reply to the specified item of a [todo list »](https://core.telegram.org/api/todo). |
| poll_option | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[bytes](/type/bytes/) | If set, sends the message as a [reply to a specific poll answer option »](https://core.telegram.org/api/poll#replying-to-poll-options), containing the option bytes of the desired answer. |

## Тип

[InputReplyTo](/type/InputReplyTo/)

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Checklists and to-do lists](https://core.telegram.org/api/todo)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.

#### [Polls and quizzes](https://core.telegram.org/api/poll)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.
