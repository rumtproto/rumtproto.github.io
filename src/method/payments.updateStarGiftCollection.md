---
title: "payments.updateStarGiftCollection (метод)"
original: "https://core.telegram.org/method/payments.updateStarGiftCollection"
section: ref
kind: method
layout: layout.njk
---

# payments.updateStarGiftCollection

*Метод из схемы TL.*

> Add or remove gifts from a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections), or rename the collection.

## Определение TL

```
starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;
---functions---
payments.updateStarGiftCollection#4fddbee7 flags:# peer:InputPeer collection_id:int title:flags.0?string delete_stargift:flags.1?Vector<InputSavedStarGift> add_stargift:flags.2?Vector<InputSavedStarGift> order:flags.3?Vector<InputSavedStarGift> = StarGiftCollection;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Peer that owns the collection. |
| collection_id | [int](/type/int/) | Collection ID. |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Title of the collection, to rename the collection. |
| delete_stargift | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[InputSavedStarGift](/type/InputSavedStarGift/)> | Can contain a list of gifts to remove from the collection. |
| add_stargift | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Vector](https://core.telegram.org/type/Vector%20t)<[InputSavedStarGift](/type/InputSavedStarGift/)> | Can contain a list of gifts to add to the collection. |
| order | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[InputSavedStarGift](/type/InputSavedStarGift/)> | Can contain the new gift order. |

## Результат

[StarGiftCollection](/type/StarGiftCollection/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
