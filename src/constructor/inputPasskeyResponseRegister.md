---
title: "inputPasskeyResponseRegister"
original: "https://core.telegram.org/constructor/inputPasskeyResponseRegister"
section: ref
kind: constructor
description: "Ответ WebAuthn при регистрации, используемый при регистрации нового ключа доступа; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# inputPasskeyResponseRegister

Ответ WebAuthn при регистрации, используемый при регистрации нового ключа доступа; подробнее о полном процессе см. [здесь »](/api/passkeys/#creating-a-passkey).

Формируется из объекта [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse).

```
inputPasskeyResponseRegister#3e63935c client_data:DataJSON attestation_data:bytes = InputPasskeyResponse;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>client_data</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Декодированное из base64url поле <code>clientDataJSON</code> объекта <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse">AuthenticatorAttestationResponse</a>, обёрнутое в <a href="/constructor/dataJSON">dataJSON</a></td></tr><tr><td><strong>attestation_data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Декодированное из base64url поле <code>attestationObject</code> объекта <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse">AuthenticatorAttestationResponse</a></td></tr></tbody></table>

### Тип

[InputPasskeyResponse](/type/InputPasskeyResponse/)

### Связанные страницы

#### [dataJSON](/constructor/dataJSON/)

Представляет объект в формате JSON

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
