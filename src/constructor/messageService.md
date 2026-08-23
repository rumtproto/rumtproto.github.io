---
title: "messageService (конструктор)"
original: "https://core.telegram.org/constructor/messageService"
section: ref
kind: constructor
layout: layout.njk
---

# messageService

*Конструктор из схемы TL.*

> Indicates a service message

## Определение TL

```
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| out | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the message is outgoing |
| mentioned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether we were mentioned in the message |
| media_unread | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether the message contains unread media |
| reactions_are_possible | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Whether you can [react to this message »](https://core.telegram.org/api/reactions). |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | Whether the message is silent |
| post | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | Whether it's a channel post |
| legacy | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | This is a legacy message: it has to be refetched with the new layer |
| id | [int](/type/int/) | Message ID |
| from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[Peer](/type/Peer/) | ID of the sender of this message |
| peer_id | [Peer](/type/Peer/) | Sender of service message |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).28?[Peer](/type/Peer/) | Will only be set for service messages within a [monoforum topic »](https://core.telegram.org/api/monoforum): peer will be equal to the ID of the monoforum and the saved_peer_id flag will be set to the ID of a topic. |
| reply_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[MessageReplyHeader](/type/MessageReplyHeader/) | Reply (thread) information |
| date | [int](/type/int/) | Message date |
| action | [MessageAction](/type/MessageAction/) | Event connected with the service message |
| reactions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[MessageReactions](/type/MessageReactions/) | [Reactions »](https://core.telegram.org/api/reactions). |
| ttl_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[int](/type/int/) | Time To Live of the message, once message.date+message.ttl_period === time(), the message will be deleted on the server, and must be deleted locally as well. |

## Тип

[Message](/type/Message/)

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
