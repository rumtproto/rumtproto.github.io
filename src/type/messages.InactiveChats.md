---
title: "messages.InactiveChats (тип)"
original: "https://core.telegram.org/type/messages.InactiveChats"
section: ref
kind: type
layout: layout.njk
---

# messages.InactiveChats

*Тип из схемы TL.*

> Inactive chat list

## Определение TL

```
messages.inactiveChats#a927fec5 dates:Vector<int> chats:Vector<Chat> users:Vector<User> = messages.InactiveChats;

---functions---

channels.getInactiveChannels#11e831ee = messages.InactiveChats;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.inactiveChats](/constructor/messages.inactiveChats/) | Inactive chat list |

## Методы

| Method | Описание |
|---|---|
| [channels.getInactiveChannels](/method/channels.getInactiveChannels/) | Get inactive channels and supergroups |
