---
title: "payments.getResaleStarGifts (метод)"
original: "https://core.telegram.org/method/payments.getResaleStarGifts"
section: ref
kind: method
layout: layout.njk
---

# payments.getResaleStarGifts

*Метод из схемы TL.*

> Get [collectible gifts](https://core.telegram.org/api/gifts#collectible-gifts) of a specific type currently on resale, see [here »](https://core.telegram.org/api/gifts#reselling-collectible-gifts) for more info.
> `sort_by_price` and `sort_by_num` are mutually exclusive, if neither are set results are sorted by the unixtime (descending) when their resell price was last changed.
> See [here »](https://core.telegram.org/api/gifts#sending-gifts) for detailed documentation on this method.

## Определение TL

```
payments.resaleStarGifts#947a12df flags:# count:int gifts:Vector<StarGift> next_offset:flags.0?string attributes:flags.1?Vector<StarGiftAttribute> attributes_hash:flags.1?long chats:Vector<Chat> counters:flags.2?Vector<StarGiftAttributeCounter> users:Vector<User> = payments.ResaleStarGifts;
---functions---
payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| sort_by_price | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Sort gifts by price (ascending). |
| sort_by_num | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Sort gifts by number (ascending). |
| for_craft | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Only return collectible gifts that can be bought and used for [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts); render each returned gift's [starGiftUnique](/constructor/starGiftUnique/).craft_chance_permille as its crafting success contribution. |
| stars_only | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Only return gifts that can be bought using [Stars](https://core.telegram.org/api/stars). |
| attributes_hash | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | If a previous call to the method was made and [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).attributes_hash was set, pass it here to avoid returning any results if they haven't changed. Otherwise, set this flag and pass 0 to return [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).attributes_hash and [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).attributes, these two fields will not be set if this flag is not set. |
| gift_id | [long](/type/long/) | Mandatory identifier of the base gift from which the collectible gift was upgraded. |
| attributes | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftAttributeId](/type/StarGiftAttributeId/)> | Optionally filter gifts with the specified attributes. If no attributes of a specific type are specified, all attributes of that type are allowed. |
| offset | [string](/type/string/) | Offset for pagination. If not equal to an empty string, [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/).counters will not be set to avoid returning the counters every time a new page is fetched. |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[payments.ResaleStarGifts](/type/payments.ResaleStarGifts/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STARGIFT_ATTRIBUTE_INVALID | One of the specified star gift attributes is invalid. |
| 400 | STARGIFT_INVALID | The passed gift is invalid. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/)

List of gifts currently on [resale »](https://core.telegram.org/api/gifts#reselling-collectible-gifts).

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
