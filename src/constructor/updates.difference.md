---
title: "updates.difference (конструктор)"
original: "https://core.telegram.org/constructor/updates.difference"
section: ref
kind: constructor
layout: layout.njk
---

# updates.difference

*Конструктор из схемы TL.*

> Full list of occurred events.

## Определение TL

```
updates.difference#f49ca0 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> state:updates.State = updates.Difference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| new_messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | List of new messages |
| new_encrypted_messages | [Vector](https://core.telegram.org/type/Vector%20t)<[EncryptedMessage](/type/EncryptedMessage/)> | List of new encrypted secret chat messages |
| other_updates | [Vector](https://core.telegram.org/type/Vector%20t)<[Update](/type/Update/)> | List of updates |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | List of chats mentioned in events |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users mentioned in events |
| state | [updates.State](/type/updates.State/) | Current state |

## Тип

[updates.Difference](/type/updates.Difference/)
