---
title: "auth.sentCodeTypeMissedCall (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeMissedCall"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCodeTypeMissedCall

*Конструктор из схемы TL.*

> The code will be sent via a flash phone call, that will be closed immediately. The last digits of the phone number that calls are the code that must be entered manually by the user.

## Определение TL

```
auth.sentCodeTypeMissedCall#82006484 prefix:string length:int = auth.SentCodeType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prefix | [string](/type/string/) | Prefix of the phone number from which the call will be made |
| length | [int](/type/int/) | Length of the verification code |

## Тип

[auth.SentCodeType](/type/auth.SentCodeType/)
