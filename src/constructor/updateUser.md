---
title: "updateUser"
original: "https://core.telegram.org/constructor/updateUser"
section: ref
kind: constructor
description: "Информация о пользователе (user и/или userFull) была обновлена."
layout: layout.njk
---

# updateUser

Информация о пользователе ([user](/constructor/user/) и/или [userFull](/constructor/userFull/)) была обновлена.

Это обновление можно получить только через getDifference либо в конструкторах [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/), поэтому оно **всегда** приходит вместе с обновлёнными данными [user](/constructor/user/), которые следует применить [обычным образом »](/api/peers/), **без** повторного запроса сведений вручную.

Однако полные сведения о пире в обновлениях не передаются, поэтому при получении этого обновления кеш полных сведений о пире ([userFull](/constructor/userFull/)) для `user_id` необходимо считать недействительным.

```
updateUser#20529438 user_id:long = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [user](/constructor/user/)

Содержит сведения об определённом пользователе.

Если не указано иное, при обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

См. [здесь »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) реализацию логики, которую следует применять при обновлении [локальной базы пиров-пользователей](/api/peers/).

#### [userFull](/constructor/userFull/)

Расширенные сведения о пользователе

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [Updates](/constructor/updates/)

Полный конструктор обновлений

#### [updatesCombined](/constructor/updatesCombined/)

Конструктор для группы обновлений.

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.
