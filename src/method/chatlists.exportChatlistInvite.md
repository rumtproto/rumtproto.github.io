---
title: "chatlists.exportChatlistInvite (метод)"
original: "https://core.telegram.org/method/chatlists.exportChatlistInvite"
section: ref
kind: method
layout: layout.njk
---

# chatlists.exportChatlistInvite

*Метод из схемы TL.*

> Export a [folder »](https://core.telegram.org/api/folders), creating a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
chatlists.exportedChatlistInvite#10e6e3a6 filter:DialogFilter invite:ExportedChatlistInvite = chatlists.ExportedChatlistInvite;
---functions---
chatlists.exportChatlistInvite#8472478e chatlist:InputChatlist title:string peers:Vector<InputPeer> = chatlists.ExportedChatlistInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chatlist | [InputChatlist](/type/InputChatlist/) | The folder to export |
| title | [string](/type/string/) | An optional name for the link |
| peers | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | The list of channels, group and supergroups to share with the link. Basic groups will automatically be [converted to supergroups](https://core.telegram.org/api/channel#migration) when invoking the method. |

## Результат

[chatlists.ExportedChatlistInvite](/type/chatlists.ExportedChatlistInvite/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHATLISTS_TOO_MUCH | You have created too many folder links, hitting the chatlist_invites_limit_default/chatlist_invites_limit_premium [limits »](https://core.telegram.org/api/config#chatlist-invites-limit-default). |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | FILTER_ID_INVALID | The specified filter ID is invalid. |
| 400 | FILTER_NOT_SUPPORTED | The specified filter cannot be used in this context. |
| 400 | INVITES_TOO_MUCH | The maximum number of per-folder invites specified by the chatlist_invites_limit_default/chatlist_invites_limit_premium [client configuration parameters »](https://core.telegram.org/api/config#chatlist-invites-limit-default) was reached. |
| 400 | PEERS_LIST_EMPTY | The specified list of peers is empty. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
