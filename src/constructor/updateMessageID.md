---
title: "updateMessageID (конструктор)"
original: "https://core.telegram.org/constructor/updateMessageID"
section: ref
kind: constructor
layout: layout.njk
---

# updateMessageID

*Конструктор из схемы TL.*

> Sent message with **random\_id** client identifier was assigned an identifier.

## Определение TL

```
updateMessageID#4e90bfd6 id:int random_id:long = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [int](/type/int/) | id identifier of a respective [Message](/type/Message/) |
| random_id | [long](/type/long/) | Previously transferred client random_id identifier. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Message](/type/Message/)

Object describing a message.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
