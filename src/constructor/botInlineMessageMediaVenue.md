---
title: "botInlineMessageMediaVenue (конструктор)"
original: "https://core.telegram.org/constructor/botInlineMessageMediaVenue"
section: ref
kind: constructor
layout: layout.njk
---

# botInlineMessageMediaVenue

*Конструктор из схемы TL.*

> Send a venue

## Определение TL

```
botInlineMessageMediaVenue#8a86659c flags:# geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| geo | [GeoPoint](/type/GeoPoint/) | Geolocation of venue |
| title | [string](/type/string/) | Venue name |
| address | [string](/type/string/) | Address |
| provider | [string](/type/string/) | Venue provider: currently only "foursquare" and "gplaces" (Google Places) need to be supported |
| venue_id | [string](/type/string/) | Venue ID in the provider's database |
| venue_type | [string](/type/string/) | Venue type in the provider's database |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Inline keyboard |

## Тип

[BotInlineMessage](/type/BotInlineMessage/)
