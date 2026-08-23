---
title: "account.initPasskeyRegistration (метод)"
original: "https://core.telegram.org/method/account.initPasskeyRegistration"
section: ref
kind: method
layout: layout.njk
---

# account.initPasskeyRegistration

*Метод из схемы TL.*

> Initialize passkey registration for the current account, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow.

## Определение TL

```
account.passkeyRegistrationOptions#e16b5ce1 options:DataJSON = account.PasskeyRegistrationOptions;
---functions---
account.initPasskeyRegistration#429547e8 = account.PasskeyRegistrationOptions;
```

## Параметры

This constructor does not require any parameters.

## Результат

[account.PasskeyRegistrationOptions](/type/account.PasskeyRegistrationOptions/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | ACCESS_DENIED | The account was deactivated, or is a bot/service account. |
| 406 | FRESH_RESET_AUTHORISATION_FORBIDDEN | You can't logout other sessions if less than 24 hours have passed since you logged on the current session. |

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
