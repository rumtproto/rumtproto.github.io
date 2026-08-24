---
title: "channels.deleteMessages"
original: "https://core.telegram.org/method/channels.deleteMessages"
section: ref
kind: method
description: "Удалить сообщения в канале/супергруппе"
layout: layout.njk
---

# channels.deleteMessages

Удалить сообщения в [канале/супергруппе](/api/channel/)

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
channels.deleteMessages#84c1fd4e channel:InputChannel id:Vector<int> = messages.AffectedMessages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/channel">Канал/супергруппа</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы сообщений, которые нужно удалить</td></tr></tbody></table>

### Результат

[messages.AffectedMessages](/type/messages.AffectedMessages/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>420</td><td>FROZEN_METHOD_INVALID</td><td>Текущий аккаунт <a href="/api/auth#frozen-accounts">заморожен</a> и поэтому не может выполнить указанное действие.</td></tr><tr><td>403</td><td>MESSAGE_DELETE_FORBIDDEN</td><td>Одно из сообщений, которые вы пытались удалить, удалить нельзя: скорее всего, это сервисное сообщение.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
