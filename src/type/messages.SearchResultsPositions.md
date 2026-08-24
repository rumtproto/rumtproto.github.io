---
title: "messages.SearchResultsPositions"
original: "https://core.telegram.org/type/messages.SearchResultsPositions"
section: ref
kind: type
description: "Информация о разреженных позициях сообщений"
layout: layout.njk
---

# messages.SearchResultsPositions

Информация о разреженных позициях сообщений

```
messages.searchResultsPositions#53b22baf count:int positions:Vector<SearchResultsPosition> = messages.SearchResultsPositions;

---functions---

messages.getSearchResultsPositions#9c7f2f10 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int limit:int = messages.SearchResultsPositions;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.searchResultsPositions">messages.searchResultsPositions</a></td><td>Информация о разреженных позициях сообщений</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getSearchResultsPositions">messages.getSearchResultsPositions</a></td><td>Возвращает разреженные позиции сообщений указанного типа в чате для реализации прокрутки общих медиа.<br><br>Результаты возвращаются в обратном хронологическом порядке (то есть по убыванию message_id).</td></tr></tbody></table>
