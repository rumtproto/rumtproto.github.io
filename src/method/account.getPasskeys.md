---
title: "account.getPasskeys (метод)"
original: "https://core.telegram.org/method/account.getPasskeys"
section: ref
kind: method
layout: layout.njk
---

# account.getPasskeys

*Метод из схемы TL.*

> List the passkeys associated to the current account that can be used to log in, see [here »](https://core.telegram.org/api/passkeys#list-passkeys) for more info on passkeys.

## Определение TL

```
account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;
---functions---
account.getPasskeys#ea1f0c52 = account.Passkeys;
```

## Параметры

This constructor does not require any parameters.

## Результат

[account.Passkeys](/type/account.Passkeys/)

## Only users can use this method

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
