---
title: "updateBotWebhookJSONQuery (конструктор)"
original: "https://core.telegram.org/constructor/updateBotWebhookJSONQuery"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotWebhookJSONQuery

*Конструктор из схемы TL.*

> A new incoming query; for bots only

## Определение TL

```
updateBotWebhookJSONQuery#9b9240a6 query_id:long data:DataJSON timeout:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| query_id | [long](/type/long/) | Query identifier |
| data | [DataJSON](/type/DataJSON/) | Query data |
| timeout | [int](/type/int/) | Query timeout |

## Тип

[Update](/type/Update/)
