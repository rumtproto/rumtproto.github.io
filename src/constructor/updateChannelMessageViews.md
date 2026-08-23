---
title: "updateChannelMessageViews (конструктор)"
original: "https://core.telegram.org/constructor/updateChannelMessageViews"
section: ref
kind: constructor
layout: layout.njk
---

# updateChannelMessageViews

*Конструктор из схемы TL.*

> The view counter of a message in a channel has changed

## Определение TL

```
updateChannelMessageViews#f226ac08 channel_id:long id:int views:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | Channel ID |
| id | [int](/type/int/) | ID of the message |
| views | [int](/type/int/) | New view counter |

## Тип

[Update](/type/Update/)
