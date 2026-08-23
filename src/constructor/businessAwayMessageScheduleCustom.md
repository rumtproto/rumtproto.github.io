---
title: "businessAwayMessageScheduleCustom (конструктор)"
original: "https://core.telegram.org/constructor/businessAwayMessageScheduleCustom"
section: ref
kind: constructor
layout: layout.njk
---

# businessAwayMessageScheduleCustom

*Конструктор из схемы TL.*

> Send [Telegram Business away messages](https://core.telegram.org/api/business#away-messages) to users writing to us in private in the specified time span.

## Определение TL

```
businessAwayMessageScheduleCustom#cc4d9ecc start_date:int end_date:int = BusinessAwayMessageSchedule;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| start_date | [int](/type/int/) | Start date (UNIX timestamp). |
| end_date | [int](/type/int/) | End date (UNIX timestamp). |

## Тип

[BusinessAwayMessageSchedule](/type/BusinessAwayMessageSchedule/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
