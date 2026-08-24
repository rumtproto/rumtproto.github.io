---
title: "stats.PublicForwards"
original: "https://core.telegram.org/type/stats.PublicForwards"
section: ref
kind: type
description: "Содержит информацию о пересылках истории в виде сообщения в публичные чаты и о репостах публичными каналами."
layout: layout.njk
---

# Stats.PublicForwards

Содержит информацию о пересылках [истории](/api/stories/) в виде сообщения в публичные чаты и о репостах публичными каналами.

```
stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;

---functions---

stats.getMessagePublicForwards#5f150144 channel:InputChannel msg_id:int offset:string limit:int = stats.PublicForwards;
stats.getStoryPublicForwards#a6437ef6 peer:InputPeer id:int offset:string limit:int = stats.PublicForwards;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stats.publicForwards">stats.publicForwards</a></td><td>Содержит информацию о пересылках <a href="/api/stories">истории</a> в виде сообщения в публичные чаты и о репостах публичными каналами.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stats.getMessagePublicForwards">stats.getMessagePublicForwards</a></td><td>Получает список сообщений, показывающий, в какие другие публичные каналы было переслано сообщение канала.<br>Возвращает список <a href="/constructor/message">сообщений</a>, у которых <code>peer_id</code> равен публичному каналу, в который было переслано это сообщение.</td></tr><tr><td><a href="/method/stats.getStoryPublicForwards">stats.getStoryPublicForwards</a></td><td>Получить пересылки <a href="/api/stories">истории</a> в виде сообщения в публичные чаты и репосты публичными каналами.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
