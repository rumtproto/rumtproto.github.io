---
title: "messages.dialogsSlice (конструктор)"
original: "https://core.telegram.org/constructor/messages.dialogsSlice"
section: ref
kind: constructor
layout: layout.njk
---

# messages.dialogsSlice

*Конструктор из схемы TL.*

> Incomplete list of dialogs with messages and auxiliary data.

## Определение TL

```
messages.dialogsSlice#71e094f3 count:int dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of dialogs |
| dialogs | [Vector](https://core.telegram.org/type/Vector%20t)<[Dialog](/type/Dialog/)> | List of dialogs |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | List of last messages from dialogs |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | List of chats mentioned in dialogs |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users mentioned in messages and chats |

## Тип

[messages.Dialogs](/type/messages.Dialogs/)
