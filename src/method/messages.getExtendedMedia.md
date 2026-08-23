---
title: "messages.getExtendedMedia (метод)"
original: "https://core.telegram.org/method/messages.getExtendedMedia"
section: ref
kind: method
layout: layout.njk
---

# messages.getExtendedMedia

*Метод из схемы TL.*

> Fetch updated information about [paid media, see here »](https://core.telegram.org/api/paid-media) for the full flow.
> This method will return an array of [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) updates, only for messages containing **already bought** paid media.  
> No information will be returned for messages containing not yet bought paid media.

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
messages.getExtendedMedia#84f80814 peer:InputPeer id:Vector<int> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer with visible paid media messages. |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of currently visible messages containing paid media. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Related pages

#### [Paid media](https://core.telegram.org/api/paid-media)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.

#### [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/)

You [bought a paid media »](https://core.telegram.org/api/paid-media): this update contains the revealed media.
