---
title: "decryptedMessageMediaVenue (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageMediaVenue"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageMediaVenue

*Конструктор из схемы TL.*

> Venue

## Определение TL

```
===45===
decryptedMessageMediaVenue#8a0df56f lat:double long:double title:string address:string provider:string venue_id:string = DecryptedMessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lat | [double](/type/double/) | Latitude of venue |
| long | [double](/type/double/) | Longitude of venue |
| title | [string](/type/string/) | Venue name |
| address | [string](/type/string/) | Address |
| provider | [string](/type/string/) | Venue provider: currently only "foursquare" and "gplaces" (Google Places) need to be supported |
| venue_id | [string](/type/string/) | Venue ID in the provider's database |

## Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
