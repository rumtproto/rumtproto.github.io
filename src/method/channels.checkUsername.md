---
title: "channels.checkUsername"
original: "https://core.telegram.org/method/channels.checkUsername"
section: ref
kind: method
description: "Проверить, свободно ли имя пользователя и можно ли назначить его каналу или супергруппе"
layout: layout.njk
---

# channels.checkUsername

Проверить, свободно ли имя пользователя и можно ли назначить его каналу или супергруппе

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.checkUsername#10e6bd2c channel:InputChannel username:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/channel">Канал или супергруппа</a>, которой будет назначено указанное имя пользователя</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя пользователя, которое нужно проверить</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_ADMIN_PUBLIC_TOO_MUCH</td><td>Вы администратор слишком многих публичных каналов; сделайте часть каналов закрытыми, чтобы изменить имя пользователя этого канала.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>Указанное имя пользователя недействительно.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>Указанное имя пользователя уже занято.</td></tr><tr><td>400</td><td>USERNAME_PURCHASE_AVAILABLE</td><td>Указанное имя пользователя можно приобрести на <a href="https://fragment.com">https://fragment.com</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
