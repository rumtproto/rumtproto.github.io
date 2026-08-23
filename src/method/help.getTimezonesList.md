---
title: "help.getTimezonesList (метод)"
original: "https://core.telegram.org/method/help.getTimezonesList"
section: ref
kind: method
layout: layout.njk
---

# help.getTimezonesList

*Метод из схемы TL.*

> Returns timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](https://core.telegram.org/api/business#opening-hours).

## Определение TL

```
help.timezonesListNotModified#970708cc = help.TimezonesList;
help.timezonesList#7b74ed71 timezones:Vector<Timezone> hash:int = help.TimezonesList;
---functions---
help.getTimezonesList#49b30240 hash:int = help.TimezonesList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[help.TimezonesList](/type/help.TimezonesList/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
