---
title: "chatThemeUniqueGift (конструктор)"
original: "https://core.telegram.org/constructor/chatThemeUniqueGift"
section: ref
kind: constructor
layout: layout.njk
---

# chatThemeUniqueGift

*Конструктор из схемы TL.*

> A chat theme based on a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
chatThemeUniqueGift#3458f9c8 gift:StarGift theme_settings:Vector<ThemeSettings> = ChatTheme;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift | [StarGift](/type/StarGift/) | The owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) on which this theme is based, as a [starGiftUnique](/constructor/starGiftUnique/) constructor. |
| theme_settings | [Vector](https://core.telegram.org/type/Vector%20t)<[ThemeSettings](/type/ThemeSettings/)> | Theme settings. |

## Тип

[ChatTheme](/type/ChatTheme/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.
