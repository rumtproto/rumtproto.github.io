---
title: "payments.validateRequestedInfo"
original: "https://core.telegram.org/method/payments.validateRequestedInfo"
section: ref
kind: method
description: "Отправить запрошенные сведения о заказе на проверку"
layout: layout.njk
---

# payments.validateRequestedInfo

Отправить запрошенные сведения о заказе на проверку

```
payments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;
---functions---
payments.validateRequestedInfo#b6c8f12b flags:# save:flags.0?true invoice:InputInvoice info:PaymentRequestedInfo = payments.ValidatedRequestedInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>save</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Сохранить сведения о заказе для повторного использования в будущих заказах</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/InputInvoice">InputInvoice</a></td><td>Счёт</td></tr><tr><td><strong>info</strong></td><td style="text-align: center;"><a href="/type/PaymentRequestedInfo">PaymentRequestedInfo</a></td><td>Запрошенные сведения о заказе</td></tr></tbody></table>

### Результат

[payments.ValidatedRequestedInfo](/type/payments.ValidatedRequestedInfo/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>
