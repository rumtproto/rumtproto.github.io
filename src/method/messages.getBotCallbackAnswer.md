---
title: "messages.getBotCallbackAnswer (метод)"
original: "https://core.telegram.org/method/messages.getBotCallbackAnswer"
section: ref
kind: method
layout: layout.njk
---

# messages.getBotCallbackAnswer

*Метод из схемы TL.*

> Press an inline callback button and get a callback answer from the bot

## Определение TL

```
messages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;
---functions---
messages.getBotCallbackAnswer#9342ca07 flags:# game:flags.1?true peer:InputPeer msg_id:int data:flags.0?bytes password:flags.2?InputCheckPasswordSRP = messages.BotCallbackAnswer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| game | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this is a "play game" button |
| peer | [InputPeer](/type/InputPeer/) | Where was the inline keyboard sent |
| msg_id | [int](/type/int/) | ID of the Message with the inline keyboard |
| data | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](/type/bytes/) | Callback data |
| password | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) | For buttons [requiring you to verify your identity with your 2FA password](/constructor/keyboardButtonCallback/), the SRP payload generated using [SRP](/api/srp/). |

## Результат

[messages.BotCallbackAnswer](/type/messages.BotCallbackAnswer/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_RESPONSE_TIMEOUT | A timeout occurred while fetching data from the bot. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | DATA_INVALID | Encrypted data invalid. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PASSWORD_MISSING | You must [enable 2FA](/api/srp/) before executing this operation. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| -503 | Timeout | Timeout while fetching data. |

## Related pages

#### [keyboardButtonCallback](/constructor/keyboardButtonCallback/)

Callback button

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients send `data` to the bot, optionally providing the user's [2FA SRP parameters](/api/srp/) for identity verification, as described in [callback queries](https://core.telegram.org/api/bots/buttons#callback-queries).

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
