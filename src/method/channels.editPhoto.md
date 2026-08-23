---
title: "channels.editPhoto (метод)"
original: "https://core.telegram.org/method/channels.editPhoto"
section: ref
kind: method
layout: layout.njk
---

# channels.editPhoto

*Метод из схемы TL.*

> Change the photo of a [channel/supergroup](https://core.telegram.org/api/channel)

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
channels.editPhoto#f12e57c9 channel:InputChannel photo:InputChatPhoto = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | Channel/supergroup whose photo should be edited |
| photo | [InputChatPhoto](/type/InputChatPhoto/) | New photo |

## Результат

[Updates](/type/Updates/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_INVALID | Invalid chat. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | FILE_PARTS_INVALID | The number of file parts is invalid. |
| 400 | FILE_REFERENCE_INVALID | The specified [file reference](https://core.telegram.org/api/file-references) is invalid. |
| 400 | IMAGE_PROCESS_FAILED | Failure while processing image. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | PHOTO_CROP_SIZE_SMALL | Photo is too small. |
| 400 | PHOTO_EXT_INVALID | The extension of the photo is invalid. |
| 400 | PHOTO_FILE_MISSING | Profile photo file missing. |
| 400 | PHOTO_INVALID | Photo invalid. |
| 400 | STICKER_MIME_INVALID | The specified sticker MIME type is invalid. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.
