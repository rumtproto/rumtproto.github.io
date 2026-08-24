---
title: "chat"
original: "https://core.telegram.org/constructor/chat"
section: ref
kind: constructor
description: "Информация о группе."
layout: layout.njk
---

# chat

Информация о группе.

При обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

См. [здесь »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L5679) реализацию логики, которую следует применять при обновлении [локальной базы чатов-пиров](/api/peers/).

```
chat#41cbf256 flags:# creator:flags.0?true left:flags.2?true deactivated:flags.5?true call_active:flags.23?true call_not_empty:flags.24?true noforwards:flags.25?true id:long title:string photo:ChatPhoto participants_count:int date:int version:int migrated_to:flags.6?InputChannel admin_rights:flags.14?ChatAdminRights default_banned_rights:flags.18?ChatBannedRights = Chat;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли текущий пользователь создателем группы</td></tr><tr><td><strong>left</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Покинул ли текущий пользователь группу</td></tr><tr><td><strong>deactivated</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Была ли группа <a href="/api/channel">мигрирована</a></td></tr><tr><td><strong>call_active</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.23?<a href="/constructor/true">true</a></td><td>Идёт ли сейчас групповой звонок</td></tr><tr><td><strong>call_not_empty</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.24?<a href="/constructor/true">true</a></td><td>Есть ли кто-нибудь в групповом звонке</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.25?<a href="/constructor/true">true</a></td><td>Является ли эта группа <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">защищённой</a>, из-за чего пересылка сообщений оттуда запрещена</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор группы; подробнее о доступном диапазоне идентификаторов см. <a href="/api/peers#peer-id">здесь »</a>.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/ChatPhoto">ChatPhoto</a></td><td>Фотография чата</td></tr><tr><td><strong>participants_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество участников</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата создания группы</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Используется в обычных группах, чтобы упорядочить обновления и убедиться, что все они были получены.</td></tr><tr><td><strong>migrated_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/InputChannel">InputChannel</a></td><td>Означает, что этот чат был <a href="/api/channel">преобразован</a> в супергруппу</td></tr><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/ChatAdminRights">ChatAdminRights</a></td><td><a href="/api/rights">Права администратора</a>, которыми пользователь обладает в группе</td></tr><tr><td><strong>default_banned_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/ChatBannedRights">ChatBannedRights</a></td><td><a href="/api/rights">Права по умолчанию для заблокированных пользователей</a> для всех участников группы</td></tr></tbody></table>

### Тип

[Chat](/type/Chat/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.

#### [Права администраторов, ограничения и права по умолчанию](/api/rights/)

Как работать с правами администраторов, детальными ограничениями и общими правами в каналах, группах и супергруппах.
