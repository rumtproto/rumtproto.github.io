---
title: "dialog"
original: "https://core.telegram.org/constructor/dialog"
section: ref
kind: constructor
description: "Чат"
layout: layout.njk
---

# dialog

Чат

```
dialog#d58a08c6 flags:# pinned:flags.2?true unread_mark:flags.3?true view_forum_as_messages:flags.6?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int notify_settings:PeerNotifySettings pts:flags.0?int draft:flags.1?DraftMessage folder_id:flags.4?int ttl_period:flags.5?int = Dialog;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Закреплён ли диалог</td></tr><tr><td><strong>unread_mark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Был ли чат вручную отмечен как непрочитанный</td></tr><tr><td><strong>view_forum_as_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Пользователи также могут выбрать отображение сообщений из всех тем <a href="/api/forum">форума</a> так, как если бы они были отправлены в обычную группу, с помощью настройки «Показывать как сообщения» в локальном клиенте.<br>Эта настройка влияет только на текущий аккаунт и синхронизируется с другими активными сессиями методом <a href="/method/channels.toggleViewForumAsMessages">channels.toggleViewForumAsMessages</a>; вызов этого метода изменит значение данного флага.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Чат</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор последнего сообщения</td></tr><tr><td><strong>read_inbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция, до которой прочитаны все входящие сообщения.</td></tr><tr><td><strong>read_outbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция, до которой прочитаны все исходящие сообщения.</td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных сообщений</td></tr><tr><td><strong>unread_mentions_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество <a href="/api/mentions">непрочитанных упоминаний</a></td></tr><tr><td><strong>unread_reactions_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных реакций на отправленные вами сообщения</td></tr><tr><td><strong>unread_poll_votes_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество <a href="/api/poll#unread-poll-votes">непрочитанных голосов в неанонимных опросах »</a>, принадлежащих пользователю в этом диалоге.</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings">PeerNotifySettings</a></td><td>Настройки уведомлений</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>[@term:pts] <a href="/api/updates">PTS</a></td></tr><tr><td><strong>draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/DraftMessage">DraftMessage</a></td><td><a href="/api/drafts">Черновик</a> сообщения</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td><a href="/api/folders#peer-folders">Идентификатор папки пира, подробнее см. здесь</a></td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Время жизни всех сообщений, отправляемых в этом диалоге</td></tr></tbody></table>

### Тип

[Dialog](/type/Dialog/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/)

Пользователи также могут отображать сообщения из всех тем [форума](/api/forum/) так, как если бы они были отправлены в обычную группу, — с помощью настройки «Показывать как сообщения» в локальном клиенте: эта настройка влияет только на текущий аккаунт и синхронизируется с другими активными сессиями с помощью этого метода.

Вызов этого метода обновит значение флага `view_forum_as_messages` в [channelFull](/constructor/channelFull/) или [dialog](/constructor/dialog/) и отправит обновление [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

#### [Упоминания и ответы](/api/mentions/)

Telegram позволяет упоминать других пользователей по срочным утиным вопросам и быстро переходить к этим упоминаниям, чтобы прочитать их как можно скорее.

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Черновики сообщений](/api/drafts/)

Как работать с черновиками сообщений

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.
