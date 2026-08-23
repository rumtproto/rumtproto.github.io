---
title: "help.passportConfig (конструктор)"
original: "https://core.telegram.org/constructor/help.passportConfig"
section: ref
kind: constructor
layout: layout.njk
---

# help.passportConfig

*Конструктор из схемы TL.*

> Telegram [passport](https://core.telegram.org/passport) configuration

## Определение TL

```
help.passportConfig#a098d6af hash:int countries_langs:DataJSON = help.PassportConfig;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| countries_langs | [DataJSON](/type/DataJSON/) | Localization |

## Тип

[help.PassportConfig](/type/help.PassportConfig/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
