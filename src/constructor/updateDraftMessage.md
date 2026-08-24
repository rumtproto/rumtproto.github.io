---
title: "updateDraftMessage"
original: "https://core.telegram.org/constructor/updateDraftMessage"
section: ref
kind: constructor
description: "Сообщает об изменении черновика сообщения."
layout: layout.njk
---

# updateDraftMessage

Сообщает об изменении [черновика](/api/drafts/) сообщения.

```
updateDraftMessage#edfc111e flags:# peer:Peer top_msg_id:flags.0?int saved_peer_id:flags.1?Peer draft:DraftMessage = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, с которым связан черновик</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Идентификатор <a href="/api/forum#forum-topics">темы форума</a>, с которой связан черновик</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Peer">Peer</a></td><td>Если установлено, черновик относится к указанному <a href="/api/monoforum">идентификатору темы монофорума »</a>.</td></tr><tr><td><strong>draft</strong></td><td style="text-align: center;"><a href="/type/DraftMessage">DraftMessage</a></td><td>Черновик</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Черновики сообщений](/api/drafts/)

Как работать с черновиками сообщений
