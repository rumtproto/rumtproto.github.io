---
title: "chatAdminRights"
original: "https://core.telegram.org/constructor/chatAdminRights"
section: ref
kind: constructor
description: "Представляет права администратора в канале или супергруппе."
layout: layout.njk
---

# chatAdminRights

Представляет права администратора в [канале или супергруппе](/api/channel/).

```
chatAdminRights#5fb224d5 flags:# change_info:flags.0?true post_messages:flags.1?true edit_messages:flags.2?true delete_messages:flags.3?true ban_users:flags.4?true invite_users:flags.5?true pin_messages:flags.7?true add_admins:flags.9?true anonymous:flags.10?true manage_call:flags.11?true other:flags.12?true manage_topics:flags.13?true post_stories:flags.14?true edit_stories:flags.15?true delete_stories:flags.16?true manage_direct_messages:flags.17?true manage_ranks:flags.18?true = ChatAdminRights;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>change_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору изменять описание <a href="/api/channel">канала или супергруппы</a></td></tr><tr><td><strong>post_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору публиковать сообщения в <a href="/api/channel">канале</a></td></tr><tr><td><strong>edit_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору редактировать в <a href="/api/channel">канале</a> в том числе сообщения других администраторов</td></tr><tr><td><strong>delete_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору удалять в <a href="/api/channel">канале</a> в том числе сообщения других администраторов</td></tr><tr><td><strong>ban_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору блокировать пользователей в <a href="/api/channel">канале или супергруппе</a></td></tr><tr><td><strong>invite_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору приглашать пользователей в <a href="/api/channel">канал или супергруппу</a></td></tr><tr><td><strong>pin_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору закреплять сообщения в <a href="/api/channel">канале или супергруппе</a></td></tr><tr><td><strong>add_admins</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору назначать других администраторов с такими же (или более ограниченными) правами в <a href="/api/channel">канале или супергруппе</a></td></tr><tr><td><strong>anonymous</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Является ли этот администратор анонимным</td></tr><tr><td><strong>manage_call</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору создавать <a href="/api/group-calls#video-chats-livestreams">видеочаты и трансляции »</a> и управлять ими</td></tr><tr><td><strong>other</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если ни один из остальных флагов не задан, но вы всё же хотите сделать пользователя администратором: если задан этот или любой из остальных флагов, администратор может получать <a href="/api/recent-actions">журнал администратора</a> чата, <a href="/api/stats">статистику чата</a>, <a href="/api/stats">статистику сообщений в каналах</a> и список участников канала, видеть анонимных администраторов в супергруппах и не подчиняться медленному режиму.</td></tr><tr><td><strong>manage_topics</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору создавать, удалять и изменять <a href="/api/forum#forum-topics">темы форума »</a>.</td></tr><tr><td><strong>post_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору публиковать <a href="/api/stories">истории</a> от имени <a href="/api/channel">канала</a>.</td></tr><tr><td><strong>edit_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору редактировать <a href="/api/stories">истории</a>, опубликованные другими администраторами <a href="/api/channel">канала</a>.</td></tr><tr><td><strong>delete_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору удалять <a href="/api/stories">истории</a>, опубликованные другими администраторами <a href="/api/channel">канала</a>.</td></tr><tr><td><strong>manage_direct_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору управлять <a href="/api/monoforum">монофорумом личных сообщений »</a> и <a href="/api/suggested-posts">отклонять предлагаемые посты »</a>.</td></tr><tr><td><strong>manage_ranks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/constructor/true">true</a></td><td>Если установлено, позволяет администратору изменять <a href="/api/rank">метку участника »</a> любого пользователя.</td></tr></tbody></table>

### Тип

[ChatAdminRights](/type/ChatAdminRights/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [Журнал действий администраторов](/api/recent-actions/)

И супергруппы, и каналы предоставляют так называемый журнал администратора — журнал недавних значимых действий в супергруппе и канале: изменение настроек или информации группы/канала от имени администратора, исключения и блокировки пользователей и многое другое.

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Предлагаемые посты](/api/suggested-posts/)

Telegram предлагает администраторам каналов мощный инструмент монетизации — предлагаемые посты.

#### [Звание](/api/rank/)

Участники групповых чатов (как обычных групп, так и супергрупп) могут добавить рядом со своим именем тег — чтобы указать свою роль на работе, что они изучают в учебном заведении и прочее.
