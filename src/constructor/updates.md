---
title: "Updates (конструктор)"
original: "https://core.telegram.org/constructor/updates"
section: ref
kind: constructor
layout: layout.njk
---

# Updates

*Конструктор из схемы TL.*

> Full constructor of updates

## Определение TL

```
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| updates | [Vector](https://core.telegram.org/type/Vector%20t)<[Update](/type/Update/)> | List of updates |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users mentioned in updates |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | List of chats mentioned in updates |
| date | [int](/type/int/) | Current date |
| seq | [int](/type/int/) | Total number of sent updates |

## Тип

[Updates](/type/Updates/)
