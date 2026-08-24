---
title: "forumTopic"
original: "https://core.telegram.org/constructor/forumTopic"
section: ref
kind: constructor
description: "Представляет тему форума."
layout: layout.njk
---

# forumTopic

Представляет [тему форума](/api/forum/#forum-topics).

```
forumTopic#cdff0eca flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>my</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Была ли тема создана текущим пользователем</td></tr><tr><td><strong>closed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Закрыта ли тема (в неё нельзя отправлять сообщения)</td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Закреплена ли тема</td></tr><tr><td><strong>short</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Является ли этот конструктор сокращённой версией полной информации о теме.<br>Если установлено, достоверные сведения содержатся только в параметрах <code>my</code>, <code>closed</code>, <code>id</code>, <code>date</code>, <code>title</code>, <code>icon_color</code>, <code>icon_emoji_id</code> и <code>from_id</code>.<br>Сокращённая информация обычно возвращается только в <a href="/api/recent-actions">событиях журнала администратора »</a>, связанных с темами, и в конструкторе <a href="/constructor/messages.channelMessages">messages.channelMessages</a>: при необходимости полную информацию можно получить с помощью <a href="/method/messages.getForumTopicsByID">messages.getForumTopicsByID</a>.</td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Скрыта ли тема (допустимо только для темы «General», <code>id=1</code>)</td></tr><tr><td><strong>title_missing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Если установлено, у темы нет заданного пользователем названия; флаг может быть установлен только для персональных тем <a href="/api/forum#bot-forums">форумов ботов</a>; если это поле установлено, боту, скорее всего, следует изменить название темы.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/forum#forum-topics">Идентификатор темы</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата создания темы</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Содержит супергруппу или личный чат, где находится тема.<br>Это поле особенно полезно, когда данный объект возвращается такими методами, как <a href="/method/messages.getMessages">messages.getMessages</a>, которые могут вернуть сообщения и темы форума, принадлежащие разным пирам (личным чатам), в рамках одного вызова, из-за чего невозможно определить пир темы по параметрам вызова или по окружающему контексту.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название темы</td></tr><tr><td><strong>icon_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Если значок из пользовательского эмодзи не указан, задаёт цвет запасного значка темы (RGB) — один из <code>0x6FB9F0</code>, <code>0xFFD67E</code>, <code>0xCB86DB</code>, <code>0x8EEE98</code>, <code>0xFF93B2</code> или <code>0xFB6F5F</code>.</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Идентификатор <a href="/api/custom-emoji">пользовательского эмодзи</a>, используемого как значок темы.</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор последнего сообщения, отправленного в эту тему</td></tr><tr><td><strong>read_inbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция, до которой прочитаны все входящие сообщения.</td></tr><tr><td><strong>read_outbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция, до которой прочитаны все исходящие сообщения.</td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных сообщений</td></tr><tr><td><strong>unread_mentions_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество <a href="/api/mentions">непрочитанных упоминаний</a></td></tr><tr><td><strong>unread_reactions_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных реакций на отправленные вами сообщения</td></tr><tr><td><strong>unread_poll_votes_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество <a href="/api/poll#unread-poll-votes">непрочитанных голосов в неанонимных опросах »</a>, принадлежащих пользователю в этой теме форума.</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Идентификатор пира, создавшего тему</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings">PeerNotifySettings</a></td><td>Настройки уведомлений</td></tr><tr><td><strong>draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/DraftMessage">DraftMessage</a></td><td><a href="/api/drafts">Черновик</a> сообщения</td></tr></tbody></table>

### Тип

[ForumTopic](/type/ForumTopic/)

### Связанные страницы

#### [Журнал действий администраторов](/api/recent-actions/)

И супергруппы, и каналы предоставляют так называемый журнал администратора — журнал недавних значимых действий в супергруппе и канале: изменение настроек или информации группы/канала от имени администратора, исключения и блокировки пользователей и многое другое.

#### [messages.channelMessages](/constructor/messages.channelMessages/)

Сообщения канала

#### [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/)

Получить темы форума по их идентификаторам

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [messages.getMessages](/method/messages.getMessages/)

Возвращает список сообщений по их идентификаторам.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Упоминания и ответы](/api/mentions/)

Telegram позволяет упоминать других пользователей по срочным утиным вопросам и быстро переходить к этим упоминаниям, чтобы прочитать их как можно скорее.

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.

#### [Черновики сообщений](/api/drafts/)

Как работать с черновиками сообщений
