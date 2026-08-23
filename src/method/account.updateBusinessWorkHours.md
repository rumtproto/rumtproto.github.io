---
title: "account.updateBusinessWorkHours (метод)"
original: "https://core.telegram.org/method/account.updateBusinessWorkHours"
section: ref
kind: method
layout: layout.njk
---

# account.updateBusinessWorkHours

*Метод из схемы TL.*

> Specify a set of [Telegram Business opening hours](https://core.telegram.org/api/business#opening-hours).  
> This info will be contained in [userFull](/constructor/userFull/).`business_work_hours`.
> To remove all opening hours, invoke the method without setting the `business_work_hours` field.
> Note that the opening hours specified by the user must be appropriately validated and transformed before invoking the method, as specified [here »](https://core.telegram.org/api/business#opening-hours).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBusinessWorkHours#4b00e066 flags:# business_work_hours:flags.0?BusinessWorkHours = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| business_work_hours | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[BusinessWorkHours](/type/BusinessWorkHours/) | Opening hours (optional, if not set removes all opening hours). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BUSINESS_WORK_HOURS_EMPTY | No work hours were specified. |
| 400 | BUSINESS_WORK_HOURS_PERIOD_INVALID | The specified work hours are invalid, see [here »](https://core.telegram.org/api/business#opening-hours) for the exact requirements. |
| 400 | TIMEZONE_INVALID | The specified timezone does not exist. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).
