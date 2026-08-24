---
title: "payments.paymentForm"
original: "https://core.telegram.org/constructor/payments.paymentForm"
section: ref
kind: constructor
description: "Форма оплаты"
layout: layout.njk
---

# payments.paymentForm

Форма оплаты

```
payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>can_save_credentials</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Может ли пользователь выбрать сохранение платёжных реквизитов.</td></tr><tr><td><strong>password_missing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Указывает, что пользователь может сохранить платёжные данные, но только после настройки <a href="/api/srp">пароля двухфакторной аутентификации</a> (сейчас у аккаунта нет <a href="/api/srp">пароля двухфакторной аутентификации</a>)</td></tr><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор формы</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор бота</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название формы</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/WebDocument">WebDocument</a></td><td>Фотография товара</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice">Invoice</a></td><td>Счёт</td></tr><tr><td><strong>provider_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор платёжного провайдера.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL формы оплаты</td></tr><tr><td><strong>native_provider</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Название платёжного провайдера.<br>Одно из следующих значений:<br>- <code>stripe</code></td></tr><tr><td><strong>native_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/DataJSON">DataJSON</a></td><td>Содержит информацию о платёжном провайдере, если она доступна, чтобы поддержать его нативно, без необходимости открывать URL.<br>Объект JSON, который может содержать следующие поля:<br><br>- <code>apple_pay_merchant_id</code>: идентификатор продавца Apple Pay<br>- <code>google_pay_public_key</code>: открытый ключ Google Pay<br>- <code>need_country</code>: True, если требуется указать страну пользователя,<br>- <code>need_zip</code>: True, если требуется указать почтовый индекс пользователя,<br>- <code>need_cardholder_name</code>: True, если требуется указать имя держателя карты<br></td></tr><tr><td><strong>additional_methods</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PaymentFormMethod">PaymentFormMethod</a>&gt;</td><td>Дополнительные способы оплаты</td></tr><tr><td><strong>saved_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/PaymentRequestedInfo">PaymentRequestedInfo</a></td><td>Сохранённые на сервере сведения о заказе</td></tr><tr><td><strong>saved_credentials</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PaymentSavedCredentials">PaymentSavedCredentials</a>&gt;</td><td>Содержит информацию о сохранённых данных карты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи</td></tr></tbody></table>

### Тип

[payments.PaymentForm](/type/payments.PaymentForm/)

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
