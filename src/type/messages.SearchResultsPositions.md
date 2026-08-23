---
title: "messages.SearchResultsPositions (тип)"
original: "https://core.telegram.org/type/messages.SearchResultsPositions"
section: ref
kind: type
layout: layout.njk
---

# messages.SearchResultsPositions

*Тип из схемы TL.*

> Information about sparse positions of messages

## Определение TL

```
messages.searchResultsPositions#53b22baf count:int positions:Vector<SearchResultsPosition> = messages.SearchResultsPositions;

---functions---

messages.getSearchResultsPositions#9c7f2f10 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int limit:int = messages.SearchResultsPositions;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.searchResultsPositions](/constructor/messages.searchResultsPositions/) | Information about sparse positions of messages |

## Методы

| Method | Описание |
|---|---|
| [messages.getSearchResultsPositions](/method/messages.getSearchResultsPositions/) | Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation. Returns the results in reverse chronological order (i.e., in order of decreasing message_id). |
