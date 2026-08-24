---
title: "bots.resetBotCommands"
original: "https://core.telegram.org/method/bots.resetBotCommands"
section: ref
kind: method
description: "Удалить команды бота для указанной области видимости и кода языка"
layout: layout.njk
---

# bots.resetBotCommands

Удалить команды бота для указанной области видимости и кода языка

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.resetBotCommands#3d8de0f9 scope:BotCommandScope lang_code:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>scope</strong></td><td style="text-align: center;"><a href="/type/BotCommandScope">BotCommandScope</a></td><td>Область действия команды</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>LANG_CODE_INVALID</td><td>Указанный код языка недействителен.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>
