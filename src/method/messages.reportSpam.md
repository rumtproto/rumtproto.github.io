---
title: "messages.reportSpam"
original: "https://core.telegram.org/method/messages.reportSpam"
section: ref
kind: method
description: "Пожаловаться на новый входящий чат за спам, если настройки пира этого чата позволяют это сделать"
layout: layout.njk
---

# messages.reportSpam

Пожаловаться на новый входящий чат за спам, если [настройки пира](/constructor/peerSettings/) этого чата позволяют это сделать

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportSpam#cf1592db peer:InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, на которого подаётся жалоба</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [peerSettings](/constructor/peerSettings/)

Список действий, доступных при взаимодействии с этим пользователем; они показываются как предлагаемые действия в [панели действий чата »](/api/action-bar/), подробнее [см. здесь »](/api/action-bar/).
