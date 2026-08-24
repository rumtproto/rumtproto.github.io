---
title: "inputStorePaymentPremiumSubscription"
original: "https://core.telegram.org/constructor/inputStorePaymentPremiumSubscription"
section: ref
kind: constructor
description: "Информация о покупке Telegram Premium"
layout: layout.njk
---

# inputStorePaymentPremiumSubscription

Информация о покупке Telegram Premium

```
inputStorePaymentPremiumSubscription#a6751e66 flags:# restore:flags.0?true upgrade:flags.1?true = InputStorePaymentPurpose;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>restore</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Передайте true, если это восстановление покупки Telegram Premium; только для App Store</td></tr><tr><td><strong>upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Передайте true, если это переход с месячной подписки на годовую; только для App Store</td></tr></tbody></table>

### Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)
