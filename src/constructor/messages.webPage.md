---
title: "messages.webPage (конструктор)"
original: "https://core.telegram.org/constructor/messages.webPage"
section: ref
kind: constructor
layout: layout.njk
---

# messages.webPage

*Конструктор из схемы TL.*

> Represents an Instant View webpage.

## Определение TL

```
messages.webPage#fd5e12bd webpage:WebPage chats:Vector<Chat> users:Vector<User> = messages.WebPage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| webpage | [WebPage](/type/WebPage/) | The instant view webpage. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in the webpage. |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the webpage. |

## Тип

[messages.WebPage](/type/messages.WebPage/)
