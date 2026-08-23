---
title: "payments.uniqueStarGift (конструктор)"
original: "https://core.telegram.org/constructor/payments.uniqueStarGift"
section: ref
kind: constructor
layout: layout.njk
---

# payments.uniqueStarGift

*Конструктор из схемы TL.*

> Represents a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
payments.uniqueStarGift#416c56e8 gift:StarGift chats:Vector<Chat> users:Vector<User> = payments.UniqueStarGift;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift | [StarGift](/type/StarGift/) | The [starGiftUnique](/constructor/starGiftUnique/) constructor. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in the gift field. |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the gift field. |

## Тип

[payments.UniqueStarGift](/type/payments.UniqueStarGift/)

## Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
