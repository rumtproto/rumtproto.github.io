---
title: "inputInvoicePremiumAuthCode"
original: "https://core.telegram.org/constructor/inputInvoicePremiumAuthCode"
section: ref
kind: constructor
description: "Используется для оплаты кодов входа в случае высокой стоимости SMS с кодами подтверждения для страны или оператора пользователя; подробнее см. здесь »."
layout: layout.njk
---

# inputInvoicePremiumAuthCode

Используется для оплаты кодов входа в случае высокой стоимости SMS с кодами подтверждения для страны или оператора пользователя; подробнее [см. здесь »](/api/auth/#paid-auth).

```
inputInvoicePremiumAuthCode#3e77f614 purpose:InputStorePaymentPurpose = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/InputStorePaymentPurpose">InputStorePaymentPurpose</a></td><td>Обязано содержать <a href="/constructor/inputStorePaymentAuthCode">inputStorePaymentAuthCode</a>.</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [inputStorePaymentAuthCode](/constructor/inputStorePaymentAuthCode/)

Обозначает оплату кода для входа.

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
