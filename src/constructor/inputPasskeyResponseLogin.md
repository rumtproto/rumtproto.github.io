---
title: "inputPasskeyResponseLogin"
original: "https://core.telegram.org/constructor/inputPasskeyResponseLogin"
section: ref
kind: constructor
description: "Ответ WebAuthn при аутентификации, используемый при входе по ключу доступа; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# inputPasskeyResponseLogin

Ответ WebAuthn при аутентификации, используемый при входе по ключу доступа; подробнее о полном процессе см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).

Формируется из объекта [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse).

```
inputPasskeyResponseLogin#c31fc14a client_data:DataJSON authenticator_data:bytes signature:bytes user_handle:string = InputPasskeyResponse;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>client_data</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Декодированное из base64url поле <code>clientDataJSON</code> объекта <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse">AuthenticatorAssertionResponse</a>, обёрнутое в <a href="/constructor/dataJSON">dataJSON</a></td></tr><tr><td><strong>authenticator_data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Декодированное из base64url поле <code>authenticatorData</code> объекта <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse">AuthenticatorAssertionResponse</a></td></tr><tr><td><strong>signature</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Декодированное из base64url поле <code>signature</code> объекта <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse">AuthenticatorAssertionResponse</a></td></tr><tr><td><strong>user_handle</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Декодированное из base64url поле <code>userHandle</code> объекта <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse">AuthenticatorAssertionResponse</a>. Идентификатор пользователя, задаваемый сервером, имеет формат <code>&lt;dc_id&gt;:&lt;user_id&gt;</code>.</td></tr></tbody></table>

### Тип

[InputPasskeyResponse](/type/InputPasskeyResponse/)

### Связанные страницы

#### [dataJSON](/constructor/dataJSON/)

Представляет объект в формате JSON

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
