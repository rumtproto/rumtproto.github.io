---
title: "updateChat"
original: "https://core.telegram.org/constructor/updateChat"
section: ref
kind: constructor
description: "Информация о чате (chat и/или chatFull) была обновлена."
layout: layout.njk
---

# updateChat

Информация о чате ([chat](/constructor/chat/) и/или [chatFull](/constructor/chatFull/)) была обновлена.

Это обновление можно получить только через getDifference либо в конструкторах [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/), поэтому оно **всегда** приходит вместе с обновлёнными данными [chat](/constructor/chat/), которые следует применить [обычным образом »](/api/peers/), **без** повторного запроса сведений вручную.

Однако полные сведения о пире в обновлениях не передаются, поэтому при получении этого обновления кеш полных сведений о пире ([chatFull](/constructor/chatFull/)) для `chat_id` необходимо считать недействительным.

```
updateChat#f89a6a4e chat_id:long = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор чата</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [chat](/constructor/chat/)

Информация о группе.

При обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

См. [здесь »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L5679) реализацию логики, которую следует применять при обновлении [локальной базы чатов-пиров](/api/peers/).

#### [chatFull](/constructor/chatFull/)

Полная информация об [обычной группе](/api/channel/#basic-groups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [Updates](/constructor/updates/)

Полный конструктор обновлений

#### [updatesCombined](/constructor/updatesCombined/)

Конструктор для группы обновлений.

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.
