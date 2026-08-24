---
title: "messages.clickSponsoredMessage"
original: "https://core.telegram.org/method/messages.clickSponsoredMessage"
section: ref
kind: method
description: "Сообщает серверу, что пользователь взаимодействовал с рекламным сообщением одним из перечисленных здесь способов »."
layout: layout.njk
---

# messages.clickSponsoredMessage

Сообщает серверу, что пользователь взаимодействовал с рекламным сообщением [одним из перечисленных здесь способов »](/api/sponsored-messages/#clicking-on-sponsored-messages).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.clickSponsoredMessage#8235057e flags:# media:flags.0?true fullscreen:flags.1?true random_id:bytes = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Пользователь нажал на медиафайл</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Пользователь развернул видео на весь экран и затем нажал на него.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:random_id] Уникальный идентификатор рекламного объявления. Подробнее о дедупликации по случайным идентификаторам и сопоставлении через updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Спонсируемые сообщения](/api/sponsored-messages/)

Как клиентам получать, показывать рекламные сообщения и взаимодействовать с ними.
