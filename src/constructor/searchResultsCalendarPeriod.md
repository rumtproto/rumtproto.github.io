---
title: "searchResultsCalendarPeriod"
original: "https://core.telegram.org/constructor/searchResultsCalendarPeriod"
section: ref
kind: constructor
description: "Информация о найденных сообщениях, отправленных в определённый день; используется для разбивки поля messages в конструкторах messages.searchResultsCalendar по дням."
layout: layout.njk
---

# searchResultsCalendarPeriod

Информация о найденных сообщениях, отправленных в определённый день; используется для разбивки поля `messages` в конструкторах [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) по дням.

В [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) возвращается несколько конструкторов searchResultsCalendarPeriod, каждый из которых содержит сведения о первом и последнем сообщении, подходящем под фильтр и отправленном в конкретный день, а также об их общем числе.

```
searchResultsCalendarPeriod#c9b0539f date:int min_msg_id:int max_msg_id:int count:int = SearchResultsCalendarPeriod;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>День, к которому относится этот объект.</td></tr><tr><td><strong>min_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор первого сообщения, отправленного в этот день.</td></tr><tr><td><strong>max_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор последнего сообщения, отправленного в этот день.</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Все сообщения, отправленные в этот день.</td></tr></tbody></table>

### Тип

[SearchResultsCalendarPeriod](/type/SearchResultsCalendarPeriod/)

### Связанные страницы

#### [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/)

Информация о найденных сообщениях, отправленных в определённый день
