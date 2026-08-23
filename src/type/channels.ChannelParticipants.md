---
title: "Channels.ChannelParticipants (тип)"
original: "https://core.telegram.org/type/channels.ChannelParticipants"
section: ref
kind: type
layout: layout.njk
---

# Channels.ChannelParticipants

*Тип из схемы TL.*

> Channel/supergroup participants

## Определение TL

```
channels.channelParticipants#9ab0feaf count:int participants:Vector<ChannelParticipant> chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipants;
channels.channelParticipantsNotModified#f0173fe9 = channels.ChannelParticipants;

---functions---

channels.getParticipants#77ced9d0 channel:InputChannel filter:ChannelParticipantsFilter offset:int limit:int hash:long = channels.ChannelParticipants;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channels.channelParticipants](/constructor/channels.channelParticipants/) | Represents multiple channel participants |
| [channels.channelParticipantsNotModified](/constructor/channels.channelParticipantsNotModified/) | No new participant info could be found |

## Методы

| Method | Описание |
|---|---|
| [channels.getParticipants](/method/channels.getParticipants/) | Get the participants of a [supergroup/channel](https://core.telegram.org/api/channel) |
