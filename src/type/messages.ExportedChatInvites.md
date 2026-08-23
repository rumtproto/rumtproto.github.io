---
title: "messages.ExportedChatInvites (тип)"
original: "https://core.telegram.org/type/messages.ExportedChatInvites"
section: ref
kind: type
layout: layout.njk
---

# messages.ExportedChatInvites

*Тип из схемы TL.*

> Info about chat invites exported by a certain admin.

## Определение TL

```
messages.exportedChatInvites#bdc62dcc count:int invites:Vector<ExportedChatInvite> users:Vector<User> = messages.ExportedChatInvites;

---functions---

messages.getExportedChatInvites#a2b5a3f6 flags:# revoked:flags.3?true peer:InputPeer admin_id:InputUser offset_date:flags.2?int offset_link:flags.2?string limit:int = messages.ExportedChatInvites;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.exportedChatInvites](/constructor/messages.exportedChatInvites/) | Info about chat invites exported by a certain admin. |

## Методы

| Method | Описание |
|---|---|
| [messages.getExportedChatInvites](/method/messages.getExportedChatInvites/) | Get info about the chat invites of a specific chat |
