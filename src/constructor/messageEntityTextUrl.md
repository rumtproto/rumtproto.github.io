---
title: "messageEntityTextUrl (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityTextUrl"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityTextUrl

*Конструктор из схемы TL.*

> Message entity representing a [text url](https://google.com): for in-text urls like [https://google.com](https://google.com) use [messageEntityUrl](/constructor/messageEntityUrl/).
> Note that an additional confirmation popup with the full URL must be displayed to the user before opening this link, unless the domain satisfies the conditions specified in the [domain whitelist documentation »](https://core.telegram.org/api/config#whitelisted-domains).
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===45===
> messageEntityTextUrl#76a6d327 offset:int length:int url:string = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityTextUrl#76a6d327 offset:int length:int url:string = MessageEntity;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [int](/type/int/) | Offset of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| length | [int](/type/int/) | Length of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| url | [string](/type/string/) | The actual URL |

## Тип

[MessageEntity](/type/MessageEntity/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [messageEntityUrl](/constructor/messageEntityUrl/)

Message entity representing an in-text url: [https://google.com](https://google.com); for [text urls](https://google.com), use [messageEntityTextUrl](/constructor/messageEntityTextUrl/).

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
