---
title: "chatlists.editExportedInvite (метод)"
original: "https://core.telegram.org/method/chatlists.editExportedInvite"
section: ref
kind: method
layout: layout.njk
---

# chatlists.editExportedInvite

*Метод из схемы TL.*

> Edit a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
exportedChatlistInvite#c5181ac flags:# title:string url:string peers:Vector<Peer> = ExportedChatlistInvite;
---functions---
chatlists.editExportedInvite#653db63d flags:# chatlist:InputChatlist slug:string title:flags.1?string peers:flags.2?Vector<InputPeer> = ExportedChatlistInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| chatlist | [InputChatlist](/type/InputChatlist/) | Folder ID |
| slug | [string](/type/string/) | slug obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | If set, sets a new name for the link |
| peers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | If set, changes the list of peers shared with the link |

## Результат

[ExportedChatlistInvite](/type/ExportedChatlistInvite/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | FILTER_ID_INVALID | The specified filter ID is invalid. |
| 400 | FILTER_NOT_SUPPORTED | The specified filter cannot be used in this context. |
| 400 | INVITE_SLUG_EMPTY | The specified invite slug is empty. |
| 400 | INVITE_SLUG_EXPIRED | The specified chat folder link has expired. |
| 400 | PEERS_LIST_EMPTY | The specified list of peers is empty. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
