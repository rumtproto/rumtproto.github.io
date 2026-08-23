---
title: "payments.toggleChatStarGiftNotifications (метод)"
original: "https://core.telegram.org/method/payments.toggleChatStarGiftNotifications"
section: ref
kind: method
layout: layout.njk
---

# payments.toggleChatStarGiftNotifications

*Метод из схемы TL.*

> Enables or disables the reception of notifications every time a [gift »](https://core.telegram.org/api/gifts) is received by the specified channel, can only be invoked by admins with `post_messages` [admin rights](/constructor/chatAdminRights/).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.toggleChatStarGiftNotifications#60eaefa1 flags:# enabled:flags.0?true peer:InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to enable or disable reception of notifications in the form of [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/) and [messageActionStarGift](/constructor/messageActionStarGift/) service messages from the channel. |
| peer | [InputPeer](/type/InputPeer/) | The channel for which to receive or not receive notifications. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

A [gift »](https://core.telegram.org/api/gifts) was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [chatAdminRights](/constructor/chatAdminRights/)

Represents the rights of an admin in a [channel/supergroup](https://core.telegram.org/api/channel).
