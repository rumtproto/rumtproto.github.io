---
title: "updateChannel"
original: "https://core.telegram.org/constructor/updateChannel"
section: ref
kind: constructor
description: "Информация о канале или супергруппе (channel и/или channelFull) была обновлена."
layout: layout.njk
---

# updateChannel

Информация о канале или супергруппе ([channel](/constructor/channel/) и/или [channelFull](/constructor/channelFull/)) была обновлена.

Это обновление можно получить только через getDifference либо в конструкторах [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/), поэтому оно **всегда** приходит вместе с обновлёнными данными [channel](/constructor/channel/), которые следует применить [обычным образом »](/api/peers/), **без** повторного запроса сведений вручную.

Однако полные сведения о пире в обновлениях не передаются, поэтому при получении этого обновления кеш полных сведений о пире ([channelFull](/constructor/channelFull/)) для `channel_id` необходимо считать недействительным.

```
updateChannel#635b4c09 channel_id:long = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [channel](/constructor/channel/)

Информация о канале или супергруппе

При обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

[@term:min] Единственное исключение из приведённого выше правила — установленный флаг `min`: в этом случае поверх локально сохранённой версии обязаны применяться **только** следующие поля:

-   `title`
-   `megagroup`
-   `color`
-   `photo`
-   `username`
-   `usernames`
-   `has_geo`
-   `noforwards`
-   `emoji_status`
-   `has_link`
-   `slow_mode_enabled`
-   `scam`
-   `fake`
-   `gigagroup`
-   `forum`
-   `level`
-   `restricted`
-   `restriction_reason`
-   `join_to_send`
-   `join_request`
-   `is_verified`
-   `default_banned_rights`
-   `signature_profiles`
-   `autotranslation`
-   `broadcast_messages_allowed`
-   [@term:monoforum] `monoforum`
-   `forum_tabs`
-   `linked_monoforum_id`
-   `send_paid_messages_stars`
-   `bot_verification_icon`

См. [здесь »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L9176) реализацию логики, которую следует применять при обновлении [локальной базы пиров-каналов](/api/peers/).

#### [channelFull](/constructor/channelFull/)

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [Updates](/constructor/updates/)

Полный конструктор обновлений

#### [updatesCombined](/constructor/updatesCombined/)

Конструктор для группы обновлений.

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.
