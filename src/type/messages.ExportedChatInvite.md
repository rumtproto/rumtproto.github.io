---
title: "messages.ExportedChatInvite (тип)"
original: "https://core.telegram.org/type/messages.ExportedChatInvite"
section: ref
kind: type
layout: layout.njk
---

# messages.ExportedChatInvite

*Тип из схемы TL.*

> Contains info about a chat invite, and eventually a pointer to the newest chat invite.

## Определение TL

```
messages.exportedChatInvite#1871be50 invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;
messages.exportedChatInviteReplaced#222600ef invite:ExportedChatInvite new_invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;

---functions---

messages.getExportedChatInvite#73746f5c peer:InputPeer link:string = messages.ExportedChatInvite;
messages.editExportedChatInvite#bdca2f75 flags:# revoked:flags.2?true peer:InputPeer link:string expire_date:flags.0?int usage_limit:flags.1?int request_needed:flags.3?Bool title:flags.4?string = messages.ExportedChatInvite;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.exportedChatInvite](/constructor/messages.exportedChatInvite/) | Info about a chat invite |
| [messages.exportedChatInviteReplaced](/constructor/messages.exportedChatInviteReplaced/) | The specified chat invite was replaced with another one |

## Методы

| Method | Описание |
|---|---|
| [messages.getExportedChatInvite](/method/messages.getExportedChatInvite/) | Get info about a chat invite |
| [messages.editExportedChatInvite](/method/messages.editExportedChatInvite/) | Edit an exported chat invite |
