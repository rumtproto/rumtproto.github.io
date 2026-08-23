---
title: "channels.getParticipant (метод)"
original: "https://core.telegram.org/method/channels.getParticipant"
section: ref
kind: method
layout: layout.njk
---

# channels.getParticipant

*Метод из схемы TL.*

> Get info about a [channel/supergroup](https://core.telegram.org/api/channel) participant

## Определение TL

```
channels.channelParticipant#dfb80317 participant:ChannelParticipant chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipant;
---functions---
channels.getParticipant#a0ab6cc6 channel:InputChannel participant:InputPeer = channels.ChannelParticipant;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | Channel/supergroup |
| participant | [InputPeer](/type/InputPeer/) | Participant to get info about |

## Результат

[channels.ChannelParticipant](/type/channels.ChannelParticipant/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PARTICIPANT_ID_INVALID | The specified participant ID is invalid. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |
| 400 | USER_NOT_PARTICIPANT | You're not a member of this supergroup/channel. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
