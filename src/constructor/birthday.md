---
title: "birthday (конструктор)"
original: "https://core.telegram.org/constructor/birthday"
section: ref
kind: constructor
layout: layout.njk
---

# birthday

*Конструктор из схемы TL.*

> [Birthday](https://core.telegram.org/api/profile#birthday) information for a user.
> Also used to invite users to gift [Telegram Premium subscriptions »](https://core.telegram.org/api/premium#gifting-telegram-premium) to other users with birthdays within a +1/-1 day time range, related to the current day.

## Определение TL

```
birthday#6c8e1e06 flags:# day:int month:int year:flags.0?int = Birthday;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| day | [int](/type/int/) | Birth day |
| month | [int](/type/int/) | Birth month |
| year | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | (Optional) birth year. |

## Тип

[Birthday](/type/Birthday/)

## Related pages

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
