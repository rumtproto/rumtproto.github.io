---
title: "payments.StarGiftCollections (тип)"
original: "https://core.telegram.org/type/payments.StarGiftCollections"
section: ref
kind: type
layout: layout.njk
---

# payments.StarGiftCollections

*Тип из схемы TL.*

> Represents a list of [star gift collections »](https://core.telegram.org/api/gifts#gift-collections).

## Определение TL

```
payments.starGiftCollectionsNotModified#a0ba4f17 = payments.StarGiftCollections;
payments.starGiftCollections#8a2932f3 collections:Vector<StarGiftCollection> = payments.StarGiftCollections;

---functions---

payments.getStarGiftCollections#981b91dd peer:InputPeer hash:long = payments.StarGiftCollections;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starGiftCollectionsNotModified](/constructor/payments.starGiftCollectionsNotModified/) | The list of [star gift collections »](https://core.telegram.org/api/gifts#gift-collections) hasn't changed. |
| [payments.starGiftCollections](/constructor/payments.starGiftCollections/) | Represents a list of [star gift collections »](https://core.telegram.org/api/gifts#gift-collections). |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarGiftCollections](/method/payments.getStarGiftCollections/) | Fetches all [star gift collections »](https://core.telegram.org/api/gifts#gift-collections) of a peer. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
