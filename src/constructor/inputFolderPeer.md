---
title: "inputFolderPeer (конструктор)"
original: "https://core.telegram.org/constructor/inputFolderPeer"
section: ref
kind: constructor
layout: layout.njk
---

# inputFolderPeer

*Конструктор из схемы TL.*

> Peer in a folder

## Определение TL

```
inputFolderPeer#fbd2c296 peer:InputPeer folder_id:int = InputFolderPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer |
| folder_id | [int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |

## Тип

[InputFolderPeer](/type/InputFolderPeer/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
