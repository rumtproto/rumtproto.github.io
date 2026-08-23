---
title: "updatesCombined (конструктор)"
original: "https://core.telegram.org/constructor/updatesCombined"
section: ref
kind: constructor
layout: layout.njk
---

# updatesCombined

*Конструктор из схемы TL.*

> Constructor for a group of updates.

## Определение TL

```
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| updates | [Vector](https://core.telegram.org/type/Vector%20t)<[Update](/type/Update/)> | List of updates |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users mentioned in updates |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | List of chats mentioned in updates |
| date | [int](/type/int/) | Current date |
| seq_start | [int](/type/int/) | Value seq for the earliest update in a group |
| seq | [int](/type/int/) | Value seq for the latest update in a group |

## Тип

[Updates](/type/Updates/)
