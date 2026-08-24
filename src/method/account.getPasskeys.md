---
title: "account.getPasskeys"
original: "https://core.telegram.org/method/account.getPasskeys"
section: ref
kind: method
description: "Получить список ключей доступа, привязанных к текущему аккаунту и пригодных для входа; подробнее о ключах доступа см. здесь »."
layout: layout.njk
---

# account.getPasskeys

Получить список ключей доступа, привязанных к текущему аккаунту и пригодных для входа; подробнее о ключах доступа [см. здесь »](/api/passkeys/#list-passkeys).

```
account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;
---functions---
account.getPasskeys#ea1f0c52 = account.Passkeys;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[account.Passkeys](/type/account.Passkeys/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
