---
title: "messageActionPaidMessagesPrice"
original: "https://core.telegram.org/constructor/messageActionPaidMessagesPrice"
section: ref
kind: constructor
description: "Цена платных сообщений » в этом чате была изменена."
layout: layout.njk
---

# messageActionPaidMessagesPrice

Цена [платных сообщений »](/api/paid-messages/) в этом чате была изменена.

```
messageActionPaidMessagesPrice#84b88578 flags:# broadcast_messages_allowed:flags.0?true stars:long = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>broadcast_messages_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Может быть указано только для каналов; если установлено, означает, что <a href="/api/monoforum">личные сообщения включены »</a>, иначе — что личные сообщения отключены; цена платных сообщений связана с ценой личных сообщений (то есть сообщений, отправляемых в связанный <a href="/api/monoforum">монофорум</a>).</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Новая цена в <a href="/api/stars">Telegram Stars</a>; может быть равна <code>0</code>, если сообщения теперь бесплатны.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.
