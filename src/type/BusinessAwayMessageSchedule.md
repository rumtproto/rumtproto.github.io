---
title: "BusinessAwayMessageSchedule (тип)"
original: "https://core.telegram.org/type/BusinessAwayMessageSchedule"
section: ref
kind: type
layout: layout.njk
---

# BusinessAwayMessageSchedule

*Тип из схемы TL.*

> Specifies when should the [Telegram Business away messages](https://core.telegram.org/api/business#away-messages) be sent.

## Определение TL

```
businessAwayMessageScheduleAlways#c9b9e2b9 = BusinessAwayMessageSchedule;
businessAwayMessageScheduleOutsideWorkHours#c3f2f501 = BusinessAwayMessageSchedule;
businessAwayMessageScheduleCustom#cc4d9ecc start_date:int end_date:int = BusinessAwayMessageSchedule;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [businessAwayMessageScheduleAlways](/constructor/businessAwayMessageScheduleAlways/) | Always send [Telegram Business away messages](https://core.telegram.org/api/business#away-messages) to users writing to us in private. |
| [businessAwayMessageScheduleOutsideWorkHours](/constructor/businessAwayMessageScheduleOutsideWorkHours/) | Send [Telegram Business away messages](https://core.telegram.org/api/business#away-messages) to users writing to us in private outside of the configured [Telegram Business working hours](https://core.telegram.org/api/business#opening-hours). |
| [businessAwayMessageScheduleCustom](/constructor/businessAwayMessageScheduleCustom/) | Send [Telegram Business away messages](https://core.telegram.org/api/business#away-messages) to users writing to us in private in the specified time span. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
