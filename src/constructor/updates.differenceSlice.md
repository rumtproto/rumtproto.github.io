---
title: "updates.differenceSlice (конструктор)"
original: "https://core.telegram.org/constructor/updates.differenceSlice"
section: ref
kind: constructor
layout: layout.njk
---

# updates.differenceSlice

*Конструктор из схемы TL.*

> Incomplete list of occurred events.

## Определение TL

```
updates.differenceSlice#a8fb1981 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> intermediate_state:updates.State = updates.Difference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| new_messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | List of new messages |
| new_encrypted_messages | [Vector](https://core.telegram.org/type/Vector%20t)<[EncryptedMessage](/type/EncryptedMessage/)> | New messages from the [encrypted event sequence](/api/updates/) |
| other_updates | [Vector](https://core.telegram.org/type/Vector%20t)<[Update](/type/Update/)> | List of updates |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | List of chats mentioned in events |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users mentioned in events |
| intermediate_state | [updates.State](/type/updates.State/) | Intermediary state |

## Тип

[updates.Difference](/type/updates.Difference/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
