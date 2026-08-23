---
title: "BusinessWeeklyOpen (тип)"
original: "https://core.telegram.org/type/BusinessWeeklyOpen"
section: ref
kind: type
layout: layout.njk
---

# BusinessWeeklyOpen

*Тип из схемы TL.*

> A time interval, indicating the opening hours of a [Telegram Business](https://core.telegram.org/api/business#opening-hours).

## Определение TL

```
businessWeeklyOpen#120b1ab9 start_minute:int end_minute:int = BusinessWeeklyOpen;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [businessWeeklyOpen](/constructor/businessWeeklyOpen/) | A time interval, indicating the opening hours of a business. Note that opening hours specified by the user must be appropriately validated and transformed before uploading them to the server, as specified [here »](https://core.telegram.org/api/business#opening-hours). |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
