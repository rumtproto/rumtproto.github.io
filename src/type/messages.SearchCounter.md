---
title: "Messages.SearchCounter (тип)"
original: "https://core.telegram.org/type/messages.SearchCounter"
section: ref
kind: type
layout: layout.njk
---

# Messages.SearchCounter

*Тип из схемы TL.*

> Number of results that would be returned by a search

## Определение TL

```
messages.searchCounter#e844ebff flags:# inexact:flags.1?true filter:MessagesFilter count:int = messages.SearchCounter;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.searchCounter](/constructor/messages.searchCounter/) | Indicates how many results would be found by a [messages.search](/method/messages.search/) call with the same parameters |
