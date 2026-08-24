---
title: "BotMenuButton"
original: "https://core.telegram.org/type/BotMenuButton"
section: ref
kind: type
description: "Указывает действие, выполняемое при нажатии на кнопку меню ботов в интерфейсе"
layout: layout.njk
---

# BotMenuButton

Указывает действие, выполняемое при нажатии на кнопку меню ботов в интерфейсе

```
botMenuButtonDefault#7533a588 = BotMenuButton;
botMenuButtonCommands#4258c205 = BotMenuButton;
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;

---functions---

bots.getBotMenuButton#9c60eb28 user_id:InputUser = BotMenuButton;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/botMenuButtonDefault">botMenuButtonDefault</a></td><td>Заглушка <a href="/api/bots/menu">кнопки меню бота</a>, никогда не возвращаемая пользователям: подробнее <a href="/api/bots/menu">см. документацию</a>.</td></tr><tr><td><a href="/constructor/botMenuButtonCommands">botMenuButtonCommands</a></td><td><a href="/api/bots/menu">Кнопка меню бота</a>, которая при нажатии открывает список команд бота.</td></tr><tr><td><a href="/constructor/botMenuButton">botMenuButton</a></td><td><a href="/api/bots/menu">Кнопка меню бота</a>, которая при нажатии открывает <a href="/api/bots/webapps">веб-приложение</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/bots.getBotMenuButton">bots.getBotMenuButton</a></td><td>Получает действие кнопки меню для указанного пользователя или для всех пользователей, ранее заданное с помощью <a href="/method/bots.setBotMenuButton">bots.setBotMenuButton</a>; пользователи видят эту информацию в конструкторе <a href="/constructor/botInfo">botInfo</a>.</td></tr></tbody></table>
