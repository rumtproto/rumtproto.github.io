---
title: "help.TimezonesList (тип)"
original: "https://core.telegram.org/type/help.TimezonesList"
section: ref
kind: type
layout: layout.njk
---

# help.TimezonesList

*Тип из схемы TL.*

> Timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](https://core.telegram.org/api/business#opening-hours).

## Определение TL

```
help.timezonesListNotModified#970708cc = help.TimezonesList;
help.timezonesList#7b74ed71 timezones:Vector<Timezone> hash:int = help.TimezonesList;

---functions---

help.getTimezonesList#49b30240 hash:int = help.TimezonesList;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.timezonesListNotModified](/constructor/help.timezonesListNotModified/) | The timezone list has not changed. |
| [help.timezonesList](/constructor/help.timezonesList/) | Timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](https://core.telegram.org/api/business#opening-hours). |

## Методы

| Method | Описание |
|---|---|
| [help.getTimezonesList](/method/help.getTimezonesList/) | Returns timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](https://core.telegram.org/api/business#opening-hours). |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
