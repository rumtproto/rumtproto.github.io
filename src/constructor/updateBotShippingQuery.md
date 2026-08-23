---
title: "updateBotShippingQuery (конструктор)"
original: "https://core.telegram.org/constructor/updateBotShippingQuery"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotShippingQuery

*Конструктор из схемы TL.*

> This object contains information about an incoming shipping query.

## Определение TL

```
updateBotShippingQuery#b5aefd7d query_id:long user_id:long payload:bytes shipping_address:PostAddress = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| query_id | [long](/type/long/) | Unique query identifier |
| user_id | [long](/type/long/) | User who sent the query |
| payload | [bytes](/type/bytes/) | Bot specified invoice payload |
| shipping_address | [PostAddress](/type/PostAddress/) | User specified shipping address |

## Тип

[Update](/type/Update/)
