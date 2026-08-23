---
title: "geoPoint (конструктор)"
original: "https://core.telegram.org/constructor/geoPoint"
section: ref
kind: constructor
layout: layout.njk
---

# geoPoint

*Конструктор из схемы TL.*

> GeoPoint.

## Определение TL

```
geoPoint#b2a2f663 flags:# long:double lat:double access_hash:long accuracy_radius:flags.0?int = GeoPoint;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| long | [double](/type/double/) | Longitude |
| lat | [double](/type/double/) | Latitude |
| access_hash | [long](/type/long/) | Access hash |
| accuracy_radius | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | The estimated horizontal accuracy of the location, in meters; as defined by the sender. |

## Тип

[GeoPoint](/type/GeoPoint/)
