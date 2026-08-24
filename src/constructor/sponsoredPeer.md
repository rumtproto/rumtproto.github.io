---
title: "sponsoredPeer"
original: "https://core.telegram.org/constructor/sponsoredPeer"
section: ref
kind: constructor
description: "Рекламируемый пир."
layout: layout.njk
---

# sponsoredPeer

Рекламируемый пир.

```
sponsoredPeer#c69708d3 flags:# random_id:bytes peer:Peer sponsor_info:flags.0?string additional_info:flags.1?string = SponsoredPeer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:random_id] Идентификатор рекламируемого пира, который следует передавать в <a href="/method/messages.viewSponsoredMessage">messages.viewSponsoredMessage</a>, <a href="/method/messages.clickSponsoredMessage">messages.clickSponsoredMessage</a> или <a href="/method/messages.reportSponsoredMessage">messages.reportSponsoredMessage</a> (те же методы, что используются для <a href="/api/sponsored-messages">рекламных сообщений &amp;raquo</a>). Подробнее об устранении дубликатов по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Спонсируемый пир.</td></tr><tr><td><strong>sponsor_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Если установлено, содержит дополнительные сведения о рекламодателе, которые следует показать вместе с пиром.</td></tr><tr><td><strong>additional_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Если установлено, содержит дополнительные сведения о рекламном сообщении, которые следует показать вместе с пиром.</td></tr></tbody></table>

### Тип

[SponsoredPeer](/type/SponsoredPeer/)

### Связанные страницы

#### [messages.viewSponsoredMessage](/method/messages.viewSponsoredMessage/)

Отметить конкретное [рекламное сообщение »](/api/sponsored-messages/) как прочитанное

#### [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/)

Сообщает серверу, что пользователь взаимодействовал с рекламным сообщением [одним из перечисленных здесь способов »](/api/sponsored-messages/#clicking-on-sponsored-messages).

#### [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/)

Пожаловаться на [рекламное сообщение »](/api/sponsored-messages/); подробнее обо всём процессе см. [здесь »](/api/sponsored-messages/#reporting-sponsored-messages).

#### [Спонсируемые сообщения](/api/sponsored-messages/)

Как клиентам получать, показывать рекламные сообщения и взаимодействовать с ними.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
