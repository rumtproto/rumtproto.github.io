---
title: "businessAwayMessage (конструктор)"
original: "https://core.telegram.org/constructor/businessAwayMessage"
section: ref
kind: constructor
layout: layout.njk
---

# businessAwayMessage

*Конструктор из схемы TL.*

> Describes a [Telegram Business away message](https://core.telegram.org/api/business#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user.

## Определение TL

```
businessAwayMessage#ef156a5c flags:# offline_only:flags.0?true shortcut_id:int schedule:BusinessAwayMessageSchedule recipients:BusinessRecipients = BusinessAwayMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| offline_only | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the messages will not be sent if the account was online in the last 10 minutes. |
| shortcut_id | [int](/type/int/) | ID of a [quick reply shorcut, containing the away messages to send, see here » for more info](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| schedule | [BusinessAwayMessageSchedule](/type/BusinessAwayMessageSchedule/) | Specifies when should the away messages be sent. |
| recipients | [BusinessRecipients](/type/BusinessRecipients/) | Allowed recipients for the away messages. |

## Тип

[BusinessAwayMessage](/type/BusinessAwayMessage/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
