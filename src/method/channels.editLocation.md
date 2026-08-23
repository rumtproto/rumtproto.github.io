---
title: "channels.editLocation (метод)"
original: "https://core.telegram.org/method/channels.editLocation"
section: ref
kind: method
layout: layout.njk
---

# channels.editLocation

*Метод из схемы TL.*

> Edit location of geogroup, see [here »](https://core.telegram.org/api/nearby) for more info on geogroups.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.editLocation#58e63f6d channel:InputChannel geo_point:InputGeoPoint address:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | [Geogroup](https://core.telegram.org/api/channel) |
| geo_point | [InputGeoPoint](/type/InputGeoPoint/) | New geolocation |
| address | [string](/type/string/) | Address string |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 400 | MEGAGROUP_GEO_REQUIRED | This method can only be invoked on a geogroup. |
| 400 | MEGAGROUP_REQUIRED | You can only use this method on a supergroup. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Nearby users&chats](https://core.telegram.org/api/nearby)

How to work with geolocation-based features like geochats and the nearby users feature.
