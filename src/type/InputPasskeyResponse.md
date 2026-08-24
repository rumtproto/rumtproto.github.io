---
title: "InputPasskeyResponse"
original: "https://core.telegram.org/type/InputPasskeyResponse"
section: ref
kind: type
description: "Ответ WebAuthn, сформированный аутентификатором при регистрации или входе с помощью ключа доступа с открытым ключом »."
layout: layout.njk
---

# InputPasskeyResponse

Ответ WebAuthn, сформированный аутентификатором при регистрации или входе с помощью [ключа доступа с открытым ключом »](/api/passkeys/).

```
inputPasskeyResponseRegister#3e63935c client_data:DataJSON attestation_data:bytes = InputPasskeyResponse;
inputPasskeyResponseLogin#c31fc14a client_data:DataJSON authenticator_data:bytes signature:bytes user_handle:string = InputPasskeyResponse;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputPasskeyResponseRegister">inputPasskeyResponseRegister</a></td><td>Ответ WebAuthn при регистрации, используемый при регистрации нового ключа доступа; подробнее о полном процессе см. <a href="/api/passkeys#creating-a-passkey">здесь »</a>.<br><br>Формируется из объекта <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse">AuthenticatorAttestationResponse</a>.</td></tr><tr><td><a href="/constructor/inputPasskeyResponseLogin">inputPasskeyResponseLogin</a></td><td>Ответ WebAuthn при аутентификации, используемый при входе по ключу доступа; подробнее о полном процессе см. <a href="/api/passkeys#logging-in-with-a-passkey">здесь »</a>.<br><br>Формируется из объекта <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse">AuthenticatorAssertionResponse</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
