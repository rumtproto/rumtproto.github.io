---
title: "MediaArea (тип)"
original: "https://core.telegram.org/type/MediaArea"
section: ref
kind: type
layout: layout.njk
---

# MediaArea

*Тип из схемы TL.*

> Represents a [story media area »](https://core.telegram.org/api/stories#media-areas)

## Определение TL

```
mediaAreaVenue#be82db9c coordinates:MediaAreaCoordinates geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MediaArea;
inputMediaAreaVenue#b282217f coordinates:MediaAreaCoordinates query_id:long result_id:string = MediaArea;
mediaAreaGeoPoint#cad5452d flags:# coordinates:MediaAreaCoordinates geo:GeoPoint address:flags.0?GeoPointAddress = MediaArea;
mediaAreaSuggestedReaction#14455871 flags:# dark:flags.0?true flipped:flags.1?true coordinates:MediaAreaCoordinates reaction:Reaction = MediaArea;
mediaAreaChannelPost#770416af coordinates:MediaAreaCoordinates channel_id:long msg_id:int = MediaArea;
inputMediaAreaChannelPost#2271f2bf coordinates:MediaAreaCoordinates channel:InputChannel msg_id:int = MediaArea;
mediaAreaUrl#37381085 coordinates:MediaAreaCoordinates url:string = MediaArea;
mediaAreaWeather#49a6549c coordinates:MediaAreaCoordinates emoji:string temperature_c:double color:int = MediaArea;
mediaAreaStarGift#5787686d coordinates:MediaAreaCoordinates slug:string = MediaArea;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [mediaAreaVenue](/constructor/mediaAreaVenue/) | Represents a location tag attached to a [story](https://core.telegram.org/api/stories), with additional venue information. |
| [inputMediaAreaVenue](/constructor/inputMediaAreaVenue/) | Represents a [location tag](https://core.telegram.org/api/stories#media-areas) attached to a [story](https://core.telegram.org/api/stories), with additional venue information. |
| [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/) | Represents a geolocation tag attached to a [story](https://core.telegram.org/api/stories). |
| [mediaAreaSuggestedReaction](/constructor/mediaAreaSuggestedReaction/) | Represents a reaction bubble. |
| [mediaAreaChannelPost](/constructor/mediaAreaChannelPost/) | Represents a channel post. |
| [inputMediaAreaChannelPost](/constructor/inputMediaAreaChannelPost/) | Represents a channel post |
| [mediaAreaUrl](/constructor/mediaAreaUrl/) | Represents a [URL media area](https://core.telegram.org/api/stories#urls). |
| [mediaAreaWeather](/constructor/mediaAreaWeather/) | Represents a [weather widget »](https://core.telegram.org/api/stories#weather). |
| [mediaAreaStarGift](/constructor/mediaAreaStarGift/) | Represents a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
