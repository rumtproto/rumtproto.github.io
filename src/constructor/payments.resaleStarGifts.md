---
title: "payments.resaleStarGifts (конструктор)"
original: "https://core.telegram.org/constructor/payments.resaleStarGifts"
section: ref
kind: constructor
layout: layout.njk
---

# payments.resaleStarGifts

*Конструктор из схемы TL.*

> List of gifts currently on [resale »](https://core.telegram.org/api/gifts#reselling-collectible-gifts).

## Определение TL

```
payments.resaleStarGifts#947a12df flags:# count:int gifts:Vector<StarGift> next_offset:flags.0?string attributes:flags.1?Vector<StarGiftAttribute> attributes_hash:flags.1?long chats:Vector<Chat> counters:flags.2?Vector<StarGiftAttributeCounter> users:Vector<User> = payments.ResaleStarGifts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of results. |
| gifts | [Vector](https://core.telegram.org/type/Vector%20t)<[StarGift](/type/StarGift/)> | Collectible gifts on resale (may be less than count, in which case next_offset will be set). |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Offset for pagination, pass this to [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/).offset to fetch the next results. |
| attributes | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftAttribute](/type/StarGiftAttribute/)> | Possible gift attributes, only set if [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/).attributes_hash is set (on the first call, it must be equal to 0). |
| attributes_hash | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[long](/type/long/) | Hash of the attributes field, pass this to [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/).attributes_hash to avoid returning any attributes (flag not set) if they haven't changed. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in the attributes. |
| counters | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftAttributeCounter](/type/StarGiftAttributeCounter/)> | Indicates the total number of gifts that have a specific attribute, only set if [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/).offset is empty (since this field is not related to the current result page but to all of them, it's only returned on the first page). |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the attributes. |

## Тип

[payments.ResaleStarGifts](/type/payments.ResaleStarGifts/)

## Related pages

#### [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/)

Get [collectible gifts](https://core.telegram.org/api/gifts#collectible-gifts) of a specific type currently on resale, see [here »](https://core.telegram.org/api/gifts#reselling-collectible-gifts) for more info.

`sort_by_price` and `sort_by_num` are mutually exclusive, if neither are set results are sorted by the unixtime (descending) when their resell price was last changed.

See [here »](https://core.telegram.org/api/gifts#sending-gifts) for detailed documentation on this method.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
