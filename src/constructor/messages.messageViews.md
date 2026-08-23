---
title: "messages.messageViews (конструктор)"
original: "https://core.telegram.org/constructor/messages.messageViews"
section: ref
kind: constructor
layout: layout.njk
---

# messages.messageViews

*Конструктор из схемы TL.*

> View, forward counter + info about replies

## Определение TL

```
messages.messageViews#b6c4f543 views:Vector<MessageViews> chats:Vector<Chat> users:Vector<User> = messages.MessageViews;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| views | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageViews](/type/MessageViews/)> | View, forward counter + info about replies |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in constructor |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in constructor |

## Тип

[messages.MessageViews](/type/messages.MessageViews/)
