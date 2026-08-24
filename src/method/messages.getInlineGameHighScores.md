---
title: "messages.getInlineGameHighScores"
original: "https://core.telegram.org/method/messages.getInlineGameHighScores"
section: ref
kind: method
description: "Получить рекорды в игре, отправленной через инлайн-бота"
layout: layout.njk
---

# messages.getInlineGameHighScores

Получить рекорды в игре, отправленной через инлайн-бота

```
messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;
---functions---
messages.getInlineGameHighScores#f635e1b id:InputBotInlineMessageID user_id:InputUser = messages.HighScores;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineMessageID">InputBotInlineMessageID</a></td><td>Идентификатор инлайн-сообщения</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Получить рекорды определённого пользователя</td></tr></tbody></table>

### Результат

[messages.HighScores](/type/messages.HighScores/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>
