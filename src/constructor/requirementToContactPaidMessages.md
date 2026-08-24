---
title: "requirementToContactPaidMessages"
original: "https://core.telegram.org/constructor/requirementToContactPaidMessages"
section: ref
kind: constructor
description: "Этот пользователь требует уплатить указанное количество Telegram Stars за отправку ему сообщения; полное описание процесса см. здесь »."
layout: layout.njk
---

# requirementToContactPaidMessages

Этот пользователь требует уплатить указанное количество [Telegram Stars](/api/stars/) за отправку ему сообщения; полное описание процесса см. [здесь »](/api/paid-messages/).

```
requirementToContactPaidMessages#b4f67e93 stars_amount:long = RequirementToContact;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stars_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Необходимое количество <a href="/api/stars">Telegram Stars</a>.</td></tr></tbody></table>

### Тип

[RequirementToContact](/type/RequirementToContact/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.
