---
title: "phone.discardCall (метод)"
original: "https://core.telegram.org/method/phone.discardCall"
section: ref
kind: method
layout: layout.njk
---

# phone.discardCall

*Метод из схемы TL.*

> Refuse or end running call, see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow.

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
phone.discardCall#b2cbc1c0 flags:# video:flags.0?true peer:InputPhoneCall duration:int reason:PhoneCallDiscardReason connection_id:long = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this is a video call |
| peer | [InputPhoneCall](/type/InputPhoneCall/) | The phone call |
| duration | [int](/type/int/) | Call duration |
| reason | [PhoneCallDiscardReason](/type/PhoneCallDiscardReason/) | Why was the call discarded |
| connection_id | [long](/type/long/) | Preferred libtgvoip relay ID |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CALL_ALREADY_ACCEPTED | The call was already accepted. |
| 500 | CALL_OCCUPY_FAILED | The call failed because the user is already making another call. |
| 400 | CALL_PEER_INVALID | The provided call peer object is invalid. |

## Related pages

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
