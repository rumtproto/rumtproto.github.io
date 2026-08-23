---
title: "phone.createGroupCall (метод)"
original: "https://core.telegram.org/method/phone.createGroupCall"
section: ref
kind: method
layout: layout.njk
---

# phone.createGroupCall

*Метод из схемы TL.*

> Create a video chat or livestream, see [here »](https://core.telegram.org/api/group-calls#video-chats-livestreams) for the full flow.

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
phone.createGroupCall#48cdc6d8 flags:# rtmp_stream:flags.2?true peer:InputPeer random_id:int title:flags.0?string schedule_date:flags.1?int = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| rtmp_stream | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Create the call in [RTMP livestream mode »](https://core.telegram.org/api/group-calls#stream-mode), where one external streamer publishes all audio and video |
| peer | [InputPeer](/type/InputPeer/) | Associate the group call or livestream to the provided [group/supergroup/channel](https://core.telegram.org/api/channel) |
| random_id | [int](/type/int/) | Unique client message ID required to prevent creation of duplicate group calls. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Call title, if not set defaults to the group/channel's name. |
| schedule_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Schedule date, at least 10 seconds and at most 8 days in the future; the call must still be manually started using [phone.startScheduledGroupCall](/method/phone.startScheduledGroupCall/) |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CREATE_CALL_FAILED | An error occurred while creating the call. |
| 400 | GROUPCALL_ALREADY_DISCARDED | The group call was already discarded. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | SCHEDULE_DATE_INVALID | Invalid schedule date provided. |

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [phone.startScheduledGroupCall](/method/phone.startScheduledGroupCall/)

Start a scheduled [group call](https://core.telegram.org/api/group-calls#video-chats-livestreams).
