---
title: "account.deletePasskey"
original: "https://core.telegram.org/method/account.deletePasskey"
section: ref
kind: method
description: "Удалить ключ доступа, привязанный к текущему аккаунту; подробнее см. здесь »."
layout: layout.njk
---

# account.deletePasskey

Удалить ключ доступа, привязанный к текущему аккаунту; подробнее см. [здесь »](/api/passkeys/#delete-passkeys).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.deletePasskey#f5b5563f id:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор удаляемого ключа доступа, взятый из <a href="/constructor/passkey">passkey</a>.<code>id</code>; обычно получается с помощью <a href="/method/account.getPasskeys">account.getPasskeys</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [passkey](/constructor/passkey/)

Понятные человеку сведения о ключе доступа, привязанном к аккаунту; возвращаются при [создании ключа доступа »](/api/passkeys/#creating-a-passkey) или [получении списка ключей доступа »](/api/passkeys/#list-passkeys).

#### [account.getPasskeys](/method/account.getPasskeys/)

Получить список ключей доступа, привязанных к текущему аккаунту и пригодных для входа; подробнее о ключах доступа [см. здесь »](/api/passkeys/#list-passkeys).

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
