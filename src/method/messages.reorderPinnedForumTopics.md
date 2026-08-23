---
title: "messages.reorderPinnedForumTopics (метод)"
original: "https://core.telegram.org/method/messages.reorderPinnedForumTopics"
section: ref
kind: method
layout: layout.njk
---

# messages.reorderPinnedForumTopics

*Метод из схемы TL.*

> Reorder pinned forum topics

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
messages.reorderPinnedForumTopics#e7841f0 flags:# force:flags.0?true peer:InputPeer order:Vector<int> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| force | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If not set, the order of only the topics present both server-side and in order will be changed (i.e. mentioning topics not pinned server-side in order will not pin them, and not mentioning topics pinned server-side will not unpin them). If set, the entire server-side pinned topic list will be replaced with order (i.e. mentioning topics not pinned server-side in order will pin them, and not mentioning topics pinned server-side will unpin them) |
| peer | [InputPeer](/type/InputPeer/) | The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located. |
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | [Topic IDs »](https://core.telegram.org/api/forum) |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
