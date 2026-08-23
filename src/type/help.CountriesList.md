---
title: "help.CountriesList (тип)"
original: "https://core.telegram.org/type/help.CountriesList"
section: ref
kind: type
layout: layout.njk
---

# help.CountriesList

*Тип из схемы TL.*

> Name, ISO code, localized name and phone codes/patterns of all available countries

## Определение TL

```
help.countriesListNotModified#93cc1f32 = help.CountriesList;
help.countriesList#87d0759e countries:Vector<help.Country> hash:int = help.CountriesList;

---functions---

help.getCountriesList#735787a8 lang_code:string hash:int = help.CountriesList;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.countriesListNotModified](/constructor/help.countriesListNotModified/) | The country list has not changed |
| [help.countriesList](/constructor/help.countriesList/) | Name, ISO code, localized name and phone codes/patterns of all available countries |

## Методы

| Method | Описание |
|---|---|
| [help.getCountriesList](/method/help.getCountriesList/) | Get name, ISO code, localized name and phone codes/patterns of all available countries |
