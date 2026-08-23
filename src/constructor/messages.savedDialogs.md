---
title: "messages.savedDialogs (конструктор)"
original: "https://core.telegram.org/constructor/messages.savedDialogs"
section: ref
kind: constructor
layout: layout.njk
---

# messages.savedDialogs

*Конструктор из схемы TL.*

> Represents some [saved message dialogs »](https://core.telegram.org/api/saved-messages).

## Определение TL

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| dialogs | [Vector](https://core.telegram.org/type/Vector%20t)<[SavedDialog](/type/SavedDialog/)> | [Saved message dialogs »](https://core.telegram.org/api/saved-messages). |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | List of last messages from each saved dialog |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[messages.SavedDialogs](/type/messages.SavedDialogs/)

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
