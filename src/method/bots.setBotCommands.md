---
title: "bots.setBotCommands"
original: "https://core.telegram.org/method/bots.setBotCommands"
section: ref
kind: method
description: "Задать список команд бота"
layout: layout.njk
---

# bots.setBotCommands

Задать список команд бота

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotCommands#517165a scope:BotCommandScope lang_code:string commands:Vector<BotCommand> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>scope</strong></td><td style="text-align: center;"><a href="/type/BotCommandScope">BotCommandScope</a></td><td>Область действия команды</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка</td></tr><tr><td><strong>commands</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/BotCommand">BotCommand</a>&gt;</td><td>Команды бота</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_COMMAND_DESCRIPTION_INVALID</td><td>Указанное описание команды недействительно.</td></tr><tr><td>400</td><td>BOT_COMMAND_INVALID</td><td>Указанная команда недействительна.</td></tr><tr><td>400</td><td>LANG_CODE_INVALID</td><td>Указанный код языка недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>
