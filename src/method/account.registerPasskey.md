---
title: "account.registerPasskey"
original: "https://core.telegram.org/method/account.registerPasskey"
section: ref
kind: method
description: "Завершить регистрацию ключа доступа для текущего аккаунта; подробнее о полном порядке действий см. здесь »."
layout: layout.njk
---

# account.registerPasskey

Завершить регистрацию ключа доступа для текущего аккаунта; подробнее о полном порядке действий см. [здесь »](/api/passkeys/#creating-a-passkey).

```
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;
---functions---
account.registerPasskey#55b41fd6 credential:InputPasskeyCredential = Passkey;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>credential</strong></td><td style="text-align: center;"><a href="/type/InputPasskeyCredential">InputPasskeyCredential</a></td><td>Результат регистрации.</td></tr></tbody></table>

### Результат

[Passkey](/type/Passkey/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CREDENTIAL_INVALID</td><td>Указанные платёжные реквизиты недействительны.</td></tr><tr><td>400</td><td>PASSKEY_ORIGIN_MISMATCH</td><td>Сторонние клиенты пока не поддерживают passkey, даже при смене origin.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
