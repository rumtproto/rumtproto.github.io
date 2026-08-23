---
title: "secureRequiredType (конструктор)"
original: "https://core.telegram.org/constructor/secureRequiredType"
section: ref
kind: constructor
layout: layout.njk
---

# secureRequiredType

*Конструктор из схемы TL.*

> Required type

## Определение TL

```
secureRequiredType#829d99da flags:# native_names:flags.0?true selfie_required:flags.1?true translation_required:flags.2?true type:SecureValueType = SecureRequiredType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| native_names | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Native names |
| selfie_required | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Is a selfie required |
| translation_required | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Is a translation required |
| type | [SecureValueType](/type/SecureValueType/) | Secure value type |

## Тип

[SecureRequiredType](/type/SecureRequiredType/)
