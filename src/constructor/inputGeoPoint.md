---
title: "inputGeoPoint (конструктор)"
original: "https://core.telegram.org/constructor/inputGeoPoint"
section: ref
kind: constructor
layout: layout.njk
---

# inputGeoPoint

*Конструктор из схемы TL.*

> Defines a GeoPoint by its coordinates.

## Определение TL

```
inputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| lat | [double](/type/double/) | Latitude |
| long | [double](/type/double/) | Longitude |
| accuracy_radius | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | The estimated horizontal accuracy of the location, in meters; as defined by the sender. |

## Тип

[InputGeoPoint](/type/InputGeoPoint/)
