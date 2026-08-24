---
title: "bots.getBotCommands"
original: "https://core.telegram.org/method/bots.getBotCommands"
section: ref
kind: method
description: "Получить список команд бота для указанной области видимости и кода языка"
layout: layout.njk
---

# bots.getBotCommands

Получить список команд бота для указанной области видимости и кода языка

```
---functions---
bots.getBotCommands#e34c0dd6 scope:BotCommandScope lang_code:string = Vector<BotCommand>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>scope</strong></td><td style="text-align: center;"><a href="/type/BotCommandScope">BotCommandScope</a></td><td>Область действия команды</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[BotCommand](/type/BotCommand/)\>

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>
