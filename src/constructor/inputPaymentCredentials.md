---
title: "inputPaymentCredentials (конструктор)"
original: "https://core.telegram.org/constructor/inputPaymentCredentials"
section: ref
kind: constructor
layout: layout.njk
---

# inputPaymentCredentials

*Конструктор из схемы TL.*

> Payment credentials

## Определение TL

```
inputPaymentCredentials#3417d728 flags:# save:flags.0?true data:DataJSON = InputPaymentCredentials;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| save | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Save payment credential for future use |
| data | [DataJSON](/type/DataJSON/) | Payment credentials |

## Тип

[InputPaymentCredentials](/type/InputPaymentCredentials/)
