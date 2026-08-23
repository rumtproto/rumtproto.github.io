---
title: "auth.sentCodeTypeFragmentSms (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCodeTypeFragmentSms

*Конструктор из схемы TL.*

> The code was delivered via [fragment.com](https://fragment.com).

## Определение TL

```
auth.sentCodeTypeFragmentSms#d9565c39 url:string length:int = auth.SentCodeType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| url | [string](/type/string/) | Open the specified URL to log into [fragment.com](https://fragment.com) with the wallet that owns the specified phone number and view the code. |
| length | [int](/type/int/) | Length of the delivered code. |

## Тип

[auth.SentCodeType](/type/auth.SentCodeType/)
