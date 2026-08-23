---
title: "StarGiftCollection (тип)"
original: "https://core.telegram.org/type/StarGiftCollection"
section: ref
kind: type
layout: layout.njk
---

# StarGiftCollection

*Тип из схемы TL.*

> Represents a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections).

## Определение TL

```
starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;

---functions---

payments.createStarGiftCollection#1f4a0e87 peer:InputPeer title:string stargift:Vector<InputSavedStarGift> = StarGiftCollection;
payments.updateStarGiftCollection#4fddbee7 flags:# peer:InputPeer collection_id:int title:flags.0?string delete_stargift:flags.1?Vector<InputSavedStarGift> add_stargift:flags.2?Vector<InputSavedStarGift> order:flags.3?Vector<InputSavedStarGift> = StarGiftCollection;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starGiftCollection](/constructor/starGiftCollection/) | Represents a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections). |

## Методы

| Method | Описание |
|---|---|
| [payments.createStarGiftCollection](/method/payments.createStarGiftCollection/) | Create a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections). |
| [payments.updateStarGiftCollection](/method/payments.updateStarGiftCollection/) | Add or remove gifts from a [star gift collection »](https://core.telegram.org/api/gifts#gift-collections), or rename the collection. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
