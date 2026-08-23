---
title: "geoPointAddress (конструктор)"
original: "https://core.telegram.org/constructor/geoPointAddress"
section: ref
kind: constructor
layout: layout.njk
---

# geoPointAddress

*Конструктор из схемы TL.*

> Address optionally associated to a [geoPoint](/constructor/geoPoint/).

## Определение TL

```
geoPointAddress#de4c5d93 flags:# country_iso2:string state:flags.0?string city:flags.1?string street:flags.2?string = GeoPointAddress;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| country_iso2 | [string](/type/string/) | Two-letter ISO 3166-1 alpha-2 country code |
| state | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | State |
| city | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | City |
| street | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Street |

## Тип

[GeoPointAddress](/type/GeoPointAddress/)

## Related pages

#### [geoPoint](/constructor/geoPoint/)

GeoPoint.
