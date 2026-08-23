---
title: "messages.MessageViews (тип)"
original: "https://core.telegram.org/type/messages.MessageViews"
section: ref
kind: type
layout: layout.njk
---

# messages.MessageViews

*Тип из схемы TL.*

> View, forward counter + info about replies

## Определение TL

```
messages.messageViews#b6c4f543 views:Vector<MessageViews> chats:Vector<Chat> users:Vector<User> = messages.MessageViews;

---functions---

messages.getMessagesViews#5784d3e1 peer:InputPeer id:Vector<int> increment:Bool = messages.MessageViews;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.messageViews](/constructor/messages.messageViews/) | View, forward counter + info about replies |

## Методы

| Method | Описание |
|---|---|
| [messages.getMessagesViews](/method/messages.getMessagesViews/) | Get and increase the view counter of a message sent or forwarded from a [channel](https://core.telegram.org/api/channel) |
