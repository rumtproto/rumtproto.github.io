---
title: "channels.toggleViewForumAsMessages (метод)"
original: "https://core.telegram.org/method/channels.toggleViewForumAsMessages"
section: ref
kind: method
layout: layout.njk
---

# channels.toggleViewForumAsMessages

*Метод из схемы TL.*

> Users may also choose to display messages from all topics of a [forum](https://core.telegram.org/api/forum) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method.
> Invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

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
channels.toggleViewForumAsMessages#9738bb15 channel:InputChannel enabled:Bool = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | The forum |
| enabled | [Bool](/type/Bool/) | The new value of the view_forum_as_messages flag. |

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

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [dialog](/constructor/dialog/)

Chat

#### [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/)

Users may also choose to display messages from all topics as if they were sent to a normal group, using a "View as messages" setting in the local client.  
This setting only affects the current account, and is synced to other logged in sessions using the [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) method; invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).
