---
title: "chatlists.getExportedInvites (метод)"
original: "https://core.telegram.org/method/chatlists.getExportedInvites"
section: ref
kind: method
layout: layout.njk
---

# chatlists.getExportedInvites

*Метод из схемы TL.*

> List all [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links) associated to a folder

## Определение TL

```
chatlists.exportedInvites#10ab6dc7 invites:Vector<ExportedChatlistInvite> chats:Vector<Chat> users:Vector<User> = chatlists.ExportedInvites;
---functions---
chatlists.getExportedInvites#ce03da83 chatlist:InputChatlist = chatlists.ExportedInvites;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chatlist | [InputChatlist](/type/InputChatlist/) | The folder |

## Результат

[chatlists.ExportedInvites](/type/chatlists.ExportedInvites/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FILTER_ID_INVALID | The specified filter ID is invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
