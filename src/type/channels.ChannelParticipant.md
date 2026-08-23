---
title: "Channels.ChannelParticipant (тип)"
original: "https://core.telegram.org/type/channels.ChannelParticipant"
section: ref
kind: type
layout: layout.njk
---

# Channels.ChannelParticipant

*Тип из схемы TL.*

> Channel participant

## Определение TL

```
channels.channelParticipant#dfb80317 participant:ChannelParticipant chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipant;

---functions---

channels.getParticipant#a0ab6cc6 channel:InputChannel participant:InputPeer = channels.ChannelParticipant;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channels.channelParticipant](/constructor/channels.channelParticipant/) | Represents a channel participant |

## Методы

| Method | Описание |
|---|---|
| [channels.getParticipant](/method/channels.getParticipant/) | Get info about a [channel/supergroup](https://core.telegram.org/api/channel) participant |
