---
title: "phone.inviteToGroupCall (метод)"
original: "https://core.telegram.org/method/phone.inviteToGroupCall"
section: ref
kind: method
layout: layout.njk
---

# phone.inviteToGroupCall

*Метод из схемы TL.*

> Invite a set of users to a [video chat/livestream »](https://core.telegram.org/api/group-calls#video-chats-livestreams); cannot be used for [live stories »](https://core.telegram.org/api/group-calls#live-stories) or [conference calls »](https://core.telegram.org/api/group-calls#conference-calls).

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
phone.inviteToGroupCall#7b393160 call:InputGroupCall users:Vector<InputUser> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | The [video chat/livestream »](https://core.telegram.org/api/group-calls#video-chats-livestreams) |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](/type/InputUser/)> | The users to invite. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | CHAT_TYPE_INVALID | The specified user type is invalid. |
| 403 | GROUPCALL_FORBIDDEN | The specified group call cannot be used in this context. |
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |
| 400 | INVITE_FORBIDDEN_WITH_JOINAS | If the user has anonymously joined a group call as a channel, they can't invite other users to the group call because that would cause deanonymization, because the invite would be sent using the original user ID, not the anonymized channel ID. |
| 400 | USER_ALREADY_INVITED | You have already invited this user. |
| 403 | USER_NOT_PARTICIPANT | You're not a member of this supergroup/channel. |

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
