---
title: "payments.createStarGiftCollection (метод)"
original: "https://core.telegram.org/method/payments.createStarGiftCollection"
section: ref
kind: method
layout: layout.njk
---

# payments.createStarGiftCollection

*Метод из схемы TL.*

> Create a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections).

## Определение TL

```
starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;
---functions---
payments.createStarGiftCollection#1f4a0e87 peer:InputPeer title:string stargift:Vector<InputSavedStarGift> = StarGiftCollection;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where to create the collection. |
| title | [string](/type/string/) | Title of the collection. |
| stargift | [Vector](https://core.telegram.org/type/Vector%20t)<[InputSavedStarGift](/type/InputSavedStarGift/)> | Gifts added to the collection. |

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
