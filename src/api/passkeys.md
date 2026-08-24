---
title: "Вход по passkey"
original: "https://core.telegram.org/api/passkeys"
section: api
description: "Telegram позволяет создать на устройстве passkey (ключ доступа — криптографический ключ, привязанный к устройству), чтобы мгновенно входить в Telegram по PIN-коду или биометрии…"
layout: layout.njk
---

# Вход по passkey

[@term:passkey] Telegram позволяет создать на устройстве passkey (ключ доступа — криптографический ключ, привязанный к устройству), чтобы мгновенно входить в Telegram по PIN-коду или биометрии вроде Face ID и отпечатка пальца — вместо SMS-кода.

### Введение

Вход по passkey в Telegram реализует [стандарт Web Authentication »](https://w3c.github.io/webauthn/) (webauthn); прежде всего обязательно ознакомьтесь с webauthn, прочитав [стандарт »](https://w3c.github.io/webauthn/).

Более простое изложение стандарта доступно на [MDN »](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API).

Проще говоря, passkey состоит из пары ключей — открытого и закрытого: закрытый ключ надёжно хранится на устройстве (например, в анклаве TEE), а открытый отправляется на серверы Telegram.

При входе Telegram присылает challenge, который подписывается локальным закрытым ключом, связанным с аккаунтом: затем Telegram проверяет эту подпись по соответствующему открытому ключу; если проверка проходит успешно, пользователь входит в аккаунт.

Учтите: если пользователь настроил [пароль 2FA](/api/srp/), его всё равно придётся ввести при [входе по passkey »](#logging-in-with-a-passkey).

Passkey работают во всех основных браузерах и на всех основных платформах (и даже вне браузера).

Сервер может предложить пользователю создать passkey с помощью [подсказки SETUP\_PASSKEY »](/api/config/#basic-suggestions).

Поддержку passkey следует включать только в том случае, если [ключ клиентской конфигурации settings\_display\_passkeys »](/api/config/#settings-display-passkeys) равен true.

#### Passkey в неофициальных приложениях Telegram

[@term:RP ID] Учтите, что все официальные приложения Telegram используют в качестве RP ID (идентификатор доверяющей стороны, к домену которой привязан passkey) значение telegram.org при создании и запросе passkey.

Это означает, что неофициальные приложения Telegram вообще не смогут пользоваться passkey, поскольку сейчас сервер запрещает создавать passkey с RP ID, отличным от `telegram.org`.

### Создание passkey

```
account.passkeyRegistrationOptions#e16b5ce1 options:DataJSON = account.PasskeyRegistrationOptions;

inputPasskeyResponseRegister#3e63935c client_data:DataJSON attestation_data:bytes = InputPasskeyResponse;
inputPasskeyCredentialPublicKey#3c27b78f id:string raw_id:string response:InputPasskeyResponse = InputPasskeyCredential;

passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;

---functions---

account.initPasskeyRegistration#429547e8 = account.PasskeyRegistrationOptions;

account.registerPasskey#55b41fd6 credential:InputPasskeyCredential = Passkey;
```

Чтобы создать passkey, привязанный к текущему аккаунту, начните с вызова [account.initPasskeyRegistration](/method/account.initPasskeyRegistration/).

Этот метод вернёт JSON-объект в поле [account.passkeyRegistrationOptions](/constructor/account.passkeyRegistrationOptions/).`options`, содержащий единственный ключ:

-   `publicKey` — содержит JSON-объект [PublicKeyCredentialCreationOptions »](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions) (двоичные свойства в нём заменены строками в кодировке base64url)

Разберите этот JSON, декодируя двоичные поля из base64url, — например, с помощью [PublicKeyCredential.parseCreationOptionsFromJSON](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static).

Затем передайте [PublicKeyCredentialCreationOptions »](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions) в [navigator.credentials.create](https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/create) в браузере (или в эквивалентные API на других платформах): в случае успеха будет сгенерирован новый passkey и возвращён объект [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).

Некоторые платформы (например, Android) вместо этого могут вернуть каноническое JSON-представление [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential): общая структура у него та же, но поля, помеченные ниже как **двоичные**, закодированы в base64url, и в ряде случаев их нужно декодировать из base64url, прежде чем подставлять в конструкторы TL.

Для простоты в документации **всегда подразумевается JSON-представление объекта**, которое в браузерах можно получить простым вызовом [PublicKeyCredential.toJSON](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/toJSON).

Возьмите [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential) и преобразуйте его в [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) следующим образом:

1.  Извлеките объект [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse), содержащийся в [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`response`.  
    На его основе сформируйте [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/) со следующими полями:

    -   [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/).`client_data` — [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse).`clientDataJSON`, **двоичное поле**: декодируйте из base64url, затем передайте значение напрямую в [dataJSON](/constructor/dataJSON/).`data`, а сам [dataJSON](/constructor/dataJSON/) передайте в `client_data`.

        Хотя стандарт webauthn считает `clientDataJSON` двоичным полем, оно содержит корректные данные JSON в кодировке UTF-8, дополнительно закодированные в base64url.

    -   [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/).`attestation_data` — [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse).`attestationObject`, **двоичное поле**: декодируйте из base64url, затем передайте в `attestation_data`.

2.  Затем сформируйте [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) со следующими полями:

    -   `response` — [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/), сформированный на шаге 1
    -   `id` — [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`id`, **двоичное поле**: передайте напрямую в [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).`id` **без** декодирования из base64url.
    -   `raw_id` — [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`rawId`, **двоичное поле**: передайте напрямую в [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).`raw_id` **без** декодирования из base64url.

Наконец, передайте сформированный [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) в [account.registerPasskey](/method/account.registerPasskey/).

В случае успеха метод привяжет passkey к текущему аккаунту и вернёт конструктор [passkey](/constructor/passkey/), содержащий понятную человеку информацию о добавленном passkey.

С этого момента passkey можно использовать, чтобы [безопасно входить в аккаунт без кода подтверждения »](#logging-in-with-a-passkey): пользователь аутентифицируется закрытым ключом, надёжно и локально хранящимся в passkey.

Учтите: если пользователь настроил [пароль 2FA](/api/srp/), его всё равно придётся ввести даже при входе по passkey.

[Ключ клиентской конфигурации passkeys\_account\_passkeys\_max »](/api/config/#passkeys-account-passkeys-max) задаёт максимальное число passkey, которые можно привязать к одному аккаунту.

### Список passkey

```
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;

account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;

---functions---

account.getPasskeys#ea1f0c52 = account.Passkeys;
```

Метод [account.getPasskeys](/method/account.getPasskeys/) возвращает список passkey, которыми можно войти в текущий аккаунт.

Каждый passkey описывается конструктором [passkey](/constructor/passkey/), который содержит имя passkey, его идентификатор, [пользовательский эмодзи »](/api/custom-emoji/), используемый как значок (обычно совпадает со значком менеджера паролей), дату создания и дату последнего использования.

### Удаление passkey

```
---functions---

account.deletePasskey#f5b5563f id:string = Bool;
```

Чтобы удалить passkey, привязанный к текущему аккаунту, используйте [account.deletePasskey](/method/account.deletePasskey/), передав идентификатор passkey (обычно его получают через [account.getPasskeys](/method/account.getPasskeys/), как описано [выше »](#list-passkeys)).

### Вход с помощью passkey

```
auth.passkeyLoginOptions#e2037789 options:DataJSON = auth.PasskeyLoginOptions;

inputPasskeyResponseLogin#c31fc14a client_data:DataJSON authenticator_data:bytes signature:bytes user_handle:string = InputPasskeyResponse;
inputPasskeyCredentialPublicKey#3c27b78f id:string raw_id:string response:InputPasskeyResponse = InputPasskeyCredential;

auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;

---functions---

auth.initPasskeyLogin#518ad0b7 api_id:int api_hash:string = auth.PasskeyLoginOptions;

auth.finishPasskeyLogin#9857ad07 flags:# credential:InputPasskeyCredential from_dc_id:flags.0?int from_auth_key_id:flags.0?long = auth.Authorization;
```

Чтобы войти с помощью passkey, начните с вызова [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/).

Сохраните идентификатор дата-центра (DC), через который был отправлен этот запрос, в переменную `initDcId` — она понадобится позже.

Этот метод вернёт JSON-объект в поле [auth.passkeyLoginOptions](/constructor/auth.passkeyLoginOptions/).`options`, содержащий единственный ключ:

-   `publicKey` — содержит JSON-объект [PublicKeyCredentialRequestOptions »](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions) (свойства-буферы в нём заменены строками в кодировке base64url)

Разберите этот JSON, декодируя двоичные поля из base64url, — например, с помощью [PublicKeyCredential.parseRequestOptionsFromJSON](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static).

Затем передайте [PublicKeyCredentialRequestOptions »](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions) в [navigator.credentials.get](https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/get) в браузере (или в эквивалентные API на других платформах).

При этом пользователю будет предложено выбрать passkey Telegram (то есть выбрать аккаунт, в который выполняется вход), и он вернётся в виде объекта [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).

Некоторые платформы (например, Android) вместо этого возвращают каноническое JSON-представление [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential): общая структура у него та же, но поля, помеченные ниже как **двоичные**, закодированы в base64url, и в ряде случаев их нужно декодировать из base64url, прежде чем подставлять в конструкторы TL.

Возьмите [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential) и преобразуйте его в [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/), выполнив следующие шаги:

1.  Извлеките объект [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse), содержащийся в [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`response`.  
    На его основе сформируйте [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/) со следующими полями:

    -   [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/).`client_data` — [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse).`clientDataJSON`, **двоичное поле**: декодируйте из base64url, затем передайте значение напрямую в [dataJSON](/constructor/dataJSON/).`data`, а сам [dataJSON](/constructor/dataJSON/) передайте в `client_data`.

        Хотя стандарт webauthn считает `clientDataJSON` двоичным полем, оно содержит корректные данные JSON в кодировке UTF-8, дополнительно закодированные в base64url.

    -   [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/).`authenticator_data` — [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse).`authenticatorData`, **двоичное поле**: декодируйте из base64url, затем передайте в `authenticator_data`.

    -   [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/).`signature` — [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse).`signature`, **двоичное поле**: декодируйте из base64url, затем передайте в `signature`.

    -   [@term:user_handle] [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/).`user_handle` — [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse).`userHandle`, **двоичное поле** (`user_handle` — дескриптор пользователя, в котором Telegram передаёт идентификаторы дата-центра и аккаунта): декодируйте из base64url, затем передайте в `user_handle`.

2.  Затем сформируйте [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) со следующими полями:

    -   `response` — [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/), сформированный на шаге 1
    -   `id` — [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`id`, **двоичное поле**: передайте напрямую в [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).`id` **без** декодирования из base64url.
    -   `raw_id` — [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`rawId`, **двоичное поле**: передайте напрямую в [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).`raw_id` **без** декодирования из base64url.
3.  Возьмите `user_handle`, сохранённый в сформированном [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/) ([inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).`response`.`user_handle`), и разберите его по строке формата printf/scanf: `%d:%lld`.

    Дескриптор пользователя состоит из идентификатора дата-центра (32-битное целое) и идентификатора пользователя (64-битное длинное целое), разделённых двоеточием (`:`): сохраните эти значения в отдельные переменные (`userDcId` и `userId`) — они понадобятся позже.

Если клиент уже авторизован в аккаунте, идентификатор пользователя которого равен `userId`, предложите пользователю выбрать другой passkey (если он есть) и начните процедуру входа заново.

В противном случае отправьте запрос [auth.finishPasskeyLogin](/method/auth.finishPasskeyLogin/) в дата-центр `userDcId`, передав следующие аргументы:

-   `credential` — построенный выше [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).
-   `from_dc_id` — заполняйте это поле значением `initDcId` тогда и только тогда, когда `userDcId != initDcId` (то есть когда `userDcId` **не** совпадает с идентификатором дата-центра, через который вызывался [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/))
-   `from_auth_key_id` — тогда и только тогда, когда `userDcId != initDcId` (то есть когда `userDcId` **не** совпадает с идентификатором дата-центра, через который вызывался [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/)), укажите в этом поле идентификатор авторизационного ключа соединения с `initDcId` (если используется [PFS](/api/pfs/), возьмите идентификатор постоянного авторизационного ключа).

Метод [auth.finishPasskeyLogin](/method/auth.finishPasskeyLogin/) может вернуть следующие ошибки RPC:

-   `SESSION_PASSWORD_NEEDED` — если пользователь настроил [пароль 2FA](/api/srp/), его всё равно придётся ввести даже при входе с помощью passkey: просто продолжите [обычную процедуру входа с 2FA »](/api/auth/#2fa), чтобы войти в аккаунт.
-   `PASSKEY_CREDENTIAL_NOT_FOUND` — указанный passkey не найден на сервере (например, пользователь мог [удалить его »](#delete-passkeys)).

В случае успеха (за исключением случая с 2FA) пользователь считается вошедшим в аккаунт, а метод сразу возвращает конструктор [auth.authorization](/constructor/auth.authorization/).
