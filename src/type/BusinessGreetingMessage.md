---
title: "BusinessGreetingMessage (тип)"
original: "https://core.telegram.org/type/BusinessGreetingMessage"
section: ref
kind: type
layout: layout.njk
---

# BusinessGreetingMessage

*Тип из схемы TL.*

> Describes a [Telegram Business greeting](https://core.telegram.org/api/business#greeting-messages), automatically sent to new users writing to us in private for the first time, or after a certain inactivity period.

## Определение TL

```
businessGreetingMessage#e519abab shortcut_id:int recipients:BusinessRecipients no_activity_days:int = BusinessGreetingMessage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [businessGreetingMessage](/constructor/businessGreetingMessage/) | Describes a [Telegram Business greeting](https://core.telegram.org/api/business#greeting-messages), automatically sent to new users writing to us in private for the first time, or after a certain inactivity period. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
