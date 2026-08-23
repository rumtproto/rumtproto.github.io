---
title: "payments.convertStarGift (метод)"
original: "https://core.telegram.org/method/payments.convertStarGift"
section: ref
kind: method
layout: layout.njk
---

# payments.convertStarGift

*Метод из схемы TL.*

> Convert a [received gift »](https://core.telegram.org/api/gifts) into Telegram Stars: this will permanently destroy the gift, converting it into [starGift](/constructor/starGift/).`convert_stars` [Telegram Stars](https://core.telegram.org/api/stars), added to the user's balance.
> Note that [starGift](/constructor/starGift/).`convert_stars` will be less than the buying price ([starGift](/constructor/starGift/).`stars`) of the gift if it was originally bought using Telegram Stars bought a long time ago.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.convertStarGift#74bf076b stargift:InputSavedStarGift = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stargift | [InputSavedStarGift](/type/InputSavedStarGift/) | The gift to convert. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | SAVED_ID_EMPTY | The passed inputSavedStarGiftChat.saved_id is empty. |
| 400 | STARGIFT_PEER_INVALID | The specified inputSavedStarGiftChat.peer is invalid. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
