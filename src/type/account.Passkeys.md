---
title: "account.Passkeys"
original: "https://core.telegram.org/type/account.Passkeys"
section: ref
kind: type
description: "Список ключей доступа », привязанных к текущему аккаунту."
layout: layout.njk
---

# Account.Passkeys

Список [ключей доступа »](/api/passkeys/#list-passkeys), привязанных к текущему аккаунту.

```
account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;

---functions---

account.getPasskeys#ea1f0c52 = account.Passkeys;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.passkeys">account.passkeys</a></td><td>Список <a href="/api/passkeys#list-passkeys">ключей доступа »</a>, привязанных к текущему аккаунту.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getPasskeys">account.getPasskeys</a></td><td>Список ключей доступа, связанных с текущим аккаунтом и пригодных для входа; подробнее о ключах доступа см. <a href="/api/passkeys#list-passkeys">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
