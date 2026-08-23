---
title: "channels.getMessages (метод)"
original: "https://core.telegram.org/method/channels.getMessages"
section: ref
kind: method
layout: layout.njk
---

# channels.getMessages

*Метод из схемы TL.*

> Get [channel/supergroup](https://core.telegram.org/api/channel) messages

## Определение TL

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
channels.getMessages#ad8c9a23 channel:InputChannel id:Vector<InputMessage> = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | Channel/supergroup |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[InputMessage](/type/InputMessage/)> | IDs of messages to get |

## Результат

[messages.Messages](/type/messages.Messages/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 400 | FROZEN_PARTICIPANT_MISSING | The current account is [frozen](https://core.telegram.org/api/auth/#frozen-accounts), and cannot access the specified peer. |
| 400 | MESSAGE_IDS_EMPTY | No message ids were provided. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
