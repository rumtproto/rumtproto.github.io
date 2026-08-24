---
title: "account.passkeys"
original: "https://core.telegram.org/constructor/account.passkeys"
section: ref
kind: constructor
description: "Список ключей доступа », привязанных к текущему аккаунту."
layout: layout.njk
---

# account.passkeys

Список [ключей доступа »](/api/passkeys/#list-passkeys), привязанных к текущему аккаунту.

```
account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>passkeys</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Passkey">Passkey</a>&gt;</td><td>Список ключей доступа, которыми можно войти в текущий аккаунт</td></tr></tbody></table>

### Тип

[account.Passkeys](/type/account.Passkeys/)

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
