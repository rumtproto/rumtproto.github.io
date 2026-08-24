---
title: "auth.passkeyLoginOptions"
original: "https://core.telegram.org/constructor/auth.passkeyLoginOptions"
section: ref
kind: constructor
description: "Параметры входа по passkey; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# auth.passkeyLoginOptions

Параметры входа по passkey; подробнее о полном процессе см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).

```
auth.passkeyLoginOptions#e2037789 options:DataJSON = auth.PasskeyLoginOptions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Закодированный в JSON объект, поле <code>publicKey</code> которого содержит объект <a href="https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions"><code>PublicKeyCredentialRequestOptions</code></a>.</td></tr></tbody></table>

### Тип

[auth.PasskeyLoginOptions](/type/auth.PasskeyLoginOptions/)

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
