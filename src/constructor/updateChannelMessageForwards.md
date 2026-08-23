---
title: "updateChannelMessageForwards (конструктор)"
original: "https://core.telegram.org/constructor/updateChannelMessageForwards"
section: ref
kind: constructor
layout: layout.njk
---

# updateChannelMessageForwards

*Конструктор из схемы TL.*

> The forward counter of a message in a channel has changed

## Определение TL

```
updateChannelMessageForwards#d29a27f4 channel_id:long id:int forwards:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | Channel ID |
| id | [int](/type/int/) | ID of the message |
| forwards | [int](/type/int/) | New forward counter |

## Тип

[Update](/type/Update/)
