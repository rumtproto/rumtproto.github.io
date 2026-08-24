---
title: "messages.viewSponsoredMessage"
original: "https://core.telegram.org/method/messages.viewSponsoredMessage"
section: ref
kind: method
description: "Отметить конкретное рекламное сообщение » как прочитанное"
layout: layout.njk
---

# messages.viewSponsoredMessage

Отметить конкретное [рекламное сообщение »](/api/sponsored-messages/) как прочитанное

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.viewSponsoredMessage#269e3643 random_id:bytes = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:random_id] Уникальный идентификатор рекламного объявления. Подробнее о дедупликации по случайным идентификаторам и сопоставлении через updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Спонсируемые сообщения](/api/sponsored-messages/)

Как клиентам получать, показывать рекламные сообщения и взаимодействовать с ними.
