---
title: "businessGreetingMessage (конструктор)"
original: "https://core.telegram.org/constructor/businessGreetingMessage"
section: ref
kind: constructor
layout: layout.njk
---

# businessGreetingMessage

*Конструктор из схемы TL.*

> Describes a [Telegram Business greeting](https://core.telegram.org/api/business#greeting-messages), automatically sent to new users writing to us in private for the first time, or after a certain inactivity period.

## Определение TL

```
businessGreetingMessage#e519abab shortcut_id:int recipients:BusinessRecipients no_activity_days:int = BusinessGreetingMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| shortcut_id | [int](/type/int/) | ID of a [quick reply shorcut, containing the greeting messages to send, see here » for more info](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| recipients | [BusinessRecipients](/type/BusinessRecipients/) | Allowed recipients for the greeting messages. |
| no_activity_days | [int](/type/int/) | The number of days after which a private chat will be considered as inactive; currently, must be one of 7, 14, 21, or 28. |

## Тип

[BusinessGreetingMessage](/type/BusinessGreetingMessage/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
