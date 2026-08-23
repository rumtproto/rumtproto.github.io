---
title: "InputMessage (тип)"
original: "https://core.telegram.org/type/InputMessage"
section: ref
kind: type
layout: layout.njk
---

# InputMessage

*Тип из схемы TL.*

> A message

## Определение TL

```
inputMessageID#a676a322 id:int = InputMessage;
inputMessageReplyTo#bad88395 id:int = InputMessage;
inputMessagePinned#86872538 = InputMessage;
inputMessageCallbackQuery#acfa1a7e id:int query_id:long = InputMessage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputMessageID](/constructor/inputMessageID/) | Message by ID |
| [inputMessageReplyTo](/constructor/inputMessageReplyTo/) | Message to which the specified message replies to |
| [inputMessagePinned](/constructor/inputMessagePinned/) | Pinned message |
| [inputMessageCallbackQuery](/constructor/inputMessageCallbackQuery/) | Used by bots for fetching information about the message that originated a callback query |
