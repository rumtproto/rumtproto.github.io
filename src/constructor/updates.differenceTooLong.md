---
title: "updates.differenceTooLong (конструктор)"
original: "https://core.telegram.org/constructor/updates.differenceTooLong"
section: ref
kind: constructor
layout: layout.njk
---

# updates.differenceTooLong

*Конструктор из схемы TL.*

> The difference is [too long](https://core.telegram.org/api/updates/#recovering-gaps), and the specified state must be used to refetch updates.

## Определение TL

```
updates.differenceTooLong#4afe8f6d pts:int = updates.Difference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| pts | [int](/type/int/) | The new state to use. |

## Тип

[updates.Difference](/type/updates.Difference/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
