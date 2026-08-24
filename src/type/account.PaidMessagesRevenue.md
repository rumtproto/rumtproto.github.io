---
title: "account.PaidMessagesRevenue"
original: "https://core.telegram.org/type/account.PaidMessagesRevenue"
section: ref
kind: type
description: "Общее количество невозвращённых Telegram Stars, потраченных пользователем на отправку нам сообщений — напрямую либо через канал; подробнее о платных сообщениях см. здесь »."
layout: layout.njk
---

# account.PaidMessagesRevenue

Общее количество невозвращённых [Telegram Stars](/api/stars/), потраченных пользователем на отправку нам сообщений — напрямую либо через канал; подробнее о платных сообщениях см. [здесь »](/api/paid-messages/).

```
account.paidMessagesRevenue#1e109708 stars_amount:long = account.PaidMessagesRevenue;

---functions---

account.getPaidMessagesRevenue#19ba4a67 flags:# parent_peer:flags.0?InputPeer user_id:InputUser = account.PaidMessagesRevenue;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.paidMessagesRevenue">account.paidMessagesRevenue</a></td><td>Общее количество невозвращённых <a href="/api/stars">Telegram Stars</a>, потраченных пользователем на отправку нам сообщений — напрямую либо через канал; подробнее о платных сообщениях см. <a href="/api/paid-messages">здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getPaidMessagesRevenue">account.getPaidMessagesRevenue</a></td><td>Получить количество звёзд, полученных нами от указанного пользователя благодаря <a href="/api/paid-messages">платным сообщениям »</a>; полученная сумма равна отправленной сумме, умноженной на <a href="/api/config#stars-paid-message-commission-permille">stars_paid_message_commission_permille</a> и делённой на 1000.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.
