---
title: "messageEntityMentionName (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityMentionName"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityMentionName

*Конструктор из схемы TL.*

> Message entity representing a [user mention](https://core.telegram.org/api/mentions): for _creating_ a mention use [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/).

## Определение TL

```
messageEntityMentionName#dc7b1140 offset:int length:int user_id:long = MessageEntity;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [int](/type/int/) | Offset of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| length | [int](/type/int/) | Length of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| user_id | [long](/type/long/) | Identifier of the user that was mentioned |

## Тип

[MessageEntity](/type/MessageEntity/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Mentions and replies](https://core.telegram.org/api/mentions)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/)

Message entity that can be used to create a user [user mention](https://core.telegram.org/api/mentions): received mentions use the [messageEntityMentionName](/constructor/messageEntityMentionName/) constructor, instead.
