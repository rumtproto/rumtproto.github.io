---
title: "payments.reorderStarGiftCollections (метод)"
original: "https://core.telegram.org/method/payments.reorderStarGiftCollections"
section: ref
kind: method
layout: layout.njk
---

# payments.reorderStarGiftCollections

*Метод из схемы TL.*

> Reorder the [star gift collections »](https://core.telegram.org/api/gifts#gift-collections) on an owned peer's profile.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.reorderStarGiftCollections#c32af4cc peer:InputPeer order:Vector<int> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The owned peer. |
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | New collection order. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
