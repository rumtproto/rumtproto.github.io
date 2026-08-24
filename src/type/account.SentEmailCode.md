---
title: "account.SentEmailCode"
original: "https://core.telegram.org/type/account.SentEmailCode"
section: ref
kind: type
description: "Отправленный код подтверждения по электронной почте"
layout: layout.njk
---

# account.SentEmailCode

Отправленный код подтверждения по электронной почте

```
account.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;

---functions---

account.sendVerifyEmailCode#98e037bb purpose:EmailVerifyPurpose email:string = account.SentEmailCode;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.sentEmailCode">account.sentEmailCode</a></td><td>Отправленный код из письма</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.sendVerifyEmailCode">account.sendVerifyEmailCode</a></td><td>Отправить код подтверждения по электронной почте.</td></tr></tbody></table>
