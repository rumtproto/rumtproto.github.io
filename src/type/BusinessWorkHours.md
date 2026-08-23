---
title: "BusinessWorkHours (тип)"
original: "https://core.telegram.org/type/BusinessWorkHours"
section: ref
kind: type
layout: layout.njk
---

# BusinessWorkHours

*Тип из схемы TL.*

> Specifies a set of [Telegram Business opening hours](https://core.telegram.org/api/business#opening-hours).

## Определение TL

```
businessWorkHours#8c92b098 flags:# open_now:flags.0?true timezone_id:string weekly_open:Vector<BusinessWeeklyOpen> = BusinessWorkHours;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [businessWorkHours](/constructor/businessWorkHours/) | Specifies a set of [Telegram Business opening hours](https://core.telegram.org/api/business#opening-hours). |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
