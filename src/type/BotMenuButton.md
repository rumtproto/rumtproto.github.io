---
title: "BotMenuButton (тип)"
original: "https://core.telegram.org/type/BotMenuButton"
section: ref
kind: type
layout: layout.njk
---

# BotMenuButton

*Тип из схемы TL.*

> Indicates the action to execute when pressing the in-UI menu button for bots

## Определение TL

```
botMenuButtonDefault#7533a588 = BotMenuButton;
botMenuButtonCommands#4258c205 = BotMenuButton;
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;

---functions---

bots.getBotMenuButton#9c60eb28 user_id:InputUser = BotMenuButton;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [botMenuButtonDefault](/constructor/botMenuButtonDefault/) | Placeholder [bot menu button](https://core.telegram.org/api/bots/menu) never returned to users: see [the docs for more info](https://core.telegram.org/api/bots/menu). |
| [botMenuButtonCommands](/constructor/botMenuButtonCommands/) | [Bot menu button](https://core.telegram.org/api/bots/menu) that opens the bot command list when clicked. |
| [botMenuButton](/constructor/botMenuButton/) | [Bot menu button](https://core.telegram.org/api/bots/menu) that opens a [web app](https://core.telegram.org/api/bots/webapps) when clicked. |

## Методы

| Method | Описание |
|---|---|
| [bots.getBotMenuButton](/method/bots.getBotMenuButton/) | Gets the menu button action for a given user or for all users, previously set using [bots.setBotMenuButton](/method/bots.setBotMenuButton/); users can see this information in the [botInfo](/constructor/botInfo/) constructor. |
