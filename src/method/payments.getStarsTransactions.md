---
title: "payments.getStarsTransactions"
original: "https://core.telegram.org/method/payments.getStarsTransactions"
section: ref
kind: method
description: "Получить транзакции Telegram Stars."
layout: layout.njk
---

# payments.getStarsTransactions

Получить [транзакции Telegram Stars](/api/stars/#balance-and-transaction-history).

Флаги `inbound` и `outbound` взаимоисключающие: если не задан ни один из них, возвращаются как входящие, так и исходящие транзакции.

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;
---functions---
payments.getStarsTransactions#69da4557 flags:# inbound:flags.0?true outbound:flags.1?true ascending:flags.2?true ton:flags.4?true subscription_id:flags.3?string peer:InputPeer offset:string limit:int = payments.StarsStatus;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>inbound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, получает только входящие транзакции.</td></tr><tr><td><strong>outbound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, получает только исходящие транзакции.</td></tr><tr><td><strong>ascending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Возвращать транзакции в порядке возрастания даты (вместо порядка убывания даты).</td></tr><tr><td><strong>ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Если установлено, вместо этого возвращает транзакции доходов канала или доходов от рекламы в нанограммах.</td></tr><tr><td><strong>subscription_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Если установлено, получает только транзакции по указанной <a href="/api/stars#star-subscriptions">подписке за Telegram Stars »</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Получить историю транзакций пира (<a href="/constructor/inputPeerSelf">inputPeerSelf</a> или принадлежащего нам бота).</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:next_offset] <a href="/api/offsets">Смещение для постраничной выборки, берётся из возвращённого <code>next_offset</code>; изначально — пустая строка »</a>.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[payments.StarsStatus](/type/payments.StarsStatus/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>SUBSCRIPTION_ID_INVALID</td><td>Указанное значение subscription_id недействительно.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Определяет текущего пользователя.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
