---
title: "stories.getAllReadPeerStories (метод)"
original: "https://core.telegram.org/method/stories.getAllReadPeerStories"
section: ref
kind: method
layout: layout.njk
---

# stories.getAllReadPeerStories

*Метод из схемы TL.*

> Obtain the latest read story ID for all peers when first logging in, returned as a list of [updateReadStories](/constructor/updateReadStories/) updates, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info.

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
stories.getAllReadPeerStories#9b5ae7f9 = Updates;
```

## Параметры

This constructor does not require any parameters.

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Related pages

#### [updateReadStories](/constructor/updateReadStories/)

Stories of a specific peer were marked as read.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
