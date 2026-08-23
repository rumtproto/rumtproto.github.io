---
title: "InputBusinessAwayMessage (тип)"
original: "https://core.telegram.org/type/InputBusinessAwayMessage"
section: ref
kind: type
layout: layout.njk
---

# InputBusinessAwayMessage

*Тип из схемы TL.*

> Describes a [Telegram Business away message](https://core.telegram.org/api/business#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user.

## Определение TL

```
inputBusinessAwayMessage#832175e0 flags:# offline_only:flags.0?true shortcut_id:int schedule:BusinessAwayMessageSchedule recipients:InputBusinessRecipients = InputBusinessAwayMessage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputBusinessAwayMessage](/constructor/inputBusinessAwayMessage/) | Describes a [Telegram Business away message](https://core.telegram.org/api/business#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
