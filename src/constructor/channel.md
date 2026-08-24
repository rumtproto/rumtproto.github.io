---
title: "channel"
original: "https://core.telegram.org/constructor/channel"
section: ref
kind: constructor
description: "Информация о канале или супергруппе"
layout: layout.njk
---

# channel

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

```
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли текущий пользователь создателем этого канала</td></tr><tr><td><strong>left</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Покинул ли текущий пользователь этот канал или не является его участником</td></tr><tr><td><strong>broadcast</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Является ли это каналом?</td></tr><tr><td><strong>verified</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Верифицирован ли этот канал Telegram?</td></tr><tr><td><strong>megagroup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Является ли это супергруппой?<br>При изменении этого флага следует признать недействительным локальный кеш <a href="/constructor/channelFull">channelFull</a> для этого идентификатора канала или супергруппы, подробнее см. <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>restricted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Ограничены ли просмотр и запись в этом канале по некоторой причине (см. <code>restriction_reason</code>)</td></tr><tr><td><strong>signatures</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Включены ли подписи авторов (каналы)</td></tr><tr><td><strong>min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td>См. <a href="/api/min">min</a></td></tr><tr><td><strong>scam</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/constructor/true">true</a></td><td>Этот канал или супергруппа, вероятно, мошеннические<br>При изменении этого флага следует сбросить локальный кеш <a href="/constructor/channelFull">channelFull</a> для идентификатора этого канала или супергруппы, подробнее <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>has_link</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.20?<a href="/constructor/true">true</a></td><td>Есть ли у этого канала связанная <a href="/api/discussion">группа обсуждения »</a> (или является ли эта супергруппа группой обсуждения канала). Сам идентификатор связанного канала или супергруппы содержится в <a href="/constructor/channelFull">channelFull</a>.<code>linked_chat_id</code>.<br>При изменении этого флага следует сбросить локальный кеш <a href="/constructor/channelFull">channelFull</a> для этого идентификатора канала или супергруппы, подробнее см. <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>has_geo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/constructor/true">true</a></td><td>Есть ли у этого канала геопозиция</td></tr><tr><td><strong>slowmode_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.22?<a href="/constructor/true">true</a></td><td>Включён ли в группах медленный режим для предотвращения флуда в чате.<br>При изменении этого флага следует сбросить локальный кеш <a href="/constructor/channelFull">channelFull</a> для этого идентификатора канала или супергруппы, подробнее см. <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>call_active</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.23?<a href="/constructor/true">true</a></td><td>Идёт ли сейчас групповой звонок или трансляция</td></tr><tr><td><strong>call_not_empty</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.24?<a href="/constructor/true">true</a></td><td>Есть ли кто-нибудь в групповом звонке или трансляции</td></tr><tr><td><strong>fake</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.25?<a href="/constructor/true">true</a></td><td>Если установлено, многие пользователи пожаловались на этот <a href="/api/channel">канал или супергруппу</a> как на поддельный или мошеннический: будьте осторожны при взаимодействии с ним.<br>При изменении этого флага следует сбросить локальный кеш <a href="/constructor/channelFull">channelFull</a> для этого идентификатора канала или супергруппы, подробнее см. <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>gigagroup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.26?<a href="/constructor/true">true</a></td><td>Является ли эта <a href="/api/channel">супергруппа</a> гигагруппой<br>При изменении этого флага следует сбросить локальный кеш <a href="/constructor/channelFull">channelFull</a> для этого идентификатора канала или супергруппы, подробнее см. <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.27?<a href="/constructor/true">true</a></td><td>Является ли этот канал или группа <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">защищённым</a>, из-за чего пересылка сообщений оттуда запрещена</td></tr><tr><td><strong>join_to_send</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.28?<a href="/constructor/true">true</a></td><td>Обязан ли пользователь вступить в супергруппу, прежде чем он сможет отправлять сообщения: может быть false только для <a href="/api/discussion">групп обсуждения »</a>, переключается с помощью <a href="/method/channels.toggleJoinToSend">channels.toggleJoinToSend</a><br>При изменении этого флага следует признать недействительным локальный кеш <a href="/constructor/channelFull">channelFull</a> для этого идентификатора канала или супергруппы, подробнее см. <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>join_request</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.29?<a href="/constructor/true">true</a></td><td>Должна ли заявка пользователя на вступление <a href="/api/invites#join-requests">одобряться администраторами</a>, переключается с помощью <a href="/method/channels.toggleJoinRequest">channels.toggleJoinToSend</a><br>При изменении этого флага следует признать недействительным локальный кеш <a href="/constructor/channelFull">channelFull</a> для этого идентификатора канала или супергруппы, подробнее см. <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>forum</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.30?<a href="/constructor/true">true</a></td><td>Является ли эта супергруппа <a href="/api/forum">форумом</a>.<br>При изменении этого флага следует сбросить локальный кеш <a href="/constructor/channelFull">channelFull</a> для этого идентификатора канала или супергруппы, подробнее см. <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>flags2</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>stories_hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.1?<a href="/constructor/true">true</a></td><td><a href="/api/stories#hiding-stories-of-other-users">Скрыли ли мы все истории, опубликованные этим каналом »</a>.</td></tr><tr><td><strong>stories_hidden_min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что флаг <code>stories_hidden</code> не был заполнен и на его значение нельзя полагаться; используйте ранее закешированное значение либо повторно запросите конструктор с помощью <a href="/method/channels.getChannels">channels.getChannels</a>, чтобы получить актуальное значение флага <code>stories_hidden</code>.</td></tr><tr><td><strong>stories_unavailable</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.3?<a href="/constructor/true">true</a></td><td>Ни одна история этого канала не видна.</td></tr><tr><td><strong>signature_profiles</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.12?<a href="/constructor/true">true</a></td><td>Если установлено, сообщения, отправленные администраторами в этот канал, будут вести на профиль администратора (как и в группах).</td></tr><tr><td><strong>autotranslation</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.15?<a href="/constructor/true">true</a></td><td>Если установлено, администратор канала включил <a href="/api/translation#autotranslation-for-channels">автоперевод</a> для всех пользователей, как описано <a href="/api/translation#autotranslation-for-channels">здесь »</a>.</td></tr><tr><td><strong>broadcast_messages_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.16?<a href="/constructor/true">true</a></td><td>Если установлено, с этим каналом связан <a href="/api/monoforum">монофорум »</a>, и его идентификатор указан во флаге <code>linked_monoforum_id</code>.</td></tr><tr><td><strong>monoforum</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.17?<a href="/constructor/true">true</a></td><td>Если установлено, это <a href="/api/monoforum">монофорум »</a>, и идентификатор связанного канала указан в <code>linked_monoforum_id</code>.</td></tr><tr><td><strong>forum_tabs</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.19?<a href="/constructor/true">true</a></td><td><a href="/api/forum#tabbed-or-list-based-forum-ui">Если установлено, включает интерфейс форума со вкладками »</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала; подробнее о доступном диапазоне идентификаторов см. <a href="/api/peers#peer-id">здесь »</a>.</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа, подробнее см. <a href="/api/peers#access-hash">здесь »</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/string">string</a></td><td>Основное активное имя пользователя.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/ChatPhoto">ChatPhoto</a></td><td>Фотография профиля</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата вступления пользователя в супергруппу или канал, а если пользователь не является участником — дата их создания</td></tr><tr><td><strong>restriction_reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/RestrictionReason">RestrictionReason</a>&gt;</td><td>Содержит причину, по которой доступ к этому каналу должен быть ограничен.<br>Изменение этого флага должно делать недействительным локальный кеш <a href="/constructor/channelFull">channelFull</a> для идентификатора этого канала или супергруппы; подробнее см. <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/ChatAdminRights">ChatAdminRights</a></td><td>Права администратора у этого пользователя в данном канале (см. <a href="/api/rights">права</a>)</td></tr><tr><td><strong>banned_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/ChatBannedRights">ChatBannedRights</a></td><td>Ограниченные права пользователя в этом канале (см. <a href="/api/rights">права</a>)</td></tr><tr><td><strong>default_banned_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/ChatBannedRights">ChatBannedRights</a></td><td>Права в чате по умолчанию (см. <a href="/api/rights">права</a>)</td></tr><tr><td><strong>participants_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/int">int</a></td><td>Количество участников</td></tr><tr><td><strong>usernames</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Username">Username</a>&gt;</td><td>Дополнительные имена пользователя</td></tr><tr><td><strong>stories_max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.4?<a href="/type/RecentStory">RecentStory</a></td><td>Сводка <a href="/api/stories#recent-story-summaries">активных историй »</a> канала или супергруппы.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.7?<a href="/type/PeerColor">PeerColor</a></td><td><a href="/api/colors">Акцентный цвет</a> канала.</td></tr><tr><td><strong>profile_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.8?<a href="/type/PeerColor">PeerColor</a></td><td><a href="/api/colors">Цвет профиля</a> канала.</td></tr><tr><td><strong>emoji_status</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.9?<a href="/type/EmojiStatus">EmojiStatus</a></td><td><a href="/api/emoji-status">Эмодзи-статус</a></td></tr><tr><td><strong>level</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.10?<a href="/type/int">int</a></td><td><a href="/api/boost">Уровень бустов</a>.<br>При изменении этого флага следует сбросить локальный кеш <a href="/constructor/channelFull">channelFull</a> для этого идентификатора канала или супергруппы, подробнее см. <a href="/api/peers#full-info-database">здесь »</a>.</td></tr><tr><td><strong>subscription_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.11?<a href="/type/int">int</a></td><td>Дата истечения <a href="/api/stars#star-subscriptions">подписки за Telegram Stars »</a>, купленной текущим пользователем для получения доступа к этому каналу.</td></tr><tr><td><strong>bot_verification_icon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.13?<a href="/type/long">long</a></td><td>Описывает <a href="/api/bots/verification">значок верификации бота »</a>.</td></tr><tr><td><strong>send_paid_messages_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.14?<a href="/type/long">long</a></td><td>Если установлено, в этой супергруппе или <a href="/api/monoforum">монофоруме</a> включены <a href="/api/paid-messages">платные сообщения »</a>, и нам <em>может</em> потребоваться заплатить указанное количество <a href="/api/stars">Stars</a> за отправку в них сообщений — в зависимости от настроенных исключений: проверьте <a href="/constructor/channelFull">channelFull</a>.<code>send_paid_messages_stars</code>, чтобы понять, должен ли текущий пользователь платить на самом деле; полное описание процесса см. <a href="/api/paid-messages">здесь »</a> (задаётся только для монофорума, но не для связанного с ним канала).</td></tr><tr><td><strong>linked_monoforum_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.18?<a href="/type/long">long</a></td><td>Для каналов со связанными <a href="/api/monoforum">монофорумами</a> — идентификатор <a href="/api/monoforum">монофорума</a>. Для <a href="/api/monoforum">монофорумов</a> — идентификатор связанного канала.</td></tr></tbody></table>

### Тип

[Chat](/type/Chat/)

### Связанные страницы

#### [channelFull](/constructor/channelFull/)

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.

#### [Конструкторы min](/api/min/)

В некоторых случаях в конструкторах пользователя и канала присутствует сокращённый набор полей (хотя id есть всегда) и установлен флаг min.

#### [Группы обсуждения](/api/discussion/)

Группы можно связать с каналом в качестве группы обсуждения, чтобы пользователи могли обсуждать посты.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [channels.toggleJoinToSend](/method/channels.toggleJoinToSend/)

Задать, должны ли все пользователи [вступать в группу обсуждения, чтобы комментировать пост »](/api/discussion/#requiring-users-to-join-the-group)

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.

#### [channels.toggleJoinRequest](/method/channels.toggleJoinRequest/)

Задать, должны ли все пользователи [запрашивать одобрение администратора для вступления в группу »](/api/invites/#join-requests).

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [channels.getChannels](/method/channels.getChannels/)

Получить информацию о [каналах и супергруппах](/api/channel/)

#### [Перевод сообщений](/api/translation/)

Telegram позволяет переводить сообщения в чатах: пользователи Telegram Premium могут даже включить перевод чата в реальном времени.

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Права администраторов, ограничения и права по умолчанию](/api/rights/)

Как работать с правами администраторов, детальными ограничениями и общими правами в каналах, группах и супергруппах.

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Сторонняя верификация](/api/bots/verification/)

Чтобы ещё повысить прозрачность в Telegram, официальные сторонние сервисы могут присваивать аккаунтам пользователей и чатам дополнительные значки верификации — чтобы предотвратить мошенничество и снизить распространение недостоверной информации.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.
