---
title: "inputPasskeyCredentialFirebasePNV"
original: "https://core.telegram.org/constructor/inputPasskeyCredentialFirebasePNV"
section: ref
kind: constructor
description: "Альтернативные учётные данные ключа доступа, подтверждающие владение номером телефона аккаунта с помощью токена Firebase Phone Number Verification (PNV); используются в…"
layout: layout.njk
---

# inputPasskeyCredentialFirebasePNV

Альтернативные учётные данные [ключа доступа](/api/passkeys/), подтверждающие владение номером телефона аккаунта с помощью токена Firebase Phone Number Verification (PNV); используются в официальных приложениях, где невозможно создать полноценный [ключ доступа с открытым ключом](/constructor/inputPasskeyCredentialPublicKey/) по стандарту WebAuthn, аналогично [аутентификации по SMS через Firebase »](/api/auth/).

```
inputPasskeyCredentialFirebasePNV#5b1ccb28 pnv_token:string = InputPasskeyCredential;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>pnv_token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Токен Firebase Phone Number Verification, подтверждающий, что пользователь владеет номером телефона, привязанным к учётной записи.</td></tr></tbody></table>

### Тип

[InputPasskeyCredential](/type/InputPasskeyCredential/)

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.

#### [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/)

Учётные данные ключа доступа с открытым ключом, используемые как для регистрации, так и для входа; полное описание процессов см. в разделах [создание ключа доступа »](/api/passkeys/#creating-a-passkey) и [вход с помощью ключа доступа »](/api/passkeys/#logging-in-with-a-passkey).

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
