---
title: "channels.updateUsername"
original: "https://core.telegram.org/method/channels.updateUsername"
section: ref
kind: method
description: "Изменить или удалить имя пользователя супергруппы или канала"
layout: layout.njk
---

# channels.updateUsername

Изменить или удалить имя пользователя супергруппы или канала

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.updateUsername#3514b3de channel:InputChannel username:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Канал</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Новое имя пользователя; передайте пустую строку, чтобы удалить имя пользователя</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_ADMIN_PUBLIC_TOO_MUCH</td><td>Вы администратор слишком многих публичных каналов; сделайте часть каналов закрытыми, чтобы изменить имя пользователя этого канала.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>Информация о чате не изменена, потому что переданные вами новые данные совпадают с текущими.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>Указанное имя пользователя недействительно.</td></tr><tr><td>400</td><td>USERNAME_NOT_MODIFIED</td><td>Имя пользователя не было изменено.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>Указанное имя пользователя уже занято.</td></tr><tr><td>400</td><td>USERNAME_PURCHASE_AVAILABLE</td><td>Указанное имя пользователя можно приобрести на <a href="https://fragment.com">https://fragment.com</a>.</td></tr></tbody></table>
