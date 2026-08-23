---
title: "channels.channelParticipant (конструктор)"
original: "https://core.telegram.org/constructor/channels.channelParticipant"
section: ref
kind: constructor
layout: layout.njk
---

# channels.channelParticipant

*Конструктор из схемы TL.*

> Represents a channel participant

## Определение TL

```
channels.channelParticipant#dfb80317 participant:ChannelParticipant chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipant;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| participant | [ChannelParticipant](/type/ChannelParticipant/) | The channel participant |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users |

## Тип

[channels.ChannelParticipant](/type/channels.ChannelParticipant/)
