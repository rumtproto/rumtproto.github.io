---
title: "messages.chatsSlice (конструктор)"
original: "https://core.telegram.org/constructor/messages.chatsSlice"
section: ref
kind: constructor
layout: layout.njk
---

# messages.chatsSlice

*Конструктор из схемы TL.*

> Partial list of chats, more would have to be fetched with [pagination](https://core.telegram.org/api/offsets)

## Определение TL

```
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of results that were found server-side (not all are included in chats) |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats |

## Тип

[messages.Chats](/type/messages.Chats/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
