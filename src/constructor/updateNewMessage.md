---
title: "updateNewMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateNewMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateNewMessage

*Конструктор из схемы TL.*

> New message in a private chat or in a [basic group](https://core.telegram.org/api/channel#basic-groups).

## Определение TL

```
updateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| message | [Message](/type/Message/) | Message |
| pts | [int](/type/int/) | New quantity of actions in a message box |
| pts_count | [int](/type/int/) | Number of generated events |

## Тип

[Update](/type/Update/)
