---
title: "payments.deleteStarGiftCollection (метод)"
original: "https://core.telegram.org/method/payments.deleteStarGiftCollection"
section: ref
kind: method
layout: layout.njk
---

# payments.deleteStarGiftCollection

*Метод из схемы TL.*

> Delete a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.deleteStarGiftCollection#ad5648e8 peer:InputPeer collection_id:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer that owns the collection. |
| collection_id | [int](/type/int/) | ID of the collection. |

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
