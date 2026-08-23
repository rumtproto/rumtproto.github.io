---
title: "DefaultHistoryTTL (тип)"
original: "https://core.telegram.org/type/DefaultHistoryTTL"
section: ref
kind: type
layout: layout.njk
---

# DefaultHistoryTTL

*Тип из схемы TL.*

> Contains info about the default value of the Time-To-Live setting, applied to all new chats.

## Определение TL

```
defaultHistoryTTL#43b46b20 period:int = DefaultHistoryTTL;

---functions---

messages.getDefaultHistoryTTL#658b7188 = DefaultHistoryTTL;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [defaultHistoryTTL](/constructor/defaultHistoryTTL/) | Contains info about the default value of the Time-To-Live setting, applied to all new chats. |

## Методы

| Method | Описание |
|---|---|
| [messages.getDefaultHistoryTTL](/method/messages.getDefaultHistoryTTL/) | Gets the default value of the Time-To-Live setting, applied to all new chats. |
