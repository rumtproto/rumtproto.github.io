---
title: "messageRange (конструктор)"
original: "https://core.telegram.org/constructor/messageRange"
section: ref
kind: constructor
layout: layout.njk
---

# messageRange

*Конструктор из схемы TL.*

> Indicates a range of chat messages

## Определение TL

```
messageRange#ae30253 min_id:int max_id:int = MessageRange;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| min_id | [int](/type/int/) | Start of range (message ID) |
| max_id | [int](/type/int/) | End of range (message ID) |

## Тип

[MessageRange](/type/MessageRange/)
