---
title: "bots.setBotMenuButton"
original: "https://core.telegram.org/method/bots.setBotMenuButton"
section: ref
kind: method
description: "Задаёт действие кнопки меню » для указанного пользователя или для всех пользователей"
layout: layout.njk
---

# bots.setBotMenuButton

Задаёт [действие кнопки меню »](/api/bots/menu/) для указанного пользователя или для всех пользователей

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotMenuButton#4504d54f user_id:InputUser button:BotMenuButton = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>button</strong></td><td style="text-align: center;"><a href="/type/BotMenuButton">BotMenuButton</a></td><td>Действие кнопки меню бота</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BUTTON_INVALID</td><td>Указанная кнопка недействительна.</td></tr><tr><td>400</td><td>BUTTON_TEXT_INVALID</td><td>Указанный текст кнопки недействителен.</td></tr><tr><td>400</td><td>BUTTON_URL_INVALID</td><td>Недействительный URL кнопки.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>

### Связанные страницы

#### [Кнопка меню бота](/api/bots/menu/)

Боты могут выбирать поведение кнопки меню, отображаемой рядом с полем ввода текста.
