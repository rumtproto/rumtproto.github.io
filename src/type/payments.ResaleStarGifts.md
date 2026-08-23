---
title: "payments.ResaleStarGifts (тип)"
original: "https://core.telegram.org/type/payments.ResaleStarGifts"
section: ref
kind: type
layout: layout.njk
---

# payments.ResaleStarGifts

*Тип из схемы TL.*

> List of gifts currently on [resale »](https://core.telegram.org/api/gifts#reselling-collectible-gifts).

## Определение TL

```
payments.resaleStarGifts#947a12df flags:# count:int gifts:Vector<StarGift> next_offset:flags.0?string attributes:flags.1?Vector<StarGiftAttribute> attributes_hash:flags.1?long chats:Vector<Chat> counters:flags.2?Vector<StarGiftAttributeCounter> users:Vector<User> = payments.ResaleStarGifts;

---functions---

payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/) | List of gifts currently on [resale »](https://core.telegram.org/api/gifts#reselling-collectible-gifts). |

## Методы

| Method | Описание |
|---|---|
| [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/) | Get [collectible gifts](https://core.telegram.org/api/gifts#collectible-gifts) of a specific type currently on resale, see [here »](https://core.telegram.org/api/gifts#reselling-collectible-gifts) for more info. sort_by_price and sort_by_num are mutually exclusive, if neither are set results are sorted by the unixtime (descending) when their resell price was last changed. See [here »](https://core.telegram.org/api/gifts#sending-gifts) for detailed documentation on this method. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
