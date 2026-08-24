---
title: "inputPasskeyCredentialPublicKey"
original: "https://core.telegram.org/constructor/inputPasskeyCredentialPublicKey"
section: ref
kind: constructor
description: "Учётные данные ключа доступа с открытым ключом, используемые как для регистрации, так и для входа; полное описание процессов см. в разделах создание ключа доступа » и вход с…"
layout: layout.njk
---

# inputPasskeyCredentialPublicKey

Учётные данные ключа доступа с открытым ключом, используемые как для регистрации, так и для входа; полное описание процессов см. в разделах [создание ключа доступа »](/api/passkeys/#creating-a-passkey) и [вход с помощью ключа доступа »](/api/passkeys/#logging-in-with-a-passkey).

```
inputPasskeyCredentialPublicKey#3c27b78f id:string raw_id:string response:InputPasskeyResponse = InputPasskeyCredential;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Поле <code>id</code> объекта <a href="https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential">PublicKeyCredential</a>, передаётся как есть, без декодирования base64url, при использовании представления JSON</td></tr><tr><td><strong>raw_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Поле <code>rawId</code> объекта <a href="https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential">PublicKeyCredential</a>, передаётся как есть, без декодирования base64url, при использовании представления JSON</td></tr><tr><td><strong>response</strong></td><td style="text-align: center;"><a href="/type/InputPasskeyResponse">InputPasskeyResponse</a></td><td>Ответ на регистрацию или вход.</td></tr></tbody></table>

### Тип

[InputPasskeyCredential](/type/InputPasskeyCredential/)

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
