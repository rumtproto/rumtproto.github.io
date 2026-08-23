---
title: "payments.getCraftStarGifts (метод)"
original: "https://core.telegram.org/method/payments.getCraftStarGifts"
section: ref
kind: method
layout: layout.njk
---

# payments.getCraftStarGifts

*Метод из схемы TL.*

> Obtain owned [collectible gifts »](https://core.telegram.org/api/gifts#collectible-gifts) of a specific type that can be used for [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts).

## Определение TL

```
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;
---functions---
payments.getCraftStarGifts#fd05dd00 gift_id:long offset:string limit:int = payments.SavedStarGifts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift_id | [long](/type/long/) | Identifier of the base gift type, equal to [starGiftUnique](/constructor/starGiftUnique/).gift_id of the first selected gift. |
| offset | [string](/type/string/) | Offset for pagination. |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STARGIFT_INVALID | The passed gift is invalid. |

## Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
