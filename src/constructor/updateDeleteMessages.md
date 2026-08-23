---
title: "updateDeleteMessages (конструктор)"
original: "https://core.telegram.org/constructor/updateDeleteMessages"
section: ref
kind: constructor
layout: layout.njk
---

# updateDeleteMessages

*Конструктор из схемы TL.*

> Messages were deleted.

## Определение TL

```
updateDeleteMessages#a20db0e5 messages:Vector<int> pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | List of identifiers of deleted messages |
| pts | [int](/type/int/) | New quality of actions in a message box |
| pts_count | [int](/type/int/) | Number of generated [events](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
