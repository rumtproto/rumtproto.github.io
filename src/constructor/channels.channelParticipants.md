---
title: "channels.channelParticipants (конструктор)"
original: "https://core.telegram.org/constructor/channels.channelParticipants"
section: ref
kind: constructor
layout: layout.njk
---

# channels.channelParticipants

*Конструктор из схемы TL.*

> Represents multiple channel participants

## Определение TL

```
channels.channelParticipants#9ab0feaf count:int participants:Vector<ChannelParticipant> chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipants;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of participants that correspond to the given query |
| participants | [Vector](https://core.telegram.org/type/Vector%20t)<[ChannelParticipant](/type/ChannelParticipant/)> | Participants |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in participant info |

## Тип

[channels.ChannelParticipants](/type/channels.ChannelParticipants/)
