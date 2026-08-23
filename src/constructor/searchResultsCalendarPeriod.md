---
title: "searchResultsCalendarPeriod (конструктор)"
original: "https://core.telegram.org/constructor/searchResultsCalendarPeriod"
section: ref
kind: constructor
layout: layout.njk
---

# searchResultsCalendarPeriod

*Конструктор из схемы TL.*

> Information about found messages sent on a specific day, used to split the `messages` in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) constructors by days.
> Multiple searchResultsCalendarPeriod constructors are returned in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/), each containing information about the first, last and total number of messages matching the filter that were sent on a specific day.

## Определение TL

```
searchResultsCalendarPeriod#c9b0539f date:int min_msg_id:int max_msg_id:int count:int = SearchResultsCalendarPeriod;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| date | [int](/type/int/) | The day this object is referring to. |
| min_msg_id | [int](/type/int/) | First message ID that was sent on this day. |
| max_msg_id | [int](/type/int/) | Last message ID that was sent on this day. |
| count | [int](/type/int/) | All messages that were sent on this day. |

## Тип

[SearchResultsCalendarPeriod](/type/SearchResultsCalendarPeriod/)

## Related pages

#### [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/)

Information about found messages sent on a specific day
