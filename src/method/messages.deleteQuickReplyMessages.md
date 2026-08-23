---
title: "messages.deleteQuickReplyMessages (метод)"
original: "https://core.telegram.org/method/messages.deleteQuickReplyMessages"
section: ref
kind: method
layout: layout.njk
---

# messages.deleteQuickReplyMessages

*Метод из схемы TL.*

> Delete one or more messages from a [quick reply shortcut](https://core.telegram.org/api/business#quick-reply-shortcuts). This will also emit an [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) update.

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
messages.deleteQuickReplyMessages#e105e910 shortcut_id:int id:Vector<int> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| shortcut_id | [int](/type/int/) | [Shortcut ID](https://core.telegram.org/api/business#quick-reply-shortcuts). |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of shortcut messages to delete. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | SHORTCUT_INVALID | The specified shortcut is invalid. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/)

One or more messages in a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts) were deleted.
