---
title: "ChatTheme (тип)"
original: "https://core.telegram.org/type/ChatTheme"
section: ref
kind: type
layout: layout.njk
---

# ChatTheme

*Тип из схемы TL.*

> A chat theme

## Определение TL

```
chatTheme#c3dffc04 emoticon:string = ChatTheme;
chatThemeUniqueGift#3458f9c8 gift:StarGift theme_settings:Vector<ThemeSettings> = ChatTheme;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatTheme](/constructor/chatTheme/) | A chat theme |
| [chatThemeUniqueGift](/constructor/chatThemeUniqueGift/) | A chat theme based on a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
