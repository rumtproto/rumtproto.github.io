---
title: "inputAppEvent (конструктор)"
original: "https://core.telegram.org/constructor/inputAppEvent"
section: ref
kind: constructor
layout: layout.njk
---

# inputAppEvent

*Конструктор из схемы TL.*

> Event that occurred in the application.

## Определение TL

```
inputAppEvent#1d1b1245 time:double type:string peer:long data:JSONValue = InputAppEvent;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| time | [double](/type/double/) | Client's exact timestamp for the event |
| type | [string](/type/string/) | Type of event |
| peer | [long](/type/long/) | Arbitrary numeric value for more convenient selection of certain event types, or events referring to a certain object |
| data | [JSONValue](/type/JSONValue/) | Details of the event |

## Тип

[InputAppEvent](/type/InputAppEvent/)
