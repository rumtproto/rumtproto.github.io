---
title: "help.getPassportConfig (метод)"
original: "https://core.telegram.org/method/help.getPassportConfig"
section: ref
kind: method
layout: layout.njk
---

# help.getPassportConfig

*Метод из схемы TL.*

> Get [passport](https://core.telegram.org/passport) configuration

## Определение TL

```
help.passportConfigNotModified#bfb9f457 = help.PassportConfig;
help.passportConfig#a098d6af hash:int countries_langs:DataJSON = help.PassportConfig;
---functions---
help.getPassportConfig#c661ad08 hash:int = help.PassportConfig;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[help.PassportConfig](/type/help.PassportConfig/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
