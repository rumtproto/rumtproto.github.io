---
title: "inputMessageCallbackQuery (конструктор)"
original: "https://core.telegram.org/constructor/inputMessageCallbackQuery"
section: ref
kind: constructor
layout: layout.njk
---

# inputMessageCallbackQuery

*Конструктор из схемы TL.*

> Used by bots for fetching information about the message that originated a callback query

## Определение TL

```
inputMessageCallbackQuery#acfa1a7e id:int query_id:long = InputMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [int](/type/int/) | Message ID |
| query_id | [long](/type/long/) | Callback query ID |

## Тип

[InputMessage](/type/InputMessage/)
