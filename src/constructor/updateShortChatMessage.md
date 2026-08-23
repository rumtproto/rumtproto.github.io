---
title: "updateShortChatMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateShortChatMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateShortChatMessage

*Конструктор из схемы TL.*

> Shortened constructor containing info on one new incoming text message from a chat

## Определение TL

```
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| out | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the message is outgoing |
| mentioned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether we were mentioned in this message |
| media_unread | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether the message contains some unread mentions |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | If true, the message is a silent message, no notifications should be triggered |
| id | [int](/type/int/) | ID of the message |
| from_id | [long](/type/long/) | ID of the sender of the message |
| chat_id | [long](/type/long/) | ID of the chat where the message was sent |
| message | [string](/type/string/) | Message |
| pts | [int](/type/int/) | [PTS](/api/updates/) |
| pts_count | [int](/type/int/) | [PTS count](/api/updates/) |
| date | [int](/type/int/) | [date](/api/updates/) |
| fwd_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[MessageFwdHeader](/type/MessageFwdHeader/) | Info about a forwarded message |
| via_bot_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[long](/type/long/) | Info about the inline bot used to generate this message |
| reply_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[MessageReplyHeader](/type/MessageReplyHeader/) | Reply (thread) information |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Entities](https://core.telegram.org/api/entities) for styled text |
| ttl_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[int](/type/int/) | Time To Live of the message, once updateShortChatMessage.date+updateShortChatMessage.ttl_period === time(), the message will be deleted on the server, and must be deleted locally as well. |

## Тип

[Updates](/type/Updates/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
