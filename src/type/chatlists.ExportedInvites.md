---
title: "chatlists.ExportedInvites (тип)"
original: "https://core.telegram.org/type/chatlists.ExportedInvites"
section: ref
kind: type
layout: layout.njk
---

# chatlists.ExportedInvites

*Тип из схемы TL.*

> A list of exported [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
chatlists.exportedInvites#10ab6dc7 invites:Vector<ExportedChatlistInvite> chats:Vector<Chat> users:Vector<User> = chatlists.ExportedInvites;

---functions---

chatlists.getExportedInvites#ce03da83 chatlist:InputChatlist = chatlists.ExportedInvites;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatlists.exportedInvites](/constructor/chatlists.exportedInvites/) | Info about multiple [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links). |

## Методы

| Method | Описание |
|---|---|
| [chatlists.getExportedInvites](/method/chatlists.getExportedInvites/) | List all [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links) associated to a folder |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
