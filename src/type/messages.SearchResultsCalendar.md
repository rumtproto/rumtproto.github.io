---
title: "messages.SearchResultsCalendar (тип)"
original: "https://core.telegram.org/type/messages.SearchResultsCalendar"
section: ref
kind: type
layout: layout.njk
---

# messages.SearchResultsCalendar

*Тип из схемы TL.*

> Information about found messages sent on a specific day

## Определение TL

```
messages.searchResultsCalendar#147ee23c flags:# inexact:flags.0?true count:int min_date:int min_msg_id:int offset_id_offset:flags.1?int periods:Vector<SearchResultsCalendarPeriod> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SearchResultsCalendar;

---functions---

messages.getSearchResultsCalendar#6aa3f6bd flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int offset_date:int = messages.SearchResultsCalendar;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) | Information about found messages sent on a specific day |

## Методы

| Method | Описание |
|---|---|
| [messages.getSearchResultsCalendar](/method/messages.getSearchResultsCalendar/) | Returns information about the next messages of the specified type in the chat split by days. Returns the results in reverse chronological order. Can return partial results for the last returned day. |
