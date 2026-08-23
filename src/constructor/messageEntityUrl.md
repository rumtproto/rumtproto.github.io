---
title: "messageEntityUrl (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityUrl"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityUrl

*Конструктор из схемы TL.*

> Message entity representing an in-text url: [https://google.com](https://google.com); for [text urls](https://google.com), use [messageEntityTextUrl](/constructor/messageEntityTextUrl/).
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===45===
> messageEntityUrl#6ed02538 offset:int length:int = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityUrl#6ed02538 offset:int length:int = MessageEntity;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [int](/type/int/) | Offset of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| length | [int](/type/int/) | Length of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |

## Тип

[MessageEntity](/type/MessageEntity/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [messageEntityTextUrl](/constructor/messageEntityTextUrl/)

Message entity representing a [text url](https://google.com): for in-text urls like [https://google.com](https://google.com) use [messageEntityUrl](/constructor/messageEntityUrl/).

Note that an additional confirmation popup with the full URL must be displayed to the user before opening this link, unless the domain satisfies the conditions specified in the [domain whitelist documentation »](https://core.telegram.org/api/config#whitelisted-domains).
