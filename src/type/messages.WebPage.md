---
title: "Messages.WebPage (тип)"
original: "https://core.telegram.org/type/messages.WebPage"
section: ref
kind: type
layout: layout.njk
---

# Messages.WebPage

*Тип из схемы TL.*

> Contains an instant view webpage.

## Определение TL

```
messages.webPage#fd5e12bd webpage:WebPage chats:Vector<Chat> users:Vector<User> = messages.WebPage;

---functions---

messages.getWebPage#8d9692a3 url:string hash:int = messages.WebPage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.webPage](/constructor/messages.webPage/) | Represents an Instant View webpage. |

## Методы

| Method | Описание |
|---|---|
| [messages.getWebPage](/method/messages.getWebPage/) | Get [instant view](https://instantview.telegram.org) page |
