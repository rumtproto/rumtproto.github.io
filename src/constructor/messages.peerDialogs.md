---
title: "messages.peerDialogs (конструктор)"
original: "https://core.telegram.org/constructor/messages.peerDialogs"
section: ref
kind: constructor
layout: layout.njk
---

# messages.peerDialogs

*Конструктор из схемы TL.*

> Dialog info of multiple peers

## Определение TL

```
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| dialogs | [Vector](https://core.telegram.org/type/Vector%20t)<[Dialog](/type/Dialog/)> | Dialog info |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | Messages mentioned in dialog info |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users |
| state | [updates.State](/type/updates.State/) | Current [update state of dialog](/api/updates/) |

## Тип

[messages.PeerDialogs](/type/messages.PeerDialogs/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
