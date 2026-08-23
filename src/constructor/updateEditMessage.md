---
title: "updateEditMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateEditMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateEditMessage

*Конструктор из схемы TL.*

> A message was edited

## Определение TL

```
updateEditMessage#e40370a3 message:Message pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| message | [Message](/type/Message/) | The new edited message |
| pts | [int](/type/int/) | [PTS](/api/updates/) |
| pts_count | [int](/type/int/) | [PTS count](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
