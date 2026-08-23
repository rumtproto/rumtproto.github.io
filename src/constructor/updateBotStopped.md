---
title: "updateBotStopped (конструктор)"
original: "https://core.telegram.org/constructor/updateBotStopped"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotStopped

*Конструктор из схемы TL.*

> A bot was stopped or re-started.

## Определение TL

```
updateBotStopped#c4870a49 user_id:long date:int stopped:Bool qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | The user ID |
| date | [int](/type/int/) | When did this action occur |
| stopped | [Bool](/type/Bool/) | Whether the bot was stopped or started |
| qts | [int](/type/int/) | New qts value, see [updates »](/api/updates/) for more info. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
