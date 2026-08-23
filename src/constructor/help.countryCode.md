---
title: "help.countryCode (конструктор)"
original: "https://core.telegram.org/constructor/help.countryCode"
section: ref
kind: constructor
layout: layout.njk
---

# help.countryCode

*Конструктор из схемы TL.*

> Country code and phone number pattern of a specific country

## Определение TL

```
help.countryCode#4203c5ef flags:# country_code:string prefixes:flags.0?Vector<string> patterns:flags.1?Vector<string> = help.CountryCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| country_code | [string](/type/string/) | ISO country code |
| prefixes | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | Possible phone prefixes |
| patterns | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | Phone patterns: for example, XXX XXX XXX |

## Тип

[help.CountryCode](/type/help.CountryCode/)
