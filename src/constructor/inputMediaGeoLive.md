---
title: "inputMediaGeoLive (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaGeoLive"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaGeoLive

*Конструктор из схемы TL.*

> [Live geolocation](https://core.telegram.org/api/live-location)

## Определение TL

```
inputMediaGeoLive#971fa843 flags:# stopped:flags.0?true geo_point:InputGeoPoint heading:flags.2?int period:flags.1?int proximity_notification_radius:flags.3?int = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| stopped | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether sending of the geolocation was stopped |
| geo_point | [InputGeoPoint](/type/InputGeoPoint/) | Current geolocation |
| heading | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | For [live locations](https://core.telegram.org/api/live-location), a direction in which the location moves, in degrees; 1-360. |
| period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Validity period of the current location |
| proximity_notification_radius | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | For [live locations](https://core.telegram.org/api/live-location), a maximum distance to another chat member for proximity alerts, in meters (0-100000) |

## Тип

[InputMedia](/type/InputMedia/)

## Related pages

#### [Live geolocation](https://core.telegram.org/api/live-location)

Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert.
