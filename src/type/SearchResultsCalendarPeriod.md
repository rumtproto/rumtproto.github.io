---
title: "SearchResultsCalendarPeriod (тип)"
original: "https://core.telegram.org/type/SearchResultsCalendarPeriod"
section: ref
kind: type
layout: layout.njk
---

# SearchResultsCalendarPeriod

*Тип из схемы TL.*

> Information about found messages sent on a specific day, used to split the `messages` in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) constructors by days.

## Определение TL

```
searchResultsCalendarPeriod#c9b0539f date:int min_msg_id:int max_msg_id:int count:int = SearchResultsCalendarPeriod;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [searchResultsCalendarPeriod](/constructor/searchResultsCalendarPeriod/) | Information about found messages sent on a specific day, used to split the messages in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) constructors by days. Multiple searchResultsCalendarPeriod constructors are returned in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/), each containing information about the first, last and total number of messages matching the filter that were sent on a specific day. |

## Related pages

#### [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/)

Information about found messages sent on a specific day
