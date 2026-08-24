---
title: "payments.ValidatedRequestedInfo"
original: "https://core.telegram.org/type/payments.ValidatedRequestedInfo"
section: ref
kind: type
description: "Проверенные запрошенные сведения"
layout: layout.njk
---

# Payments.ValidatedRequestedInfo

Проверенные запрошенные сведения

```
payments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;

---functions---

payments.validateRequestedInfo#b6c8f12b flags:# save:flags.0?true invoice:InputInvoice info:PaymentRequestedInfo = payments.ValidatedRequestedInfo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.validatedRequestedInfo">payments.validatedRequestedInfo</a></td><td>Проверенные данные, предоставленные пользователем</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.validateRequestedInfo">payments.validateRequestedInfo</a></td><td>Отправить запрошенные сведения о заказе на проверку</td></tr></tbody></table>
