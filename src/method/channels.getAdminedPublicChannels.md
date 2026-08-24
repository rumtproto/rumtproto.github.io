---
title: "channels.getAdminedPublicChannels"
original: "https://core.telegram.org/method/channels.getAdminedPublicChannels"
section: ref
kind: method
description: "Получить каналы, супергруппы и геогруппы, в которых мы являемся администратором. Обычно вызывается, когда пользователь превышает ограничение на число принадлежащих ему публичных…"
layout: layout.njk
---

# channels.getAdminedPublicChannels

Получить [каналы, супергруппы и геогруппы](/api/channel/), в которых мы являемся администратором. Обычно вызывается, когда пользователь превышает [ограничение](/constructor/config/) на число принадлежащих ему публичных [каналов, супергрупп и геогрупп](/api/channel/) и ему предлагается удалить один из его каналов, супергрупп или геогрупп.

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getAdminedPublicChannels#f8b036af flags:# by_location:flags.0?true check_limit:flags.1?true for_personal:flags.2?true = messages.Chats;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>by_location</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Получить геогруппы</td></tr><tr><td><strong>check_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено и пользователь достиг предела числа принадлежащих ему публичных <a href="/api/channel">каналов, супергрупп и геогрупп</a>, вместо списка каналов будет возвращена одна из указанных <a href="#possible-errors">ошибок</a>.<br>Удобно, чтобы проверить, действительно ли можно создать новый публичный канал, ещё до того, как просить пользователя ввести имя пользователя канала для <a href="/method/channels.checkUsername">channels.checkUsername</a> и <a href="/method/channels.updateUsername">channels.updateUsername</a>.</td></tr><tr><td><strong>for_personal</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы получить только полный список каналов, которые можно передать в <a href="/method/account.updatePersonalChannel">account.updatePersonalChannel</a>, чтобы <a href="/api/profile#personal-channel">показать их на странице нашего профиля</a>.</td></tr></tbody></table>

### Результат

[messages.Chats](/type/messages.Chats/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_ADMIN_LOCATED_TOO_MUCH</td><td>Пользователь достиг предела числа публичных геогрупп.</td></tr><tr><td>400</td><td>CHANNELS_ADMIN_PUBLIC_TOO_MUCH</td><td>Вы администратор слишком многих публичных каналов; сделайте часть каналов закрытыми, чтобы изменить имя пользователя этого канала.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [channels.checkUsername](/method/channels.checkUsername/)

Проверить, свободно ли имя пользователя и можно ли назначить его каналу или супергруппе

#### [channels.updateUsername](/method/channels.updateUsername/)

Изменить или удалить имя пользователя супергруппы или канала

#### [account.updatePersonalChannel](/method/account.updatePersonalChannel/)

Привязать (или отвязать) личный [канал »](/api/channel/), который будет показан на нашей личной [странице профиля »](/api/profile/#personal-channel).

Его изменение вызовет отправку обновления [updateUser](/constructor/updateUser/).

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!

#### [config](/constructor/config/)

Текущая конфигурация
