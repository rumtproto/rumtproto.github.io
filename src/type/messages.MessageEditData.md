---
title: "Messages.MessageEditData (тип)"
original: "https://core.telegram.org/type/messages.MessageEditData"
section: ref
kind: type
layout: layout.njk
---

# Messages.MessageEditData

*Тип из схемы TL.*

> Message edit data for media

## Определение TL

```
messages.messageEditData#26b5dde6 flags:# caption:flags.0?true = messages.MessageEditData;

---functions---

messages.getMessageEditData#fda68d36 peer:InputPeer id:int = messages.MessageEditData;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.messageEditData](/constructor/messages.messageEditData/) | Message edit data for media |

## Методы

| Method | Описание |
|---|---|
| [messages.getMessageEditData](/method/messages.getMessageEditData/) | Find out if a media message's caption can be edited |
