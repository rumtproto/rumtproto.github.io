---
title: "account.toggleConnectedBotPaused"
original: "https://core.telegram.org/method/account.toggleConnectedBotPaused"
section: ref
kind: method
description: "Приостановить или возобновить конкретный чат, временно отключив его от всех бизнес-ботов »."
layout: layout.njk
---

# account.toggleConnectedBotPaused

Приостановить или возобновить конкретный чат, временно отключив его от всех [бизнес-ботов »](/api/bots/connected-business-bots/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.toggleConnectedBotPaused#646e1097 peer:InputPeer paused:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат, который требуется приостановить</td></tr><tr><td><strong>paused</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Приостановить или возобновить чат</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
