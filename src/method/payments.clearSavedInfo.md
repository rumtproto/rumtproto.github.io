---
title: "payments.clearSavedInfo (метод)"
original: "https://core.telegram.org/method/payments.clearSavedInfo"
section: ref
kind: method
layout: layout.njk
---

# payments.clearSavedInfo

*Метод из схемы TL.*

> Clear saved payment information

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.clearSavedInfo#d83d70c1 flags:# credentials:flags.0?true info:flags.1?true = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| credentials | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Remove saved payment credentials |
| info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Clear the last order settings saved by the user |

## Результат

[Bool](/type/Bool/)

## Only users can use this method
