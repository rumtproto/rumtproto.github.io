---
title: "help.getCountriesList (метод)"
original: "https://core.telegram.org/method/help.getCountriesList"
section: ref
kind: method
layout: layout.njk
---

# help.getCountriesList

*Метод из схемы TL.*

> Get name, ISO code, localized name and phone codes/patterns of all available countries

## Определение TL

```
help.countriesListNotModified#93cc1f32 = help.CountriesList;
help.countriesList#87d0759e countries:Vector<help.Country> hash:int = help.CountriesList;
---functions---
help.getCountriesList#735787a8 lang_code:string hash:int = help.CountriesList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_code | [string](/type/string/) | Language code of the current user |
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[help.CountriesList](/type/help.CountriesList/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
