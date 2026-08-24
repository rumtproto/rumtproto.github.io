---
title: "account.getPaidMessagesRevenue"
original: "https://core.telegram.org/method/account.getPaidMessagesRevenue"
section: ref
kind: method
description: "Получить количество звёзд, полученных нами от указанного пользователя благодаря платным сообщениям »; полученная сумма равна отправленной сумме, умноженной на…"
layout: layout.njk
---

# account.getPaidMessagesRevenue

Получить количество звёзд, полученных нами от указанного пользователя благодаря [платным сообщениям »](/api/paid-messages/); полученная сумма равна отправленной сумме, умноженной на [stars\_paid\_message\_commission\_permille](/api/config/#stars-paid-message-commission-permille) и делённой на 1000.

```
account.paidMessagesRevenue#1e109708 stars_amount:long = account.PaidMessagesRevenue;
---functions---
account.getPaidMessagesRevenue#19ba4a67 flags:# parent_peer:flags.0?InputPeer user_id:InputUser = account.PaidMessagesRevenue;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputPeer">InputPeer</a></td><td>Если установлено, может содержать идентификатор <a href="/api/monoforum">монофорума (личные сообщения канала)</a> для получения количества звёзд, потраченных пользователем на отправку нам личных сообщений через канал.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь, заплативший за отправку нам сообщений.</td></tr></tbody></table>

### Результат

[account.PaidMessagesRevenue](/type/account.PaidMessagesRevenue/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PARENT_PEER_INVALID</td><td>Указанный <code>parent_peer</code> недействителен.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
