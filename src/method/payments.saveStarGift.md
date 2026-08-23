---
title: "payments.saveStarGift (метод)"
original: "https://core.telegram.org/method/payments.saveStarGift"
section: ref
kind: method
layout: layout.njk
---

# payments.saveStarGift

*Метод из схемы TL.*

> Display or remove a [received or hosted gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) from our profile.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.saveStarGift#2a2a697c flags:# unsave:flags.0?true stargift:InputSavedStarGift = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| unsave | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, hides the gift from our profile. |
| stargift | [InputSavedStarGift](/type/InputSavedStarGift/) | The gift to display or remove. A [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) may be used by its host or owner. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | SAVED_ID_EMPTY | The passed inputSavedStarGiftChat.saved_id is empty. |
| 400 | STARGIFT_OBJECT_INVALID | The specified star gift object is invalid. |
| 400 | STARGIFT_OWNER_INVALID | You cannot transfer or sell a gift owned by another user. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
