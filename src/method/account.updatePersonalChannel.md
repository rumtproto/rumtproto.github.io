---
title: "account.updatePersonalChannel"
original: "https://core.telegram.org/method/account.updatePersonalChannel"
section: ref
kind: method
description: "Привязать (или отвязать) личный канал », который будет показан на нашей личной странице профиля »."
layout: layout.njk
---

# account.updatePersonalChannel

Привязать (или отвязать) личный [канал »](/api/channel/), который будет показан на нашей личной [странице профиля »](/api/profile/#personal-channel).

Его изменение вызовет отправку обновления [updateUser](/constructor/updateUser/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updatePersonalChannel#d94305e0 channel:InputChannel = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Канал; передайте <a href="/constructor/inputChannelEmpty">inputChannelEmpty</a>, чтобы удалить его.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PUBLIC_BROADCAST_EXPECTED</td><td><code>channel</code> принимает только канал, но была передана супергруппа.</td></tr></tbody></table>

### Связанные страницы

#### [inputChannelEmpty](/constructor/inputChannelEmpty/)

Представляет отсутствие канала

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!

#### [updateUser](/constructor/updateUser/)

Информация о пользователе ([user](/constructor/user/) и/или [userFull](/constructor/userFull/)) была обновлена.

Это обновление можно получить только через getDifference либо в конструкторах [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/), поэтому оно **всегда** приходит вместе с обновлёнными данными [user](/constructor/user/), которые следует применить [обычным образом »](/api/peers/), **без** повторного запроса сведений вручную.

Однако полные сведения о пире в обновлениях не передаются, поэтому при получении этого обновления кеш полных сведений о пире ([userFull](/constructor/userFull/)) для `user_id` необходимо считать недействительным.
