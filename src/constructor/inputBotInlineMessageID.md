---
title: "inputBotInlineMessageID (конструктор)"
original: "https://core.telegram.org/constructor/inputBotInlineMessageID"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotInlineMessageID

*Конструктор из схемы TL.*

> Represents a sent inline message from the perspective of a bot (legacy constructor)

## Определение TL

```
inputBotInlineMessageID#890c3d89 dc_id:int id:long access_hash:long = InputBotInlineMessageID;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| dc_id | [int](/type/int/) | DC ID to use when working with this inline message |
| id | [long](/type/long/) | ID of message, contains both the (32-bit, legacy) owner ID and the message ID, used only for Bot API backwards compatibility with 32-bit user ID. |
| access_hash | [long](/type/long/) | Access hash of message |

## Тип

[InputBotInlineMessageID](/type/InputBotInlineMessageID/)
