---
title: "chatlists.joinChatlistInvite (метод)"
original: "https://core.telegram.org/method/chatlists.joinChatlistInvite"
section: ref
kind: method
layout: layout.njk
---

# chatlists.joinChatlistInvite

*Метод из схемы TL.*

> Import a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links), joining some or all the chats in the folder.

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
chatlists.joinChatlistInvite#a6b1e39a slug:string peers:Vector<InputPeer> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | slug obtained from a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| peers | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | List of new chats to join, fetched using [chatlists.checkChatlistInvite](/method/chatlists.checkChatlistInvite/) and filtered as specified in the [documentation »](https://core.telegram.org/api/folders#shared-folders). |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNELS_TOO_MUCH | You have joined too many channels/supergroups. |
| 400 | CHATLISTS_TOO_MUCH | You have created too many folder links, hitting the chatlist_invites_limit_default/chatlist_invites_limit_premium [limits »](https://core.telegram.org/api/config#chatlist-invites-limit-default). |
| 400 | FILTER_INCLUDE_EMPTY | The include_peers vector of the filter is empty. |
| 400 | INVITE_SLUG_EMPTY | The specified invite slug is empty. |
| 400 | INVITE_SLUG_EXPIRED | The specified chat folder link has expired. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [chatlists.checkChatlistInvite](/method/chatlists.checkChatlistInvite/)

Obtain information about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
