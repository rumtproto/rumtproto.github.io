---
title: "inputBotInlineMessageID64 (конструктор)"
original: "https://core.telegram.org/constructor/inputBotInlineMessageID64"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotInlineMessageID64

*Конструктор из схемы TL.*

> Represents a sent inline message from the perspective of a bot

## Определение TL

```
inputBotInlineMessageID64#b6d915d7 dc_id:int owner_id:long id:int access_hash:long = InputBotInlineMessageID;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| dc_id | [int](/type/int/) | DC ID to use when working with this inline message |
| owner_id | [long](/type/long/) | ID of the owner of this message |
| id | [int](/type/int/) | ID of message |
| access_hash | [long](/type/long/) | Access hash of message |

## Тип

[InputBotInlineMessageID](/type/InputBotInlineMessageID/)
