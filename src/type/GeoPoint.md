---
title: "GeoPoint (тип)"
original: "https://core.telegram.org/type/GeoPoint"
section: ref
kind: type
layout: layout.njk
---

# GeoPoint

*Тип из схемы TL.*

> Object defines a GeoPoint.

## Определение TL

```
geoPointEmpty#1117dd5f = GeoPoint;
geoPoint#b2a2f663 flags:# long:double lat:double access_hash:long accuracy_radius:flags.0?int = GeoPoint;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [geoPointEmpty](/constructor/geoPointEmpty/) | Empty constructor. |
| [geoPoint](/constructor/geoPoint/) | GeoPoint. |
