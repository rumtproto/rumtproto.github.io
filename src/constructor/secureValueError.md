---
title: "secureValueError (конструктор)"
original: "https://core.telegram.org/constructor/secureValueError"
section: ref
kind: constructor
layout: layout.njk
---

# secureValueError

*Конструктор из схемы TL.*

> Secure value error

## Определение TL

```
secureValueError#869d758f type:SecureValueType hash:bytes text:string = SecureValueError;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [SecureValueType](/type/SecureValueType/) | Type of element which has the issue |
| hash | [bytes](/type/bytes/) | Hash |
| text | [string](/type/string/) | Error message |

## Тип

[SecureValueError](/type/SecureValueError/)
