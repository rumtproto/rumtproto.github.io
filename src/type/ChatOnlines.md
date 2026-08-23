---
title: "ChatOnlines (тип)"
original: "https://core.telegram.org/type/ChatOnlines"
section: ref
kind: type
layout: layout.njk
---

# ChatOnlines

*Тип из схемы TL.*

> Number of online users in a chat

## Определение TL

```
chatOnlines#f041e250 onlines:int = ChatOnlines;

---functions---

messages.getOnlines#6e2be050 peer:InputPeer = ChatOnlines;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatOnlines](/constructor/chatOnlines/) | Number of online users in a chat |

## Методы

| Method | Описание |
|---|---|
| [messages.getOnlines](/method/messages.getOnlines/) | Get count of online users in a chat |
