---
title: "messages.dialogs (конструктор)"
original: "https://core.telegram.org/constructor/messages.dialogs"
section: ref
kind: constructor
layout: layout.njk
---

# messages.dialogs

*Конструктор из схемы TL.*

> Full list of chats with messages and auxiliary data.

## Определение TL

```
messages.dialogs#15ba6c40 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| dialogs | [Vector](https://core.telegram.org/type/Vector%20t)<[Dialog](/type/Dialog/)> | List of chats |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | List of last messages from each chat |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | List of groups mentioned in the chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users mentioned in messages and groups |

## Тип

[messages.Dialogs](/type/messages.Dialogs/)
