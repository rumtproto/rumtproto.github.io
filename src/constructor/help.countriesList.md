---
title: "help.countriesList (конструктор)"
original: "https://core.telegram.org/constructor/help.countriesList"
section: ref
kind: constructor
layout: layout.njk
---

# help.countriesList

*Конструктор из схемы TL.*

> Name, ISO code, localized name and phone codes/patterns of all available countries

## Определение TL

```
help.countriesList#87d0759e countries:Vector<help.Country> hash:int = help.CountriesList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| countries | [Vector](https://core.telegram.org/type/Vector%20t)<[help.Country](/type/help.Country/)> | Name, ISO code, localized name and phone codes/patterns of all available countries |
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Тип

[help.CountriesList](/type/help.CountriesList/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
