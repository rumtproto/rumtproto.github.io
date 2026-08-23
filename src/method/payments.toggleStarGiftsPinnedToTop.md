---
title: "payments.toggleStarGiftsPinnedToTop (метод)"
original: "https://core.telegram.org/method/payments.toggleStarGiftsPinnedToTop"
section: ref
kind: method
layout: layout.njk
---

# payments.toggleStarGiftsPinnedToTop

*Метод из схемы TL.*

> Pins a received gift on top of the profile of the user or owned channels by using [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.toggleStarGiftsPinnedToTop#1513e7b0 peer:InputPeer stargift:Vector<InputSavedStarGift> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer where to pin the gift. |
| stargift | [Vector](https://core.telegram.org/type/Vector%20t)<[InputSavedStarGift](/type/InputSavedStarGift/)> | The gift to pin. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/)

Pins a received gift on top of the profile of the user or owned channels by using [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/).
