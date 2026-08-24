---
title: "channels.toggleUsername"
original: "https://core.telegram.org/method/channels.toggleUsername"
section: ref
kind: method
description: "Активировать или деактивировать купленное на fragment.com имя пользователя, связанное с принадлежащими нам супергруппой или каналом."
layout: layout.njk
---

# channels.toggleUsername

Активировать или деактивировать купленное на [fragment.com](https://fragment.com) имя пользователя, связанное с принадлежащими нам [супергруппой или каналом](/api/channel/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.toggleUsername#50f24105 channel:InputChannel username:string active:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/channel">Супергруппа или канал</a></td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя пользователя</td></tr><tr><td><strong>active</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Активировать или деактивировать имя пользователя</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>Информация о чате не изменена, потому что переданные вами новые данные совпадают с текущими.</td></tr><tr><td>400</td><td>USERNAMES_ACTIVE_TOO_MUCH</td><td>Достигнуто максимальное количество активных имён пользователя.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>Указанное имя пользователя недействительно.</td></tr><tr><td>400</td><td>USERNAME_NOT_MODIFIED</td><td>Имя пользователя не было изменено.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
