---
title: "businessWeeklyOpen (конструктор)"
original: "https://core.telegram.org/constructor/businessWeeklyOpen"
section: ref
kind: constructor
layout: layout.njk
---

# businessWeeklyOpen

*Конструктор из схемы TL.*

> A time interval, indicating the opening hours of a business.
> Note that opening hours specified by the user must be appropriately validated and transformed before uploading them to the server, as specified [here »](https://core.telegram.org/api/business#opening-hours).

## Определение TL

```
businessWeeklyOpen#120b1ab9 start_minute:int end_minute:int = BusinessWeeklyOpen;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| start_minute | [int](/type/int/) | Start minute in minutes of the week, 0 to 7*24*60 inclusively. |
| end_minute | [int](/type/int/) | End minute in minutes of the week, 1 to 8*24*60 inclusively (8 and not 7 because this allows to specify intervals that, for example, start on Sunday 21:00 and end on Monday 04:00 (6*24*60+21*60 to 7*24*60+4*60) without passing an invalid end_minute < start_minute). See [here »](https://core.telegram.org/api/business#opening-hours) for more info. |

## Тип

[BusinessWeeklyOpen](/type/BusinessWeeklyOpen/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
