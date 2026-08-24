---
title: "InputPasskeyCredential"
original: "https://core.telegram.org/type/InputPasskeyCredential"
section: ref
kind: type
description: "Учётные данные, используемые для регистрации ключа доступа » или для входа с его помощью."
layout: layout.njk
---

# InputPasskeyCredential

Учётные данные, используемые для регистрации [ключа доступа »](/api/passkeys/) или для входа с его помощью.

```
inputPasskeyCredentialPublicKey#3c27b78f id:string raw_id:string response:InputPasskeyResponse = InputPasskeyCredential;
inputPasskeyCredentialFirebasePNV#5b1ccb28 pnv_token:string = InputPasskeyCredential;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputPasskeyCredentialPublicKey">inputPasskeyCredentialPublicKey</a></td><td>Учётные данные ключа доступа с открытым ключом, используемые как для регистрации, так и для входа; полное описание процессов см. в разделах <a href="/api/passkeys#creating-a-passkey">создание ключа доступа »</a> и <a href="/api/passkeys#logging-in-with-a-passkey">вход с помощью ключа доступа »</a>.</td></tr><tr><td><a href="/constructor/inputPasskeyCredentialFirebasePNV">inputPasskeyCredentialFirebasePNV</a></td><td>Альтернативные учётные данные <a href="/api/passkeys">ключа доступа</a>, подтверждающие владение номером телефона аккаунта с помощью токена Firebase Phone Number Verification (PNV); используются в официальных приложениях, где невозможно создать полноценный <a href="/constructor/inputPasskeyCredentialPublicKey">ключ доступа с открытым ключом</a> по стандарту WebAuthn, аналогично <a href="/api/auth">аутентификации по SMS через Firebase »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
