---
title: "messages.sendQuickReplyMessages (метод)"
original: "https://core.telegram.org/method/messages.sendQuickReplyMessages"
section: ref
kind: method
layout: layout.njk
---

# messages.sendQuickReplyMessages

*Метод из схемы TL.*

> Send a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts).

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
messages.sendQuickReplyMessages#6c750de1 peer:InputPeer shortcut_id:int id:Vector<int> random_id:Vector<long> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer where to send the shortcut (users only, for now). |
| shortcut_id | [int](/type/int/) | The ID of the quick reply shortcut to send. |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Specify a subset of messages from the shortcut to send; if empty, defaults to all of them. |
| random_id | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | Unique client IDs required to prevent message resending, one for each message we're sending, may be empty (but not recommended). See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
