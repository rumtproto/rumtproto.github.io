---
title: "payments.getStarsSubscriptions"
original: "https://core.telegram.org/method/payments.getStarsSubscriptions"
section: ref
kind: method
description: "Получить список активных, истёкших или отменённых подписок за Telegram Stars »."
layout: layout.njk
---

# payments.getStarsSubscriptions

Получить список активных, истёкших или отменённых [подписок за Telegram Stars »](/api/invites/#paid-invite-links).

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;
---functions---
payments.getStarsSubscriptions#32512c5 flags:# missing_balance:flags.0?true peer:InputPeer offset:string = payments.StarsStatus;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>missing_balance</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Возвращать ли только подписки, истёкшие из-за слишком низкого баланса Telegram Stars.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Всегда передавайте <a href="/constructor/inputPeerSelf">inputPeerSelf</a>.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Смещение для постраничной выборки, берётся из <a href="/constructor/payments.starsStatus">payments.starsStatus</a>.<code>subscriptions_next_offset</code>.</td></tr></tbody></table>

### Результат

[payments.StarsStatus](/type/payments.StarsStatus/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Определяет текущего пользователя.

#### [payments.starsStatus](/constructor/payments.starsStatus/)

Информация о текущих [подписках за Telegram Stars, балансе и истории транзакций »](/api/stars/#balance-and-transaction-history).

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.
