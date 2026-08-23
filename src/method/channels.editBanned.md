---
title: "channels.editBanned (метод)"
original: "https://core.telegram.org/method/channels.editBanned"
section: ref
kind: method
layout: layout.njk
---

# channels.editBanned

*Метод из схемы TL.*

> Ban/unban/kick a user in a [supergroup/channel](https://core.telegram.org/api/channel).

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
channels.editBanned#96e6cd81 channel:InputChannel participant:InputPeer banned_rights:ChatBannedRights = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | The [supergroup/channel](https://core.telegram.org/api/channel). |
| participant | [InputPeer](/type/InputPeer/) | Participant to ban |
| banned_rights | [ChatBannedRights](/type/ChatBannedRights/) | The banned rights |

## Результат

[Updates](/type/Updates/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 406 | BANNED_RIGHTS_INVALID | You provided some invalid flags in the banned rights. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PARTICIPANT_ID_INVALID | The specified participant ID is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | USER_ADMIN_INVALID | You're not an admin. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
