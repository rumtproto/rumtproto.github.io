---
title: "Messages.BotCallbackAnswer (тип)"
original: "https://core.telegram.org/type/messages.BotCallbackAnswer"
section: ref
kind: type
layout: layout.njk
---

# Messages.BotCallbackAnswer

*Тип из схемы TL.*

> Callback answer of bot

## Определение TL

```
messages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;

---functions---

messages.getBotCallbackAnswer#9342ca07 flags:# game:flags.1?true peer:InputPeer msg_id:int data:flags.0?bytes password:flags.2?InputCheckPasswordSRP = messages.BotCallbackAnswer;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.botCallbackAnswer](/constructor/messages.botCallbackAnswer/) | Callback answer sent by the bot in response to a button press |

## Методы

| Method | Описание |
|---|---|
| [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/) | Press an inline callback button and get a callback answer from the bot |
