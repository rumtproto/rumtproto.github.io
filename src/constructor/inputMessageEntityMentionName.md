---
title: "inputMessageEntityMentionName (конструктор)"
original: "https://core.telegram.org/constructor/inputMessageEntityMentionName"
section: ref
kind: constructor
layout: layout.njk
---

# inputMessageEntityMentionName

*Конструктор из схемы TL.*

> Message entity that can be used to create a user [user mention](https://core.telegram.org/api/mentions): received mentions use the [messageEntityMentionName](/constructor/messageEntityMentionName/) constructor, instead.

## Определение TL

```
inputMessageEntityMentionName#208e68c9 offset:int length:int user_id:InputUser = MessageEntity;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [int](/type/int/) | Offset of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| length | [int](/type/int/) | Length of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| user_id | [InputUser](/type/InputUser/) | Identifier of the user that was mentioned |

## Тип

[MessageEntity](/type/MessageEntity/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Mentions and replies](https://core.telegram.org/api/mentions)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [messageEntityMentionName](/constructor/messageEntityMentionName/)

Message entity representing a [user mention](https://core.telegram.org/api/mentions): for _creating_ a mention use [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/).
