---
title: "updateFolderPeers (конструктор)"
original: "https://core.telegram.org/constructor/updateFolderPeers"
section: ref
kind: constructor
layout: layout.njk
---

# updateFolderPeers

*Конструктор из схемы TL.*

> The peer list of a [peer folder](https://core.telegram.org/api/folders#peer-folders) was updated

## Определение TL

```
updateFolderPeers#19360dc0 folder_peers:Vector<FolderPeer> pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| folder_peers | [Vector](https://core.telegram.org/type/Vector%20t)<[FolderPeer](/type/FolderPeer/)> | New peer list |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
