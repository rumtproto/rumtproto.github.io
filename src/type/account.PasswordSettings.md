---
title: "account.PasswordSettings (тип)"
original: "https://core.telegram.org/type/account.PasswordSettings"
section: ref
kind: type
layout: layout.njk
---

# account.PasswordSettings

*Тип из схемы TL.*

> Private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on)

## Определение TL

```
account.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;

---functions---

account.getPasswordSettings#9cd4eaf9 password:InputCheckPasswordSRP = account.PasswordSettings;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.passwordSettings](/constructor/account.passwordSettings/) | Private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on) |

## Методы

| Method | Описание |
|---|---|
| [account.getPasswordSettings](/method/account.getPasswordSettings/) | Get private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on) |

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
