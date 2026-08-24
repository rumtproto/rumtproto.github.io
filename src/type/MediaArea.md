---
title: "MediaArea"
original: "https://core.telegram.org/type/MediaArea"
section: ref
kind: type
description: "Представляет медиазону истории »"
layout: layout.njk
---

# MediaArea

Представляет [медиазону истории »](/api/stories/#media-areas)

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

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/mediaAreaVenue">mediaAreaVenue</a></td><td>Представляет метку места, прикреплённую к <a href="/api/stories">истории</a>, с дополнительными сведениями о заведении.</td></tr><tr><td><a href="/constructor/inputMediaAreaVenue">inputMediaAreaVenue</a></td><td>Представляет <a href="/api/stories#media-areas">метку места</a>, прикреплённую к <a href="/api/stories">истории</a>, с дополнительными сведениями о заведении.</td></tr><tr><td><a href="/constructor/mediaAreaGeoPoint">mediaAreaGeoPoint</a></td><td>Представляет геометку, прикреплённую к <a href="/api/stories">истории</a>.</td></tr><tr><td><a href="/constructor/mediaAreaSuggestedReaction">mediaAreaSuggestedReaction</a></td><td>Представляет пузырёк реакции.</td></tr><tr><td><a href="/constructor/mediaAreaChannelPost">mediaAreaChannelPost</a></td><td>Представляет пост канала.</td></tr><tr><td><a href="/constructor/inputMediaAreaChannelPost">inputMediaAreaChannelPost</a></td><td>Представляет пост канала</td></tr><tr><td><a href="/constructor/mediaAreaUrl">mediaAreaUrl</a></td><td>Представляет <a href="/api/stories#urls">медиазону со ссылкой</a>.</td></tr><tr><td><a href="/constructor/mediaAreaWeather">mediaAreaWeather</a></td><td>Представляет <a href="/api/stories#weather">виджет погоды »</a>.</td></tr><tr><td><a href="/constructor/mediaAreaStarGift">mediaAreaStarGift</a></td><td>Представляет <a href="/api/gifts#collectible-gifts">коллекционный подарок »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
