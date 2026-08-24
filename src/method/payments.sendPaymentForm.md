---
title: "payments.sendPaymentForm"
original: "https://core.telegram.org/method/payments.sendPaymentForm"
section: ref
kind: method
description: "Отправить заполненную форму оплаты"
layout: layout.njk
---

# payments.sendPaymentForm

Отправить заполненную форму оплаты

```
payments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;
payments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;
---functions---
payments.sendPaymentForm#2d03522f flags:# form_id:long invoice:InputInvoice requested_info_id:flags.0?string shipping_option_id:flags.1?string credentials:InputPaymentCredentials tip_amount:flags.2?long = payments.PaymentResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор формы</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/InputInvoice">InputInvoice</a></td><td>Счёт</td></tr><tr><td><strong>requested_info_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Идентификатор сохранённых и проверенных <a href="/constructor/payments.validatedRequestedInfo">сведений о заказе</a></td></tr><tr><td><strong>shipping_option_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Идентификатор выбранного варианта доставки</td></tr><tr><td><strong>credentials</strong></td><td style="text-align: center;"><a href="/type/InputPaymentCredentials">InputPaymentCredentials</a></td><td>Платёжные реквизиты</td></tr><tr><td><strong>tip_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/long">long</a></td><td>Чаевые в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr></tbody></table>

### Результат

[payments.PaymentResult](/type/payments.PaymentResult/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>FORM_UNSUPPORTED</td><td>Обновите клиент.</td></tr><tr><td>400</td><td>INVOICE_INVALID</td><td>Указанный счёт недействителен.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>PAYMENT_CREDENTIALS_INVALID</td><td>Указанные платёжные реквизиты недействительны.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>TMP_PASSWORD_INVALID</td><td>Переданное значение tmp_password недействительно.</td></tr></tbody></table>

### Связанные страницы

#### [payments.ValidatedRequestedInfo](/constructor/payments.validatedRequestedInfo/)

Проверенные данные, предоставленные пользователем

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)
