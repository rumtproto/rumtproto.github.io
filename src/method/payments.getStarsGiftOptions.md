---
title: "payments.getStarsGiftOptions (метод)"
original: "https://core.telegram.org/method/payments.getStarsGiftOptions"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarsGiftOptions

*Метод из схемы TL.*

> Obtain a list of [Telegram Stars gift options »](https://core.telegram.org/api/stars#buying-or-gifting-stars) as [starsGiftOption](/constructor/starsGiftOption/) constructors.

## Определение TL

```
---functions---
payments.getStarsGiftOptions#d3c96bc8 flags:# user_id:flags.0?InputUser = Vector<StarsGiftOption>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| user_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputUser](/type/InputUser/) | Receiver of the gift (optional). |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[StarsGiftOption](/type/StarsGiftOption/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | USER_GIFT_UNAVAILABLE | Gifts are not available in the current region ([stars_gifts_enabled](https://core.telegram.org/api/config#stars-gifts-enabled) is equal to false). |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [starsGiftOption](/constructor/starsGiftOption/)

[Telegram Stars gift option](https://core.telegram.org/api/stars#buying-or-gifting-stars).

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
