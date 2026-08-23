---
title: "messages.botPreparedInlineMessage (конструктор)"
original: "https://core.telegram.org/constructor/messages.botPreparedInlineMessage"
section: ref
kind: constructor
layout: layout.njk
---

# messages.botPreparedInlineMessage

*Конструктор из схемы TL.*

> Represents a [prepared inline message saved by a bot, to be sent to the user via a web app »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message)

## Определение TL

```
messages.botPreparedInlineMessage#8ecf0511 id:string expire_date:int = messages.BotPreparedInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [string](/type/string/) | The ID of the saved message, to be passed to the id field of the [web_app_send_prepared_message event »](https://core.telegram.org/api/web-events#web-app-send-prepared-message) |
| expire_date | [int](/type/int/) | Expiration date of the message |

## Тип

[messages.BotPreparedInlineMessage](/type/messages.BotPreparedInlineMessage/)

## Related pages

#### [Web events](https://core.telegram.org/api/web-events)

How telegram apps interact with webpages

#### [Inline queries](https://core.telegram.org/api/bots/inline)

Users can interact with your bot via inline queries, straight from the text input field in any chat.
