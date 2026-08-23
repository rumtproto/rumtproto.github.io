---
title: "messages.savePreparedInlineMessage (метод)"
original: "https://core.telegram.org/method/messages.savePreparedInlineMessage"
section: ref
kind: method
layout: layout.njk
---

# messages.savePreparedInlineMessage

*Метод из схемы TL.*

> Save a [prepared inline message](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message), to be shared by the user of the mini app using a [web\_app\_send\_prepared\_message event](https://core.telegram.org/api/web-events#web-app-send-prepared-message)

## Определение TL

```
messages.botPreparedInlineMessage#8ecf0511 id:string expire_date:int = messages.BotPreparedInlineMessage;
---functions---
messages.savePreparedInlineMessage#f21f7f2f flags:# result:InputBotInlineResult user_id:InputUser peer_types:flags.0?Vector<InlineQueryPeerType> = messages.BotPreparedInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| result | [InputBotInlineResult](/type/InputBotInlineResult/) | The message |
| user_id | [InputUser](/type/InputUser/) | The user to whom the [web_app_send_prepared_message event](https://core.telegram.org/api/web-events#web-app-send-prepared-message) event will be sent |
| peer_types | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[InlineQueryPeerType](/type/InlineQueryPeerType/)> | Types of chats where this message can be sent |

## Результат

[messages.BotPreparedInlineMessage](/type/messages.BotPreparedInlineMessage/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | RESULT_ID_INVALID | One of the specified result IDs is invalid. |
| 400 | SEND_MESSAGE_GAME_INVALID | An inputBotInlineMessageGame can only be contained in an inputBotInlineResultGame, not in an inputBotInlineResult/inputBotInlineResultPhoto/etc. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Web events](https://core.telegram.org/api/web-events)

How telegram apps interact with webpages

#### [Inline queries](https://core.telegram.org/api/bots/inline)

Users can interact with your bot via inline queries, straight from the text input field in any chat.
