---
title: "messageEntityMention (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityMention"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityMention

*Конструктор из схемы TL.*

> Message entity [mentioning](https://core.telegram.org/api/mentions) a user by `@username`; [messageEntityMentionName](/constructor/messageEntityMentionName/) can also be used to mention users by their ID.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===45===
> messageEntityMention#fa04579d offset:int length:int = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityMention#fa04579d offset:int length:int = MessageEntity;
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

#### [Mentions and replies](https://core.telegram.org/api/mentions)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [messageEntityMentionName](/constructor/messageEntityMentionName/)

Message entity representing a [user mention](https://core.telegram.org/api/mentions): for _creating_ a mention use [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/).
