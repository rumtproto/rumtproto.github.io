---
title: "InputChatTheme (тип)"
original: "https://core.telegram.org/type/InputChatTheme"
section: ref
kind: type
layout: layout.njk
---

# InputChatTheme

*Тип из схемы TL.*

> Specifies a [chat theme »](https://core.telegram.org/api/themes#chat-themes).

## Определение TL

```
inputChatThemeEmpty#83268483 = InputChatTheme;
inputChatTheme#c93de95c emoticon:string = InputChatTheme;
inputChatThemeUniqueGift#87e5dfe4 slug:string = InputChatTheme;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputChatThemeEmpty](/constructor/inputChatThemeEmpty/) | Remove any currently configured theme. |
| [inputChatTheme](/constructor/inputChatTheme/) | Set an emoji-based chat theme, returned by [account.getChatThemes](/method/account.getChatThemes/). |
| [inputChatThemeUniqueGift](/constructor/inputChatThemeUniqueGift/) | Set a theme based on an owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts), returned by [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/). |

## Related pages

#### [Telegram themes](https://core.telegram.org/api/themes)

Telegram apps support generating, sharing and synchronizing app themes.
