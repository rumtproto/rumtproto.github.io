---
title: "inputChatThemeUniqueGift (конструктор)"
original: "https://core.telegram.org/constructor/inputChatThemeUniqueGift"
section: ref
kind: constructor
layout: layout.njk
---

# inputChatThemeUniqueGift

*Конструктор из схемы TL.*

> Set a theme based on an owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts), returned by [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/).

## Определение TL

```
inputChatThemeUniqueGift#87e5dfe4 slug:string = InputChatTheme;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | The slug from [starGiftUnique](/constructor/starGiftUnique/).slug. |

## Тип

[InputChatTheme](/type/InputChatTheme/)

## Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/)

Obtain all [chat themes »](https://core.telegram.org/api/themes#chat-themes) associated to owned or [hosted collectible gifts »](https://core.telegram.org/api/gifts#hosted-collectible-gifts).
