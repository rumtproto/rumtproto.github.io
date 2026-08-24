---
title: "messages.readHistory"
original: "https://core.telegram.org/method/messages.readHistory"
section: ref
kind: method
description: "Отмечает историю сообщений как прочитанную."
layout: layout.njk
---

# messages.readHistory

Отмечает историю сообщений как прочитанную.

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
messages.readHistory#e306d3a peer:InputPeer max_id:int = messages.AffectedMessages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Целевой пользователь или группа</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Если передано положительное значение, прочитанными будут помечены только сообщения с идентификаторами меньше или равными указанному</td></tr></tbody></table>

### Результат

[messages.AffectedMessages](/type/messages.AffectedMessages/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
