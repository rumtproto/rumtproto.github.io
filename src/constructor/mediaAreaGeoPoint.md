---
title: "mediaAreaGeoPoint (конструктор)"
original: "https://core.telegram.org/constructor/mediaAreaGeoPoint"
section: ref
kind: constructor
layout: layout.njk
---

# mediaAreaGeoPoint

*Конструктор из схемы TL.*

> Represents a geolocation tag attached to a [story](https://core.telegram.org/api/stories).

## Определение TL

```
mediaAreaGeoPoint#cad5452d flags:# coordinates:MediaAreaCoordinates geo:GeoPoint address:flags.0?GeoPointAddress = MediaArea;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| coordinates | [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | The size and position of the media area corresponding to the location sticker on top of the story media. |
| geo | [GeoPoint](/type/GeoPoint/) | Coordinates of the geolocation tag. |
| address | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[GeoPointAddress](/type/GeoPointAddress/) | Optional textual representation of the address. |

## Тип

[MediaArea](/type/MediaArea/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
