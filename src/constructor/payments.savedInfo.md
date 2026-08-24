---
title: "payments.savedInfo"
original: "https://core.telegram.org/constructor/payments.savedInfo"
section: ref
kind: constructor
description: "Сохранённые на сервере сведения о заказе"
layout: layout.njk
---

# payments.savedInfo

Сохранённые на сервере сведения о заказе

```
payments.savedInfo#fb8fe43c flags:# has_saved_credentials:flags.1?true saved_info:flags.0?PaymentRequestedInfo = payments.SavedInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>has_saved_credentials</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Есть ли у пользователя сохранённые платёжные реквизиты</td></tr><tr><td><strong>saved_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/PaymentRequestedInfo">PaymentRequestedInfo</a></td><td>Сохранённые на сервере сведения о заказе</td></tr></tbody></table>

### Тип

[payments.SavedInfo](/type/payments.SavedInfo/)
