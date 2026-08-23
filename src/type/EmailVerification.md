---
title: "EmailVerification (тип)"
original: "https://core.telegram.org/type/EmailVerification"
section: ref
kind: type
layout: layout.njk
---

# EmailVerification

*Тип из схемы TL.*

> Email verification code or token

## Определение TL

```
emailVerificationCode#922e55a9 code:string = EmailVerification;
emailVerificationGoogle#db909ec2 token:string = EmailVerification;
emailVerificationApple#96d074fd token:string = EmailVerification;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [emailVerificationCode](/constructor/emailVerificationCode/) | Email verification code |
| [emailVerificationGoogle](/constructor/emailVerificationGoogle/) | Google ID email verification token |
| [emailVerificationApple](/constructor/emailVerificationApple/) | Apple ID email verification token |
