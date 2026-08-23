---
title: "InputBotInlineMessageID (тип)"
original: "https://core.telegram.org/type/InputBotInlineMessageID"
section: ref
kind: type
layout: layout.njk
---

# InputBotInlineMessageID

*Тип из схемы TL.*

> Represents a sent inline message from the perspective of a bot

## Определение TL

```
inputBotInlineMessageID#890c3d89 dc_id:int id:long access_hash:long = InputBotInlineMessageID;
inputBotInlineMessageID64#b6d915d7 dc_id:int owner_id:long id:int access_hash:long = InputBotInlineMessageID;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputBotInlineMessageID](/constructor/inputBotInlineMessageID/) | Represents a sent inline message from the perspective of a bot (legacy constructor) |
| [inputBotInlineMessageID64](/constructor/inputBotInlineMessageID64/) | Represents a sent inline message from the perspective of a bot |

## Методы

| Method | Описание |
|---|---|
| [messages.setBotGuestChatResult](https://core.telegram.org/method/messages.setBotGuestChatResult) | Bots may use this method to answer a [guest mode »](https://core.telegram.org/api/bots/guest-mode) query received via an [updateBotGuestChatQuery](https://core.telegram.org/constructor/updateBotGuestChatQuery) update, providing the message to post into the chat as a guest, see [here »](https://core.telegram.org/api/bots/guest-mode#handling-guest-queries-bot-side) for more info. |
