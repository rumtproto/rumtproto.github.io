---
title: "messageMediaGeoLive (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaGeoLive"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaGeoLive

*Конструктор из схемы TL.*

> Indicates a [live geolocation](https://core.telegram.org/api/live-location)

## Определение TL

```
messageMediaGeoLive#b940c666 flags:# geo:GeoPoint heading:flags.0?int period:int proximity_notification_radius:flags.1?int = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| geo | [GeoPoint](/type/GeoPoint/) | Geolocation |
| heading | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | For [live locations](https://core.telegram.org/api/live-location), a direction in which the location moves, in degrees; 1-360 |
| period | [int](/type/int/) | Validity period of provided geolocation |
| proximity_notification_radius | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | For [live locations](https://core.telegram.org/api/live-location), a maximum distance to another chat member for proximity alerts, in meters (0-100000). |

## Тип

[MessageMedia](/type/MessageMedia/)

## Related pages

#### [Live geolocation](https://core.telegram.org/api/live-location)

Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert.
