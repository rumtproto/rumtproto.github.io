---
title: "messages.setTyping (метод)"
original: "https://core.telegram.org/method/messages.setTyping"
section: ref
kind: method
layout: layout.njk
---

# messages.setTyping

*Метод из схемы TL.*

> Sends a current user typing event (see [SendMessageAction](/type/SendMessageAction/) for all event types) to a conversation partner or group.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setTyping#58943ee2 flags:# peer:InputPeer top_msg_id:flags.0?int action:SendMessageAction = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Target user or group |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [Topic ID](https://core.telegram.org/api/threads) |
| action | [SendMessageAction](/type/SendMessageAction/) | Type of action |

## Результат

[Bool](/type/Bool/)

## Both users and bots can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 400 | BUSINESS_PEER_INVALID | Messages can't be set to the specified peer through the current [business connection](https://core.telegram.org/api/business#connected-bots). |
| 400 | BUSINESS_PEER_USAGE_MISSING | You cannot send a message to a user through a [business connection](https://core.telegram.org/api/business#connected-bots) if the user hasn't recently contacted us. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_MONOFORUM_UNSUPPORTED | [Monoforums](https://core.telegram.org/api/channel#monoforums) do not support this feature. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 403 | GROUPCALL_FORBIDDEN | The specified group call cannot be used in this context. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MESSAGE_TOO_LONG | The provided message is too long. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 406 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | TEXTDRAFT_PEER_INVALID | sendMessageTextDraftAction can only be used in private 1-on-1 chats. |
| 400 | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |
| 403 | USER_IS_BLOCKED | You were blocked by this user. |
| 400 | USER_IS_BOT | Bots can't send messages to other bots. |

## Related pages

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [SendMessageAction](/type/SendMessageAction/)

User actions. Use this to provide users with detailed info about their chat partner's actions: typing or sending attachments of all kinds.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
