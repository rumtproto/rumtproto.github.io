---
title: "invoice"
original: "https://core.telegram.org/constructor/invoice"
section: ref
kind: constructor
description: "Счёт"
layout: layout.njk
---

# invoice

Счёт

```
invoice#49ee584 flags:# test:flags.0?true name_requested:flags.1?true phone_requested:flags.2?true email_requested:flags.3?true shipping_address_requested:flags.4?true flexible:flags.5?true phone_to_provider:flags.6?true email_to_provider:flags.7?true recurring:flags.9?true currency:string prices:Vector<LabeledPrice> max_tip_amount:flags.8?long suggested_tip_amounts:flags.8?Vector<long> terms_url:flags.10?string subscription_period:flags.11?int = Invoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>test</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Тестовый счёт</td></tr><tr><td><strong>name_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если для оформления заказа требуется полное имя пользователя</td></tr><tr><td><strong>phone_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если для оформления заказа требуется номер телефона пользователя</td></tr><tr><td><strong>email_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если для оформления заказа требуется адрес электронной почты пользователя</td></tr><tr><td><strong>shipping_address_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если для оформления заказа требуется адрес доставки пользователя</td></tr><tr><td><strong>flexible</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если итоговая цена зависит от способа доставки</td></tr><tr><td><strong>phone_to_provider</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если провайдеру следует передать номер телефона пользователя</td></tr><tr><td><strong>email_to_provider</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если провайдеру следует передать адрес электронной почты пользователя</td></tr><tr><td><strong>recurring</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Является ли это периодическим платежом</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217 либо <code>XTR</code> для <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>prices</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/LabeledPrice">LabeledPrice</a>&gt;</td><td>Разбивка цены — список составляющих (например, цена товара, налог, скидка, стоимость доставки, налог на доставку, бонус и т. п.)</td></tr><tr><td><strong>max_tip_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/long">long</a></td><td>Максимально допустимая сумма чаевых в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он показывает количество знаков после запятой для каждой валюты (2 для большинства валют).</td></tr><tr><td><strong>suggested_tip_amounts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Вектор предлагаемых размеров чаевых в <em>наименьших единицах</em> валюты (целое число, не число с плавающей точкой). Можно указать не более 4 предлагаемых размеров чаевых. Предлагаемые размеры чаевых обязаны быть положительными, передаваться в строго возрастающем порядке и не превышать <code>max_tip_amount</code>.</td></tr><tr><td><strong>terms_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/string">string</a></td><td>Адрес условий использования</td></tr><tr><td><strong>subscription_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/int">int</a></td><td>Количество секунд между последовательными списаниями Telegram Stars для счетов <a href="/api/subscriptions#bot-subscriptions">подписки на бота</a></td></tr></tbody></table>

### Тип

[Invoice](/type/Invoice/)

### Связанные страницы

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Подписки за звёзды](/api/subscriptions/)

Боты и каналы могут создавать подписки, периодически списывая с пользователей определённое количество Telegram Stars в обмен на контент и услуги.
