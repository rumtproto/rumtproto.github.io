---
title: "SearchResultsCalendarPeriod"
original: "https://core.telegram.org/type/SearchResultsCalendarPeriod"
section: ref
kind: type
description: "Информация о найденных сообщениях, отправленных в определённый день; используется для разбивки поля messages в конструкторах messages.searchResultsCalendar по дням."
layout: layout.njk
---

# SearchResultsCalendarPeriod

Информация о найденных сообщениях, отправленных в определённый день; используется для разбивки поля `messages` в конструкторах [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) по дням.

```
searchResultsCalendarPeriod#c9b0539f date:int min_msg_id:int max_msg_id:int count:int = SearchResultsCalendarPeriod;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/searchResultsCalendarPeriod">searchResultsCalendarPeriod</a></td><td>Информация о найденных сообщениях, отправленных в определённый день; используется для разбивки поля <code>messages</code> в конструкторах <a href="/constructor/messages.searchResultsCalendar">messages.searchResultsCalendar</a> по дням.<br><br>В <a href="/constructor/messages.searchResultsCalendar">messages.searchResultsCalendar</a> возвращается несколько конструкторов searchResultsCalendarPeriod, каждый из которых содержит сведения о первом, последнем и общем числе сообщений, соответствующих фильтру и отправленных в определённый день.</td></tr></tbody></table>

### Связанные страницы

#### [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/)

Информация о найденных сообщениях, отправленных в определённый день
