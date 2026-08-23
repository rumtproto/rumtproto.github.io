---
title: "timezone (конструктор)"
original: "https://core.telegram.org/constructor/timezone"
section: ref
kind: constructor
layout: layout.njk
---

# timezone

*Конструктор из схемы TL.*

> Timezone information.

## Определение TL

```
timezone#ff9289f5 id:string name:string utc_offset:int = Timezone;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [string](/type/string/) | Unique timezone ID. |
| name | [string](/type/string/) | Human-readable and localized timezone name. |
| utc_offset | [int](/type/int/) | UTC offset in seconds, which may be displayed in hh:mm format by the client together with the human-readable name (i.e. $name UTC -01:00). |

## Тип

[Timezone](/type/Timezone/)
