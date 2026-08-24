---
title: "updateBotCommands"
original: "https://core.telegram.org/constructor/updateBotCommands"
section: ref
kind: constructor
description: "Изменился набор команд определённого бота в определённом чате."
layout: layout.njk
---

# updateBotCommands

Изменился [набор команд](/api/bots/commands/) определённого бота в определённом чате.

```
updateBotCommands#4d712f2e peer:Peer bot_id:long commands:Vector<BotCommand> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Затронутый чат</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор бота, изменившего свой набор команд</td></tr><tr><td><strong>commands</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/BotCommand">BotCommand</a>&gt;</td><td>Новые команды бота</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Команды ботов](/api/bots/commands/)

Боты предлагают набор команд, которыми пользователи могут пользоваться в личных сообщениях или в чате.
