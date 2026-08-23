---
title: "starGiftCollection (конструктор)"
original: "https://core.telegram.org/constructor/starGiftCollection"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftCollection

*Конструктор из схемы TL.*

> Represents a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections).

## Определение TL

```
starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| collection_id | [int](/type/int/) | The ID of the collection. |
| title | [string](/type/string/) | Title of the collection. |
| icon | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Document](/type/Document/) | Optional icon for the collection, taken from the first gift in the collection. |
| gifts_count | [int](/type/int/) | Number of gifts in the collection. |
| hash | [long](/type/long/) | Field to use instead of collection_id when generating the hash to pass to [payments.getStarGiftCollections](/method/payments.getStarGiftCollections/). |

## Тип

[StarGiftCollection](/type/StarGiftCollection/)

## Related pages

#### [payments.getStarGiftCollections](/method/payments.getStarGiftCollections/)

Fetches all [star gift collections »](https://core.telegram.org/api/gifts#gift-collections) of a peer.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
