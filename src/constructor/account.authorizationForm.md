---
title: "account.authorizationForm"
original: "https://core.telegram.org/constructor/account.authorizationForm"
section: ref
kind: constructor
description: "Форма авторизации Telegram Passport"
layout: layout.njk
---

# account.authorizationForm

Форма авторизации [Telegram Passport](https://core.telegram.org/passport)

```
account.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>required_types</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureRequiredType">SecureRequiredType</a>&gt;</td><td>Требуемые документы <a href="/passport">Telegram Passport</a></td></tr><tr><td><strong>values</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureValue">SecureValue</a>&gt;</td><td>Уже отправленные документы <a href="/passport">Telegram Passport</a></td></tr><tr><td><strong>errors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureValueError">SecureValueError</a>&gt;</td><td>Ошибки <a href="/passport">Telegram Passport</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Информация о боте, которому будет отправлена форма</td></tr><tr><td><strong>privacy_policy_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>URL политики конфиденциальности сервиса</td></tr></tbody></table>

### Тип

[account.AuthorizationForm](/type/account.AuthorizationForm/)

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
