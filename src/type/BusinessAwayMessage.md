---
title: "BusinessAwayMessage (тип)"
original: "https://core.telegram.org/type/BusinessAwayMessage"
section: ref
kind: type
layout: layout.njk
---

# BusinessAwayMessage

*Тип из схемы TL.*

> Describes a [Telegram Business away message](https://core.telegram.org/api/business#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user.

## Определение TL

```
businessAwayMessage#ef156a5c flags:# offline_only:flags.0?true shortcut_id:int schedule:BusinessAwayMessageSchedule recipients:BusinessRecipients = BusinessAwayMessage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [businessAwayMessage](/constructor/businessAwayMessage/) | Describes a [Telegram Business away message](https://core.telegram.org/api/business#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
