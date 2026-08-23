---
title: "inputBotInlineMessageMediaGeo (конструктор)"
original: "https://core.telegram.org/constructor/inputBotInlineMessageMediaGeo"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotInlineMessageMediaGeo

*Конструктор из схемы TL.*

> Geolocation

## Определение TL

```
inputBotInlineMessageMediaGeo#96929a85 flags:# geo_point:InputGeoPoint heading:flags.0?int period:flags.1?int proximity_notification_radius:flags.3?int reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| geo_point | [InputGeoPoint](/type/InputGeoPoint/) | Geolocation |
| heading | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | For [live locations](https://core.telegram.org/api/live-location), a direction in which the location moves, in degrees; 1-360 |
| period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Validity period |
| proximity_notification_radius | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | For [live locations](https://core.telegram.org/api/live-location), a maximum distance to another chat member for proximity alerts, in meters (0-100000) |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Reply markup for bot/inline keyboards |

## Тип

[InputBotInlineMessage](/type/InputBotInlineMessage/)

## Related pages

#### [Live geolocation](https://core.telegram.org/api/live-location)

Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert.
