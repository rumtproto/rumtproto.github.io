---
title: "channels.getParticipants (метод)"
original: "https://core.telegram.org/method/channels.getParticipants"
section: ref
kind: method
layout: layout.njk
---

# channels.getParticipants

*Метод из схемы TL.*

> Get the participants of a [supergroup/channel](https://core.telegram.org/api/channel)

## Определение TL

```
channels.channelParticipants#9ab0feaf count:int participants:Vector<ChannelParticipant> chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipants;
channels.channelParticipantsNotModified#f0173fe9 = channels.ChannelParticipants;
---functions---
channels.getParticipants#77ced9d0 channel:InputChannel filter:ChannelParticipantsFilter offset:int limit:int hash:long = channels.ChannelParticipants;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | Channel |
| filter | [ChannelParticipantsFilter](/type/ChannelParticipantsFilter/) | Which participant types to fetch |
| offset | [int](/type/int/) | [Offset](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | [Limit](https://core.telegram.org/api/offsets) |
| hash | [long](/type/long/) | [Hash](https://core.telegram.org/api/offsets) |

## Результат

[channels.ChannelParticipants](/type/channels.ChannelParticipants/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_MONOFORUM_UNSUPPORTED | [Monoforums](https://core.telegram.org/api/channel#monoforums) do not support this feature. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
