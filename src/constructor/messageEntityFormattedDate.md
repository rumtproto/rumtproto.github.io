---
title: "messageEntityFormattedDate (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityFormattedDate"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityFormattedDate

*Конструктор из схемы TL.*

> Represents a specific point in time, rendered as specified [here »](https://core.telegram.org/api/entities#date-entities)
> All flags are optional, with the following limitations:
> -   `relative` cannot combined with any other flag
> -   `short_time` and `long_time` cannot be combined with each other
> -   `short_date` and `long_date` cannot be combined with each other
> If any of the flags are combined, their rendering order in the text is the following:
> -   `day_of_week`
> -   `short_time`/`long_time`
> -   `short_date`/`long_date`

## Определение TL

```
messageEntityFormattedDate#904ac7c7 flags:# relative:flags.0?true short_time:flags.1?true long_time:flags.2?true short_date:flags.3?true long_date:flags.4?true day_of_week:flags.5?true offset:int length:int date:int = MessageEntity;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| relative | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, render a relative date, see [here »](https://core.telegram.org/api/entities#date-entities) for more info. Cannot be combined with any of the other flags. |
| short_time | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Renders the time in short format: hours and minutes, according to the user's locale settings; cannot be combined with long_time. |
| long_time | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Renders the time in long format: hours, minutes, seconds and maybe timezone, according to the user's locale settings; cannot be combined with short_time. |
| short_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Renders the time in short format: month, date, (and year, if different from the current one), all according the user's locale settings; cannot be combined with long_date. |
| long_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Renders the time in long format: always month, date and year, all according the user's locale settings; cannot be combined with short_date. |
| day_of_week | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Renders the day of the week according to the user's locale settings. |
| offset | [int](/type/int/) | Offset of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| length | [int](/type/int/) | Length of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| date | [int](/type/int/) | The date as a UNIX timestamp: the allowed value ranges from 0 to the current date plus 1098 days (time()+1098*86400). |

## Тип

[MessageEntity](/type/MessageEntity/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
