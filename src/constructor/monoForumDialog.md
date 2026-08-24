---
title: "monoForumDialog"
original: "https://core.telegram.org/constructor/monoForumDialog"
section: ref
kind: constructor
description: "Представляет тему монофорума »."
layout: layout.njk
---

# monoForumDialog

Представляет [тему монофорума »](/api/monoforum/).

```
monoForumDialog#64407ea7 flags:# unread_mark:flags.3?true nopaid_messages_exception:flags.4?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_reactions_count:int draft:flags.1?DraftMessage = SavedDialog;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>unread_mark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Есть ли у этой темы форума отметка о непрочитанности, выставленная вручную (методом <a href="/method/messages.markDialogUnread">messages.markDialogUnread</a>).</td></tr><tr><td><strong>nopaid_messages_exception</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Если установлено, администратор освободил этого пира от платы за отправку сообщений с помощью <a href="/method/account.toggleNoPaidMessagesException">account.toggleNoPaidMessagesException</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, связанный с темой, он же идентификатор темы.</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор последнего сообщения</td></tr><tr><td><strong>read_inbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция, до которой прочитаны все входящие сообщения.</td></tr><tr><td><strong>read_outbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция, до которой прочитаны все исходящие сообщения.</td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных сообщений.</td></tr><tr><td><strong>unread_reactions_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных реакций.</td></tr><tr><td><strong>draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/DraftMessage">DraftMessage</a></td><td>Ожидающий <a href="/api/drafts">черновик</a> сообщения.</td></tr></tbody></table>

### Тип

[SavedDialog](/type/SavedDialog/)

### Связанные страницы

#### [messages.markDialogUnread](/method/messages.markDialogUnread/)

Вручную отметить диалог как непрочитанный

#### [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/)

Разрешить пользователю отправлять нам сообщения без оплаты, если включены [платные сообщения »](/api/paid-messages/).

#### [Черновики сообщений](/api/drafts/)

Как работать с черновиками сообщений

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.
