---
title: "messages.affectedHistory (конструктор)"
original: "https://core.telegram.org/constructor/messages.affectedHistory"
section: ref
kind: constructor
layout: layout.njk
---

# messages.affectedHistory

*Конструктор из схемы TL.*

> Affected part of communication history with the user or in a chat.

## Определение TL

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| pts | [int](/type/int/) | Number of events occurred in a text box |
| pts_count | [int](/type/int/) | Number of affected events |
| offset | [int](/type/int/) | If a parameter contains positive value, it is necessary to repeat the method call using the given value; during the proceeding of all the history the value itself shall gradually decrease |

## Тип

[messages.AffectedHistory](/type/messages.AffectedHistory/)
