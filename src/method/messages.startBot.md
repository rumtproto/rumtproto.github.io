---
title: "messages.startBot (метод)"
original: "https://core.telegram.org/method/messages.startBot"
section: ref
kind: method
layout: layout.njk
---

# messages.startBot

*Метод из схемы TL.*

> Start a conversation with a bot using a [deep linking parameter](https://core.telegram.org/api/links#bot-links)

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.startBot#e6df7378 bot:InputUser peer:InputPeer random_id:long start_param:string = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The bot |
| peer | [InputPeer](/type/InputPeer/) | The chat where to start the bot, can be the bot's private chat or a group |
| random_id | [long](/type/long/) | Random ID to avoid resending the same message. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| start_param | [string](/type/string/) | [Deep linking parameter](https://core.telegram.org/api/links#bot-links) |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 500 | RANDOM_ID_DUPLICATE | You provided a random ID that was already used. |
| 400 | START_PARAM_EMPTY | The start parameter is empty. |
| 400 | START_PARAM_INVALID | Start parameter invalid. |
| 400 | START_PARAM_TOO_LONG | Start parameter is too long. |

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
