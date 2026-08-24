---
title: "messageActionPaidMessagesRefunded"
original: "https://core.telegram.org/constructor/messageActionPaidMessagesRefunded"
section: ref
kind: constructor
description: "Отправляется от пира A пиру B и означает, что A вернул все stars, которые B ранее заплатил за отправку сообщений пиру A; подробнее о платных сообщениях см. здесь »."
layout: layout.njk
---

# messageActionPaidMessagesRefunded

Отправляется от пира A пиру B и означает, что A вернул все [stars](/api/stars/), которые B ранее заплатил за отправку сообщений пиру A; подробнее о платных сообщениях см. [здесь »](/api/paid-messages/).

```
messageActionPaidMessagesRefunded#ac1f1fcd count:int stars:long = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество платных сообщений, затронутых возвратом средств.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество возвращённых звёзд.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.
