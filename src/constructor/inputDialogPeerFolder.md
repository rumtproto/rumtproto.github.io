---
title: "inputDialogPeerFolder (конструктор)"
original: "https://core.telegram.org/constructor/inputDialogPeerFolder"
section: ref
kind: constructor
layout: layout.njk
---

# inputDialogPeerFolder

*Конструктор из схемы TL.*

> All peers in a [peer folder](https://core.telegram.org/api/folders#peer-folders)

## Определение TL

```
inputDialogPeerFolder#64600527 folder_id:int = InputDialogPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| folder_id | [int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |

## Тип

[InputDialogPeer](/type/InputDialogPeer/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
