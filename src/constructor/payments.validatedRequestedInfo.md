---
title: "payments.validatedRequestedInfo"
original: "https://core.telegram.org/constructor/payments.validatedRequestedInfo"
section: ref
kind: constructor
description: "Проверенные данные, предоставленные пользователем"
layout: layout.njk
---

# payments.ValidatedRequestedInfo

Проверенные данные, предоставленные пользователем

```
payments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>ID</td></tr><tr><td><strong>shipping_options</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ShippingOption">ShippingOption</a>&gt;</td><td>Варианты доставки</td></tr></tbody></table>

### Тип

[payments.ValidatedRequestedInfo](/type/payments.ValidatedRequestedInfo/)
