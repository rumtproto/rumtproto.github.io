---
title: "phone.deleteGroupCallMessages (метод)"
original: "https://core.telegram.org/method/phone.deleteGroupCallMessages"
section: ref
kind: method
layout: layout.njk
---

# phone.deleteGroupCallMessages

*Метод из схемы TL.*

> Delete specific messages from the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages) of a video chat/livestream or live story, including in RTMP mode.
> Non-admin participants may delete messages they sent; admins may delete any message.

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
phone.deleteGroupCallMessages#f64f54f7 flags:# report_spam:flags.0?true call:InputGroupCall messages:Vector<int> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| report_spam | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | When moderating another participant's messages, also report them as spam |
| call | [InputGroupCall](/type/InputGroupCall/) | Video chat/livestream or live story containing the messages |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of the messages to delete |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
