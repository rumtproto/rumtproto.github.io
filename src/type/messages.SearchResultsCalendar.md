---
title: "messages.SearchResultsCalendar"
original: "https://core.telegram.org/type/messages.SearchResultsCalendar"
section: ref
kind: type
description: "Информация о найденных сообщениях, отправленных в определённый день"
layout: layout.njk
---

# messages.SearchResultsCalendar

Информация о найденных сообщениях, отправленных в определённый день

```
messages.searchResultsCalendar#147ee23c flags:# inexact:flags.0?true count:int min_date:int min_msg_id:int offset_id_offset:flags.1?int periods:Vector<SearchResultsCalendarPeriod> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SearchResultsCalendar;

---functions---

messages.getSearchResultsCalendar#6aa3f6bd flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int offset_date:int = messages.SearchResultsCalendar;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.searchResultsCalendar">messages.searchResultsCalendar</a></td><td>Информация о найденных сообщениях, отправленных в определённый день</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getSearchResultsCalendar">messages.getSearchResultsCalendar</a></td><td>Возвращает информацию о следующих сообщениях указанного типа в чате с разбивкой по дням.<br><br>Результаты возвращаются в обратном хронологическом порядке.<br>Для последнего возвращённого дня результаты могут быть неполными.</td></tr></tbody></table>
