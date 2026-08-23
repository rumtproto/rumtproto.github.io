---
title: "messages.savedDialogsSlice (конструктор)"
original: "https://core.telegram.org/constructor/messages.savedDialogsSlice"
section: ref
kind: constructor
layout: layout.njk
---

# messages.savedDialogsSlice

*Конструктор из схемы TL.*

> Incomplete list of [saved message dialogs »](https://core.telegram.org/api/saved-messages) with messages and auxiliary data.

## Определение TL

```
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of saved message dialogs |
| dialogs | [Vector](https://core.telegram.org/type/Vector%20t)<[SavedDialog](/type/SavedDialog/)> | List of saved message dialogs |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | List of last messages from dialogs |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[messages.SavedDialogs](/type/messages.SavedDialogs/)

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
