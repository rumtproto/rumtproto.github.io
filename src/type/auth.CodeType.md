---
title: "auth.CodeType"
original: "https://core.telegram.org/type/auth.CodeType"
section: ref
kind: type
description: "Тип кода подтверждения, который будет отправлен следующим при вызове метода resendCode"
layout: layout.njk
---

# auth.CodeType

Тип кода подтверждения, который будет отправлен следующим при вызове метода resendCode

```
auth.codeTypeSms#72a3158c = auth.CodeType;
auth.codeTypeCall#741cd3e3 = auth.CodeType;
auth.codeTypeFlashCall#226ccefb = auth.CodeType;
auth.codeTypeMissedCall#d61ad6ee = auth.CodeType;
auth.codeTypeFragmentSms#6ed998c = auth.CodeType;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/auth.codeTypeSms">auth.codeTypeSms</a></td><td>В следующий раз код аутентификации будет доставлен через немедленно сброшенный входящий звонок.</td></tr><tr><td><a href="/constructor/auth.codeTypeCall">auth.codeTypeCall</a></td><td>В следующий раз код аутентификации будет доставлен через исходящий телефонный звонок.</td></tr><tr><td><a href="/constructor/auth.codeTypeFlashCall">auth.codeTypeFlashCall</a></td><td>В следующий раз код аутентификации будет доставлен через немедленно сброшенный входящий звонок.</td></tr><tr><td><a href="/constructor/auth.codeTypeMissedCall">auth.codeTypeMissedCall</a></td><td>В следующий раз код аутентификации будет доставлен через немедленно сброшенный входящий звонок, который пользователь обрабатывает вручную.</td></tr><tr><td><a href="/constructor/auth.codeTypeFragmentSms">auth.codeTypeFragmentSms</a></td><td>В следующий раз код аутентификации будет доставлен через <a href="https://fragment.com">fragment.com</a></td></tr></tbody></table>
