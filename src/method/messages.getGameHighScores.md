---
title: "messages.getGameHighScores"
original: "https://core.telegram.org/method/messages.getGameHighScores"
section: ref
kind: method
description: "Получить рекорды в игре"
layout: layout.njk
---

# messages.getGameHighScores

Получить рекорды в игре

```
messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;
---functions---
messages.getGameHighScores#e822649d peer:InputPeer id:int user_id:InputUser = messages.HighScores;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Куда была отправлена игра</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения с вложенным медиа игры</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Получить рекорды, установленные определённым пользователем</td></tr></tbody></table>

### Результат

[messages.HighScores](/type/messages.HighScores/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>
