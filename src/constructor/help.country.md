---
title: "help.country (конструктор)"
original: "https://core.telegram.org/constructor/help.country"
section: ref
kind: constructor
layout: layout.njk
---

# help.country

*Конструктор из схемы TL.*

> Name, ISO code, localized name and phone codes/patterns of a specific country

## Определение TL

```
help.country#c3878e23 flags:# hidden:flags.0?true iso2:string default_name:string name:flags.1?string country_codes:Vector<help.CountryCode> = help.Country;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| hidden | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this country should not be shown in the list |
| iso2 | [string](/type/string/) | ISO code of country |
| default_name | [string](/type/string/) | Name of the country in the country's language |
| name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Name of the country in the user's language, if different from the original name |
| country_codes | [Vector](https://core.telegram.org/type/Vector%20t)<[help.CountryCode](/type/help.CountryCode/)> | Phone codes/patterns |

## Тип

[help.Country](/type/help.Country/)
