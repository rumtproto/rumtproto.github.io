---
title: "Birthday (тип)"
original: "https://core.telegram.org/type/Birthday"
section: ref
kind: type
layout: layout.njk
---

# Birthday

*Тип из схемы TL.*

> [Birthday](https://core.telegram.org/api/profile#birthday) information for a user.

## Определение TL

```
birthday#6c8e1e06 flags:# day:int month:int year:flags.0?int = Birthday;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [birthday](/constructor/birthday/) | [Birthday](https://core.telegram.org/api/profile#birthday) information for a user. Also used to invite users to gift [Telegram Premium subscriptions »](https://core.telegram.org/api/premium#gifting-telegram-premium) to other users with birthdays within a +1/-1 day time range, related to the current day. |

## Related pages

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
