---
title: "businessWorkHours (конструктор)"
original: "https://core.telegram.org/constructor/businessWorkHours"
section: ref
kind: constructor
layout: layout.njk
---

# businessWorkHours

*Конструктор из схемы TL.*

> Specifies a set of [Telegram Business opening hours](https://core.telegram.org/api/business#opening-hours).

## Определение TL

```
businessWorkHours#8c92b098 flags:# open_now:flags.0?true timezone_id:string weekly_open:Vector<BusinessWeeklyOpen> = BusinessWorkHours;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| open_now | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Ignored if set while invoking [account.updateBusinessWorkHours](/method/account.updateBusinessWorkHours/), only returned by the server in [userFull](/constructor/userFull/).business_work_hours, indicating whether the business is currently open according to the current time and the values in weekly_open and timezone. |
| timezone_id | [string](/type/string/) | An ID of one of the timezones returned by [help.getTimezonesList](/method/help.getTimezonesList/). The timezone ID is contained [timezone](/constructor/timezone/).id, a human-readable, localized name of the timezone is available in [timezone](/constructor/timezone/).name and the [timezone](/constructor/timezone/).utc_offset field contains the UTC offset in seconds, which may be displayed in hh:mm format by the client together with the human-readable name (i.e. $name UTC -01:00). |
| weekly_open | [Vector](https://core.telegram.org/type/Vector%20t)<[BusinessWeeklyOpen](/type/BusinessWeeklyOpen/)> | A list of time intervals (max 28) represented by [businessWeeklyOpen »](/constructor/businessWeeklyOpen/), indicating the opening hours of their business. |

## Тип

[BusinessWorkHours](/type/BusinessWorkHours/)

## Related pages

#### [account.updateBusinessWorkHours](/method/account.updateBusinessWorkHours/)

Specify a set of [Telegram Business opening hours](https://core.telegram.org/api/business#opening-hours).  
This info will be contained in [userFull](/constructor/userFull/).`business_work_hours`.

To remove all opening hours, invoke the method without setting the `business_work_hours` field.

Note that the opening hours specified by the user must be appropriately validated and transformed before invoking the method, as specified [here »](https://core.telegram.org/api/business#opening-hours).

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [help.getTimezonesList](/method/help.getTimezonesList/)

Returns timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](https://core.telegram.org/api/business#opening-hours).

#### [timezone](/constructor/timezone/)

Timezone information.

#### [businessWeeklyOpen](/constructor/businessWeeklyOpen/)

A time interval, indicating the opening hours of a business.

Note that opening hours specified by the user must be appropriately validated and transformed before uploading them to the server, as specified [here »](https://core.telegram.org/api/business#opening-hours).

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
