---
title: "account.paidMessagesRevenue"
original: "https://core.telegram.org/constructor/account.paidMessagesRevenue"
section: ref
kind: constructor
description: "Общее количество невозвращённых Telegram Stars, потраченных пользователем на отправку нам сообщений — напрямую либо через канал; подробнее о платных сообщениях см. здесь »."
layout: layout.njk
---

# account.paidMessagesRevenue

Общее количество невозвращённых [Telegram Stars](/api/stars/), потраченных пользователем на отправку нам сообщений — напрямую либо через канал; подробнее о платных сообщениях см. [здесь »](/api/paid-messages/).

```
account.paidMessagesRevenue#1e109708 stars_amount:long = account.PaidMessagesRevenue;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stars_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Сумма в <a href="/api/stars">Stars</a>.</td></tr></tbody></table>

### Тип

[account.PaidMessagesRevenue](/type/account.PaidMessagesRevenue/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.
