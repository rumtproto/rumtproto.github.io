---
title: "messageMediaVenue (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaVenue"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaVenue

*Конструктор из схемы TL.*

> Venue

## Определение TL

```
messageMediaVenue#2ec0533f geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| geo | [GeoPoint](/type/GeoPoint/) | Geolocation of venue |
| title | [string](/type/string/) | Venue name |
| address | [string](/type/string/) | Address |
| provider | [string](/type/string/) | Venue provider: currently only "foursquare" and "gplaces" (Google Places) need to be supported |
| venue_id | [string](/type/string/) | Venue ID in the provider's database |
| venue_type | [string](/type/string/) | Venue type in the provider's database |

## Тип

[MessageMedia](/type/MessageMedia/)
