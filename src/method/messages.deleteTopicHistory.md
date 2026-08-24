---
title: "messages.deleteTopicHistory"
original: "https://core.telegram.org/method/messages.deleteTopicHistory"
section: ref
kind: method
description: "Удалить историю сообщений темы форума"
layout: layout.njk
---

# messages.deleteTopicHistory

Удалить историю сообщений [темы форума](/api/forum/)

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.deleteTopicHistory#d2816f10 peer:InputPeer top_msg_id:int = messages.AffectedHistory;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Форум-супергруппа, личный чат (для ботов с поддержкой форумов) или форум бота (для пользователей), где находится тема.</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор темы</td></tr></tbody></table>

### Результат

[messages.AffectedHistory](/type/messages.AffectedHistory/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
