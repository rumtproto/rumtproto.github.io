---
title: "InputGeoPoint (тип)"
original: "https://core.telegram.org/type/InputGeoPoint"
section: ref
kind: type
layout: layout.njk
---

# InputGeoPoint

*Тип из схемы TL.*

> Defines a GeoPoint.

## Определение TL

```
inputGeoPointEmpty#e4c123d6 = InputGeoPoint;
inputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputGeoPointEmpty](/constructor/inputGeoPointEmpty/) | Empty GeoPoint constructor. |
| [inputGeoPoint](/constructor/inputGeoPoint/) | Defines a GeoPoint by its coordinates. |
