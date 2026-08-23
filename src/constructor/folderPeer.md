---
title: "folderPeer (конструктор)"
original: "https://core.telegram.org/constructor/folderPeer"
section: ref
kind: constructor
layout: layout.njk
---

# folderPeer

*Конструктор из схемы TL.*

> Peer in a folder

## Определение TL

```
folderPeer#e9baa668 peer:Peer folder_id:int = FolderPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Folder peer info |
| folder_id | [int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |

## Тип

[FolderPeer](/type/FolderPeer/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
