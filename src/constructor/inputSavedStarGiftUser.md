---
title: "inputSavedStarGiftUser (конструктор)"
original: "https://core.telegram.org/constructor/inputSavedStarGiftUser"
section: ref
kind: constructor
layout: layout.njk
---

# inputSavedStarGiftUser

*Конструктор из схемы TL.*

> A gift received in a private chat with another user.

## Определение TL

```
inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| msg_id | [int](/type/int/) | ID of the [messageService](/constructor/messageService/) with the [messageActionStarGift](/constructor/messageActionStarGift/) with the gift. |

## Тип

[InputSavedStarGift](/type/InputSavedStarGift/)

## Related pages

#### [messageService](/constructor/messageService/)

Indicates a service message

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](https://core.telegram.org/api/gifts) for more info.
