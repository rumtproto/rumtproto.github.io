---
title: "updateMessageReactions"
original: "https://core.telegram.org/constructor/updateMessageReactions"
section: ref
kind: constructor
description: "Доступны новые реакции на сообщение »"
layout: layout.njk
---

# updateMessageReactions

Доступны новые [реакции на сообщение »](/api/reactions/)

```
updateMessageReactions#1e297bfa flags:# peer:Peer msg_id:int top_msg_id:flags.0?int saved_peer_id:flags.1?Peer reactions:MessageReactions = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td><a href="/api/forum#forum-topics">Идентификатор темы форума</a></td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Peer">Peer</a></td><td>Если установлено, реакции находятся в указанной <a href="/api/monoforum">теме монофорума »</a>.</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/MessageReactions">MessageReactions</a></td><td>Реакции</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
