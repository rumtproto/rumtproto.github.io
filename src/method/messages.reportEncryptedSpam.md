---
title: "messages.reportEncryptedSpam"
original: "https://core.telegram.org/method/messages.reportEncryptedSpam"
section: ref
kind: method
description: "Пожаловаться на секретный чат за спам"
layout: layout.njk
---

# messages.reportEncryptedSpam

Пожаловаться на секретный чат за спам

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportEncryptedSpam#4b0c8c0f peer:InputEncryptedChat = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>[@term:peer] Секретный чат, на который подаётся жалоба</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr></tbody></table>
