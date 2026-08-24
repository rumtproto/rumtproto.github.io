---
title: "account.passkeyRegistrationOptions"
original: "https://core.telegram.org/constructor/account.passkeyRegistrationOptions"
section: ref
kind: constructor
description: "Параметры регистрации passkey; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# account.passkeyRegistrationOptions

Параметры регистрации passkey; подробнее о полном процессе см. [здесь »](/api/passkeys/#creating-a-passkey).

```
account.passkeyRegistrationOptions#e16b5ce1 options:DataJSON = account.PasskeyRegistrationOptions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Закодированный в JSON объект, поле <code>publicKey</code> которого содержит объект <a href="https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions"><code>PublicKeyCredentialCreationOptions</code></a>.</td></tr></tbody></table>

### Тип

[account.PasskeyRegistrationOptions](/type/account.PasskeyRegistrationOptions/)

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
