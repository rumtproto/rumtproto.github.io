---
title: "messages.inactiveChats (конструктор)"
original: "https://core.telegram.org/constructor/messages.inactiveChats"
section: ref
kind: constructor
layout: layout.njk
---

# messages.inactiveChats

*Конструктор из схемы TL.*

> Inactive chat list

## Определение TL

```
messages.inactiveChats#a927fec5 dates:Vector<int> chats:Vector<Chat> users:Vector<User> = messages.InactiveChats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| dates | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | When was the chat last active |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chat list |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the chat list |

## Тип

[messages.InactiveChats](/type/messages.InactiveChats/)
