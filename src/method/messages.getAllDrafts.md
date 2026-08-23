---
title: "messages.getAllDrafts (метод)"
original: "https://core.telegram.org/method/messages.getAllDrafts"
section: ref
kind: method
layout: layout.njk
---

# messages.getAllDrafts

*Метод из схемы TL.*

> Return all message [drafts](https://core.telegram.org/api/drafts).  
> Returns all the latest [updateDraftMessage](/constructor/updateDraftMessage/) updates related to all chats with drafts.

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
messages.getAllDrafts#6a3f8d65 = Updates;
```

## Параметры

This constructor does not require any parameters.

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Related pages

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts

#### [updateDraftMessage](/constructor/updateDraftMessage/)

Notifies a change of a message [draft](https://core.telegram.org/api/drafts).
