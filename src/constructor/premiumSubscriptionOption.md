---
title: "premiumSubscriptionOption"
original: "https://core.telegram.org/constructor/premiumSubscriptionOption"
section: ref
kind: constructor
description: "Описывает вариант подписки Telegram Premium"
layout: layout.njk
---

# premiumSubscriptionOption

Описывает вариант подписки Telegram Premium

```
premiumSubscriptionOption#5f2d1df2 flags:# current:flags.1?true can_purchase_upgrade:flags.2?true transaction:flags.3?string months:int currency:string amount:long bot_url:string store_product:flags.0?string = PremiumSubscriptionOption;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>current</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Используется ли этот вариант подписки в данный момент.</td></tr><tr><td><strong>can_purchase_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Можно ли использовать этот вариант подписки для повышения существующей подписки Telegram Premium. При повышении подписок Telegram Premium, купленных через магазины приложений, убедитесь, что идентификатор транзакции магазина совпадает с <code>transaction</code>, чтобы не повысить чужой аккаунт, если в клиенте выполнен вход сразу в несколько аккаунтов.</td></tr><tr><td><strong>transaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Идентификатор последней транзакции во внутреннем магазине для подписки, используемой на текущем аккаунте.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Срок действия подписки в месяцах</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Итоговая цена в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr><tr><td><strong>bot_url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/links">Глубокая ссылка</a>, используемая для начала оплаты</td></tr><tr><td><strong>store_product</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Идентификатор товара в магазине, только для официальных приложений</td></tr></tbody></table>

### Тип

[PremiumSubscriptionOption](/type/PremiumSubscriptionOption/)

### Связанные страницы

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
