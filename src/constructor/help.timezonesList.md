---
title: "help.timezonesList (конструктор)"
original: "https://core.telegram.org/constructor/help.timezonesList"
section: ref
kind: constructor
layout: layout.njk
---

# help.timezonesList

*Конструктор из схемы TL.*

> Timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](https://core.telegram.org/api/business#opening-hours).

## Определение TL

```
help.timezonesList#7b74ed71 timezones:Vector<Timezone> hash:int = help.TimezonesList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| timezones | [Vector](https://core.telegram.org/type/Vector%20t)<[Timezone](/type/Timezone/)> | Timezones |
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Тип

[help.TimezonesList](/type/help.TimezonesList/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
