---
title: "payments.canPurchaseStore"
original: "https://core.telegram.org/method/payments.canPurchaseStore"
section: ref
kind: method
description: "Проверяет, возможна ли покупка. Обязан вызываться перед покупкой во внутреннем магазине, только для официальных клиентов."
layout: layout.njk
---

# payments.canPurchaseStore

Проверяет, возможна ли покупка. Обязан вызываться перед покупкой во внутреннем магазине, только для официальных клиентов.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.canPurchaseStore#4fdc5ea7 purpose:InputStorePaymentPurpose = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/InputStorePaymentPurpose">InputStorePaymentPurpose</a></td><td>Назначение платежа.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>INPUT_PURPOSE_INVALID</td><td>Указанное назначение платежа недействительно.</td></tr><tr><td>406</td><td>PREMIUM_CURRENTLY_UNAVAILABLE</td><td>Сейчас вы не можете приобрести подписку Premium.</td></tr></tbody></table>
