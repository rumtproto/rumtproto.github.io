---
title: "EmailVerifyPurpose (тип)"
original: "https://core.telegram.org/type/EmailVerifyPurpose"
section: ref
kind: type
layout: layout.njk
---

# EmailVerifyPurpose

*Тип из схемы TL.*

> Email verification purpose

## Определение TL

```
emailVerifyPurposeLoginSetup#4345be73 phone_number:string phone_code_hash:string = EmailVerifyPurpose;
emailVerifyPurposeLoginChange#527d22eb = EmailVerifyPurpose;
emailVerifyPurposePassport#bbf51685 = EmailVerifyPurpose;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [emailVerifyPurposeLoginSetup](/constructor/emailVerifyPurposeLoginSetup/) | Email verification purpose: setup login email |
| [emailVerifyPurposeLoginChange](/constructor/emailVerifyPurposeLoginChange/) | Email verification purpose: change login email |
| [emailVerifyPurposePassport](/constructor/emailVerifyPurposePassport/) | Verify an email for use in [telegram passport](https://core.telegram.org/api/passport) |
