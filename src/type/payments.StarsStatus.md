---
title: "payments.StarsStatus"
original: "https://core.telegram.org/type/payments.StarsStatus"
section: ref
kind: type
description: "Информация о текущих подписках за Telegram Stars, балансе и истории транзакций »."
layout: layout.njk
---

# payments.StarsStatus

Информация о текущих [подписках за Telegram Stars, балансе и истории транзакций »](/api/stars/#balance-and-transaction-history).

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;

---functions---

payments.getStarsStatus#4ea9b3bf flags:# ton:flags.0?true peer:InputPeer = payments.StarsStatus;
payments.getStarsTransactions#69da4557 flags:# inbound:flags.0?true outbound:flags.1?true ascending:flags.2?true ton:flags.4?true subscription_id:flags.3?string peer:InputPeer offset:string limit:int = payments.StarsStatus;
payments.getStarsTransactionsByID#2dca16b8 flags:# ton:flags.0?true peer:InputPeer id:Vector<InputStarsTransaction> = payments.StarsStatus;
payments.getStarsSubscriptions#32512c5 flags:# missing_balance:flags.0?true peer:InputPeer offset:string = payments.StarsStatus;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starsStatus">payments.starsStatus</a></td><td>Информация о текущих <a href="/api/stars#balance-and-transaction-history">подписках Telegram Star, балансе и истории транзакций »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarsStatus">payments.getStarsStatus</a></td><td>[@term:peer] Получить текущий <a href="/api/stars">баланс Telegram Stars</a> текущего аккаунта (при peer=<a href="/constructor/inputPeerSelf">inputPeerSelf</a>) либо баланс звёзд бота или канала, указанного в <code>peer</code>.</td></tr><tr><td><a href="/method/payments.getStarsTransactions">payments.getStarsTransactions</a></td><td>Получить <a href="/api/stars#balance-and-transaction-history">транзакции Telegram Stars</a>.<br><br>Флаги <code>inbound</code> и <code>outbound</code> взаимоисключающие: если не задан ни один из них, возвращаются как входящие, так и исходящие транзакции.</td></tr><tr><td><a href="/method/payments.getStarsTransactionsByID">payments.getStarsTransactionsByID</a></td><td>Получить информацию о <a href="/api/stars#balance-and-transaction-history">транзакциях Telegram Stars »</a> по конкретным идентификаторам транзакций.</td></tr><tr><td><a href="/method/payments.getStarsSubscriptions">payments.getStarsSubscriptions</a></td><td>Получить список активных, истёкших или отменённых <a href="/api/invites#paid-invite-links">подписок за Telegram Stars »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
