---
title: "inputBotInlineMessageMediaVenue (конструктор)"
original: "https://core.telegram.org/constructor/inputBotInlineMessageMediaVenue"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotInlineMessageMediaVenue

*Конструктор из схемы TL.*

> Venue

## Определение TL

```
inputBotInlineMessageMediaVenue#417bbf11 flags:# geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| geo_point | [InputGeoPoint](/type/InputGeoPoint/) | Geolocation |
| title | [string](/type/string/) | Venue name |
| address | [string](/type/string/) | Address |
| provider | [string](/type/string/) | Venue provider: currently only "foursquare" and "gplaces" (Google Places) need to be supported |
| venue_id | [string](/type/string/) | Venue ID in the provider's database |
| venue_type | [string](/type/string/) | Venue type in the provider's database |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Inline keyboard |

## Тип

[InputBotInlineMessage](/type/InputBotInlineMessage/)
