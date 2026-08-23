---
title: "nearestDc (конструктор)"
original: "https://core.telegram.org/constructor/nearestDc"
section: ref
kind: constructor
layout: layout.njk
---

# nearestDc

*Конструктор из схемы TL.*

> Nearest data center, according to geo-ip.

## Определение TL

```
nearestDc#8e1a1775 country:string this_dc:int nearest_dc:int = NearestDc;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| country | [string](/type/string/) | Country code determined by geo-ip |
| this_dc | [int](/type/int/) | Number of current data center |
| nearest_dc | [int](/type/int/) | Number of nearest data center |

## Тип

[NearestDc](/type/NearestDc/)
