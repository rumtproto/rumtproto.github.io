---
title: "mediaAreaVenue (конструктор)"
original: "https://core.telegram.org/constructor/mediaAreaVenue"
section: ref
kind: constructor
layout: layout.njk
---

# mediaAreaVenue

*Конструктор из схемы TL.*

> Represents a location tag attached to a [story](https://core.telegram.org/api/stories), with additional venue information.

## Определение TL

```
mediaAreaVenue#be82db9c coordinates:MediaAreaCoordinates geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MediaArea;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| coordinates | [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | The size and location of the media area corresponding to the location sticker on top of the story media. |
| geo | [GeoPoint](/type/GeoPoint/) | Coordinates of the venue |
| title | [string](/type/string/) | Venue name |
| address | [string](/type/string/) | Address |
| provider | [string](/type/string/) | Venue provider: currently only "foursquare" needs to be supported. |
| venue_id | [string](/type/string/) | Venue ID in the provider's database |
| venue_type | [string](/type/string/) | Venue type in the provider's database |

## Тип

[MediaArea](/type/MediaArea/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
