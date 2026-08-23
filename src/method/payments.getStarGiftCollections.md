---
title: "payments.getStarGiftCollections (метод)"
original: "https://core.telegram.org/method/payments.getStarGiftCollections"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarGiftCollections

*Метод из схемы TL.*

> Fetches all [star gift collections »](https://core.telegram.org/api/gifts#gift-collections) of a peer.

## Определение TL

```
payments.starGiftCollectionsNotModified#a0ba4f17 = payments.StarGiftCollections;
payments.starGiftCollections#8a2932f3 collections:Vector<StarGiftCollection> = payments.StarGiftCollections;
---functions---
payments.getStarGiftCollections#981b91dd peer:InputPeer hash:long = payments.StarGiftCollections;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer. |
| hash | [long](/type/long/) | Hash ([generated as specified here »](https://core.telegram.org/api/offsets#hash-generation)) using the [starGiftCollection](/constructor/starGiftCollection/).hash field (not the collection_id field) of all collections returned by a previous method call, to avoid refetching the result if it hasn't changed. |

## Результат

[payments.StarGiftCollections](/type/payments.StarGiftCollections/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [starGiftCollection](/constructor/starGiftCollection/)

Represents a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections).

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
