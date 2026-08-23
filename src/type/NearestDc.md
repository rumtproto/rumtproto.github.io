---
title: "NearestDc (тип)"
original: "https://core.telegram.org/type/NearestDc"
section: ref
kind: type
layout: layout.njk
---

# NearestDc

*Тип из схемы TL.*

> Object contains info on nearest data center.

## Определение TL

```
nearestDc#8e1a1775 country:string this_dc:int nearest_dc:int = NearestDc;

---functions---

help.getNearestDc#1fb33026 = NearestDc;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [nearestDc](/constructor/nearestDc/) | Nearest data center, according to geo-ip. |

## Методы

| Method | Описание |
|---|---|
| [help.getNearestDc](/method/help.getNearestDc/) | Returns info on data center nearest to the user. |
