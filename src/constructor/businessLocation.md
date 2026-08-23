---
title: "businessLocation (конструктор)"
original: "https://core.telegram.org/constructor/businessLocation"
section: ref
kind: constructor
layout: layout.njk
---

# businessLocation

*Конструктор из схемы TL.*

> Represents the location of a [Telegram Business »](https://core.telegram.org/api/business#location).

## Определение TL

```
businessLocation#ac5c1af7 flags:# geo_point:flags.0?GeoPoint address:string = BusinessLocation;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| geo_point | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[GeoPoint](/type/GeoPoint/) | Geographical coordinates (optional). |
| address | [string](/type/string/) | Textual description of the address (mandatory). |

## Тип

[BusinessLocation](/type/BusinessLocation/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
