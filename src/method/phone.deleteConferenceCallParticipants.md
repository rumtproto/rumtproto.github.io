---
title: "phone.deleteConferenceCallParticipants (метод)"
original: "https://core.telegram.org/method/phone.deleteConferenceCallParticipants"
section: ref
kind: method
layout: layout.njk
---

# phone.deleteConferenceCallParticipants

*Метод из схемы TL.*

> Remove participants from a [conference call »](https://core.telegram.org/api/end-to-end/group-calls#removing-a-participant).
> Exactly one of the `only_left` and `kick` flags must be set.

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
phone.deleteConferenceCallParticipants#8ca60525 flags:# only_left:flags.0?true kick:flags.1?true call:InputGroupCall ids:Vector<long> block:bytes = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| only_left | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this is a removal of members that already left the conference call. |
| kick | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this is a forced removal of active members in a conference call. |
| call | [InputGroupCall](/type/InputGroupCall/) | Conference from which to remove participants |
| ids | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | User IDs to remove from the conference and E2E blockchain |
| block | [bytes](/type/bytes/) | Main-chain block removing the specified users and establishing a new shared key, see [removing a participant »](https://core.telegram.org/api/end-to-end/group-calls#removing-a-participant) |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |

## Related pages

#### [E2E Group Calls](https://core.telegram.org/api/end-to-end/group-calls)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
