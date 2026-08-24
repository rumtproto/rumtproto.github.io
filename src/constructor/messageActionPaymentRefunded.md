---
title: "messageActionPaymentRefunded"
original: "https://core.telegram.org/constructor/messageActionPaymentRefunded"
section: ref
kind: constructor
description: "Описывает возврат платежа (сервисное сообщение, получаемое и пользователями, и ботами)."
layout: layout.njk
---

# messageActionPaymentRefunded

Описывает возврат платежа (сервисное сообщение, получаемое и пользователями, и ботами).

```
messageActionPaymentRefunded#41b3e202 flags:# peer:Peer currency:string total_amount:long payload:flags.0?bytes charge:PaymentCharge = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Идентификатор пира, вернувшего средства.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Валюта, <code>XTR</code> для Telegram Stars.</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Итоговая цена в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td>Полезная нагрузка счёта, заданная ботом (получают только боты).</td></tr><tr><td><strong>charge</strong></td><td style="text-align: center;"><a href="/type/PaymentCharge">PaymentCharge</a></td><td>Идентификатор платежа у провайдера</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)
