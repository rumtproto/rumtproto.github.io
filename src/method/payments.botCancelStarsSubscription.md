---
title: "payments.botCancelStarsSubscription"
original: "https://core.telegram.org/method/payments.botCancelStarsSubscription"
section: ref
kind: method
description: "Отменить подписку на бота"
layout: layout.njk
---

# payments.botCancelStarsSubscription

Отменить [подписку на бота](/api/subscriptions/#bot-subscriptions)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.botCancelStarsSubscription#6dfa0622 flags:# restore:flags.0?true user_id:InputUser charge_id:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>restore</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если флаг <strong>не</strong> задан, отключает автопродление подписок и запрещает пользователю возобновить подписку после окончания текущего периода: у подписки, отменённой ботом, будет установлен флаг <a href="/constructor/starsSubscription">starsSubscription</a>.<code>bot_canceled</code>.<br>Бот может частично отменить эту операцию, задав данный флаг: тогда пользователь сможет возобновить подписку.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя, подписку которого нужно отменить или возобновить</td></tr><tr><td><strong>charge_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><code>provider_charge_id</code> из сервисного сообщения <a href="/constructor/messageActionPaymentSentMe">messageActionPaymentSentMe</a>, отправленного боту при первом платеже по подписке.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHARGE_ID_INVALID</td><td>Указанный charge_id недействителен.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [starsSubscription](/constructor/starsSubscription/)

Представляет [подписку за Telegram Stars »](/api/invites/#paid-invite-links).

#### [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/)

Пользователь только что отправил платёж мне (боту)

#### [Подписки за звёзды](/api/subscriptions/)

Боты и каналы могут создавать подписки, периодически списывая с пользователей определённое количество Telegram Stars в обмен на контент и услуги.
