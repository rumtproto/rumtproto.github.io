---
title: "chatFull"
original: "https://core.telegram.org/constructor/chatFull"
section: ref
kind: constructor
description: "Полная информация об обычной группе."
layout: layout.njk
---

# chatFull

Полная информация об [обычной группе](/api/channel/#basic-groups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

```
chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>can_set_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Можем ли мы изменить имя пользователя этого чата</td></tr><tr><td><strong>has_scheduled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Доступны ли <a href="/api/scheduled-messages">отложенные сообщения</a></td></tr><tr><td><strong>translations_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/constructor/true">true</a></td><td>Следует ли скрыть <a href="/api/translation">всплывающее окно перевода чата в реальном времени</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор чата</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Строка «о себе» для этого чата</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/ChatParticipants">ChatParticipants</a></td><td>Список участников</td></tr><tr><td><strong>chat_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Photo">Photo</a></td><td>Фотография чата</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings">PeerNotifySettings</a></td><td>Настройки уведомлений</td></tr><tr><td><strong>exported_invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/ExportedChatInvite">ExportedChatInvite</a></td><td>Приглашение в чат</td></tr><tr><td><strong>bot_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/BotInfo">BotInfo</a>&gt;</td><td>Информация о ботах, состоящих в этом чате</td></tr><tr><td><strong>pinned_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/int">int</a></td><td>Идентификатор последнего <a href="/api/pin">закреплённого сообщения</a></td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/int">int</a></td><td><a href="/api/folders#peer-folders">Идентификатор папки пира, подробнее см. здесь</a></td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/type/InputGroupCall">InputGroupCall</a></td><td>Активный или запланированный <a href="/api/group-calls#video-chats-livestreams">видеочат »</a>, связанный с этой обычной группой</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/int">int</a></td><td>Время жизни сообщений, отправляемых текущим пользователем в этот чат</td></tr><tr><td><strong>groupcall_default_join_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/Peer">Peer</a></td><td>Явно сохранённый пир по умолчанию, от имени которого выполняется вход в <a href="/api/group-calls#video-chats-livestreams">видеочат »</a> этой группы; если не задан, используется текущий пользователь</td></tr><tr><td><strong>theme_emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/type/string">string</a></td><td>Эмодзи, обозначающий определённую тему оформления чата</td></tr><tr><td><strong>requests_pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/int">int</a></td><td>Ожидающие рассмотрения <a href="/api/invites#join-requests">заявки на вступление »</a></td></tr><tr><td><strong>recent_requesters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Идентификаторы пользователей, недавно подавших заявку на вступление</td></tr><tr><td><strong>available_reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/ChatReactions">ChatReactions</a></td><td>Разрешённые <a href="/api/reactions">реакции на сообщения »</a></td></tr><tr><td><strong>reactions_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.20?<a href="/type/int">int</a></td><td>Этот флаг позволяет задать собственное ограничение на число уникальных реакций (то есть настраиваемый аналог <a href="/api/config#reactions-uniq-max">appConfig.reactions_uniq_max</a>).</td></tr></tbody></table>

### Тип

[ChatFull](/type/ChatFull/)

### Связанные страницы

#### [Отложенные сообщения](/api/scheduled-messages/)

Telegram позволяет планировать отправку сообщений

#### [Перевод сообщений](/api/translation/)

Telegram позволяет переводить сообщения в чатах: пользователи Telegram Premium могут даже включить перевод чата в реальном времени.

#### [Закреплённые сообщения](/api/pin/)

Telegram позволяет закреплять несколько сообщений вверху конкретного чата.

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.
