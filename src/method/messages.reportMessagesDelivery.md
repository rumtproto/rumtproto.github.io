---
title: "messages.reportMessagesDelivery (метод)"
original: "https://core.telegram.org/method/messages.reportMessagesDelivery"
section: ref
kind: method
layout: layout.njk
---

# messages.reportMessagesDelivery

*Метод из схемы TL.*

> Used for [Telegram Gateway verification messages »](https://telegram.org/blog/star-messages-gateway-2-0-and-more#save-even-more-on-user-verification): indicate to the server that one or more [message](/constructor/message/)s were received by the client, if requested by the [message](/constructor/message/).**report\_delivery\_until\_date** flag or the equivalent flag in [push notifications](https://core.telegram.org/api/push-updates).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportMessagesDelivery#5a6d7395 flags:# push:flags.0?true peer:InputPeer id:Vector<int> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| push | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Must be set if the messages were received from a [push notification](https://core.telegram.org/api/push-updates). |
| peer | [InputPeer](/type/InputPeer/) | The peer where the messages were received. |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | The IDs of the received messages. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications

#### [message](/constructor/message/)

A message
