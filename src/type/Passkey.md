---
title: "Passkey"
original: "https://core.telegram.org/type/Passkey"
section: ref
kind: type
description: "Понятные человеку сведения о ключе доступа, привязанном к аккаунту; возвращаются при создании ключа доступа » или получении списка ключей доступа »."
layout: layout.njk
---

# Passkey

Понятные человеку сведения о ключе доступа, привязанном к аккаунту; возвращаются при [создании ключа доступа »](/api/passkeys/#creating-a-passkey) или [получении списка ключей доступа »](/api/passkeys/#list-passkeys).

```
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;

---functions---

account.registerPasskey#55b41fd6 credential:InputPasskeyCredential = Passkey;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/passkey">passkey</a></td><td>[@term:passkey] Понятные человеку сведения о ключе доступа, привязанном к аккаунту; возвращаются при <a href="/api/passkeys#creating-a-passkey">создании ключа доступа »</a> или <a href="/api/passkeys#list-passkeys">получении списка ключей доступа »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.registerPasskey">account.registerPasskey</a></td><td>Завершить регистрацию ключа доступа для текущего аккаунта; подробнее о полном порядке действий см. <a href="/api/passkeys#creating-a-passkey">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
