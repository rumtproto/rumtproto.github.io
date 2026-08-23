---
title: "messages.getMessagesViews (метод)"
original: "https://core.telegram.org/method/messages.getMessagesViews"
section: ref
kind: method
layout: layout.njk
---

# messages.getMessagesViews

*Метод из схемы TL.*

> Get and increase the view counter of a message sent or forwarded from a [channel](https://core.telegram.org/api/channel)

## Определение TL

```
messages.messageViews#b6c4f543 views:Vector<MessageViews> chats:Vector<Chat> users:Vector<User> = messages.MessageViews;
---functions---
messages.getMessagesViews#5784d3e1 peer:InputPeer id:Vector<int> increment:Bool = messages.MessageViews;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the message was found |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | ID of message |
| increment | [Bool](/type/Bool/) | Whether to mark the message as viewed and increment the view counter |

## Результат

[messages.MessageViews](/type/messages.MessageViews/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
