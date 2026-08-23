---
title: "channels.getInactiveChannels (метод)"
original: "https://core.telegram.org/method/channels.getInactiveChannels"
section: ref
kind: method
layout: layout.njk
---

# channels.getInactiveChannels

*Метод из схемы TL.*

> Get inactive channels and supergroups

## Определение TL

```
messages.inactiveChats#a927fec5 dates:Vector<int> chats:Vector<Chat> users:Vector<User> = messages.InactiveChats;
---functions---
channels.getInactiveChannels#11e831ee = messages.InactiveChats;
```

## Параметры

This constructor does not require any parameters.

## Результат

[messages.InactiveChats](/type/messages.InactiveChats/)

## Only users can use this method
