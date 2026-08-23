---
title: "Messages.BotPreparedInlineMessage (тип)"
original: "https://core.telegram.org/type/messages.BotPreparedInlineMessage"
section: ref
kind: type
layout: layout.njk
---

# Messages.BotPreparedInlineMessage

*Тип из схемы TL.*

> Represents a [prepared inline message saved by a bot, to be sent to the user via a web app »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message)

## Определение TL

```
messages.botPreparedInlineMessage#8ecf0511 id:string expire_date:int = messages.BotPreparedInlineMessage;

---functions---

messages.savePreparedInlineMessage#f21f7f2f flags:# result:InputBotInlineResult user_id:InputUser peer_types:flags.0?Vector<InlineQueryPeerType> = messages.BotPreparedInlineMessage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.botPreparedInlineMessage](/constructor/messages.botPreparedInlineMessage/) | Represents a [prepared inline message saved by a bot, to be sent to the user via a web app »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) |

## Методы

| Method | Описание |
|---|---|
| [messages.savePreparedInlineMessage](/method/messages.savePreparedInlineMessage/) | Save a [prepared inline message](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message), to be shared by the user of the mini app using a [web_app_send_prepared_message event](https://core.telegram.org/api/web-events#web-app-send-prepared-message) |

## Related pages

#### [Inline queries](https://core.telegram.org/api/bots/inline)

Users can interact with your bot via inline queries, straight from the text input field in any chat.
