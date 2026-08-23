---
title: "botMenuButton (конструктор)"
original: "https://core.telegram.org/constructor/botMenuButton"
section: ref
kind: constructor
layout: layout.njk
---

# botMenuButton

*Конструктор из схемы TL.*

> [Bot menu button](https://core.telegram.org/api/bots/menu) that opens a [web app](https://core.telegram.org/api/bots/webapps) when clicked.

## Определение TL

```
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| text | [string](/type/string/) | Title to be displayed on the menu button instead of 'Menu' |
| url | [string](/type/string/) | URL of a [web app](https://core.telegram.org/api/bots/webapps) to open when the user clicks on the button |

## Тип

[BotMenuButton](/type/BotMenuButton/)

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Bot menu button](https://core.telegram.org/api/bots/menu)

Bots can choose the behavior of the menu button shown next to the text input field.
