---
title: "account.updateBusinessLocation (метод)"
original: "https://core.telegram.org/method/account.updateBusinessLocation"
section: ref
kind: method
layout: layout.njk
---

# account.updateBusinessLocation

*Метод из схемы TL.*

> [Businesses »](https://core.telegram.org/api/business#location) may advertise their location using this method, see [here »](https://core.telegram.org/api/business#location) for more info.
> To remove business location information invoke the method without setting any of the parameters.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBusinessLocation#9e6b131a flags:# geo_point:flags.1?InputGeoPoint address:flags.0?string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| geo_point | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputGeoPoint](/type/InputGeoPoint/) | Optional, contains a set of geographical coordinates. |
| address | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Mandatory when setting/updating the location, contains a textual description of the address (max 96 UTF-8 chars). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
