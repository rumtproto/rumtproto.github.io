---
title: "payments.starsStatus"
original: "https://core.telegram.org/constructor/payments.starsStatus"
section: ref
kind: constructor
description: "Информация о текущих подписках за Telegram Stars, балансе и истории транзакций »."
layout: layout.njk
---

# payments.starsStatus

Информация о текущих [подписках за Telegram Stars, балансе и истории транзакций »](/api/stars/#balance-and-transaction-history).

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>balance</strong></td><td style="text-align: center;"><a href="/type/StarsAmount">StarsAmount</a></td><td>Текущий баланс Telegram Stars.</td></tr><tr><td><strong>subscriptions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarsSubscription">StarsSubscription</a>&gt;</td><td>Информация о текущих подписках за Telegram Stars; возвращается только при вызове <a href="/method/payments.getStarsTransactions">payments.getStarsTransactions</a> и <a href="/method/payments.getStarsSubscriptions">payments.getStarsSubscriptions</a>.</td></tr><tr><td><strong>subscriptions_next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Смещение для постраничной выборки подписок: применимо и возвращается только при вызове <a href="/method/payments.getStarsSubscriptions">payments.getStarsSubscriptions</a>.</td></tr><tr><td><strong>subscriptions_missing_balance</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/long">long</a></td><td>Количество Telegram Stars, которое пользователю следует купить, чтобы в ближайшее время продлить истёкшие подписки (то есть текущего баланса не хватает на продление всех истёкших подписок).</td></tr><tr><td><strong>history</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarsTransaction">StarsTransaction</a>&gt;</td><td>[@term:next_offset] Список транзакций Telegram Stars (неполный, если задано поле <code>next_offset</code>).</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Смещение, которое следует использовать, чтобы получить больше транзакций из истории транзакций с помощью <a href="/method/payments.getStarsTransactions">payments.getStarsTransactions</a>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты, упомянутые в <code>history</code>.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в <code>history</code>.</td></tr></tbody></table>

### Тип

[payments.StarsStatus](/type/payments.StarsStatus/)

### Связанные страницы

#### [payments.getStarsTransactions](/method/payments.getStarsTransactions/)

Получить [транзакции Telegram Stars](/api/stars/#balance-and-transaction-history).

Флаги `inbound` и `outbound` взаимоисключающие: если не задан ни один из них, возвращаются как входящие, так и исходящие транзакции.

#### [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/)

Получить список активных, истёкших или отменённых [подписок за Telegram Stars »](/api/invites/#paid-invite-links).

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
