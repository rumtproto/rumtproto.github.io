---
title: "inputMediaVenue (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaVenue"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaVenue

*Конструктор из схемы TL.*

> Can be used to send a venue geolocation.

## Определение TL

```
inputMediaVenue#c13d1c11 geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| geo_point | [InputGeoPoint](/type/InputGeoPoint/) | Geolocation |
| title | [string](/type/string/) | Venue name |
| address | [string](/type/string/) | Physical address of the venue |
| provider | [string](/type/string/) | Venue provider: currently only "foursquare" and "gplaces" (Google Places) need to be supported |
| venue_id | [string](/type/string/) | Venue ID in the provider's database |
| venue_type | [string](/type/string/) | Venue type in the provider's database |

## Тип

[InputMedia](/type/InputMedia/)
