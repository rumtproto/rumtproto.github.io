---
title: "help.Country (тип)"
original: "https://core.telegram.org/type/help.Country"
section: ref
kind: type
layout: layout.njk
---

# help.Country

*Тип из схемы TL.*

> Name, ISO code, localized name and phone codes/patterns of a specific country

## Определение TL

```
help.country#c3878e23 flags:# hidden:flags.0?true iso2:string default_name:string name:flags.1?string country_codes:Vector<help.CountryCode> = help.Country;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.country](/constructor/help.country/) | Name, ISO code, localized name and phone codes/patterns of a specific country |
