---
title: "messages.exportedChatInviteReplaced (конструктор)"
original: "https://core.telegram.org/constructor/messages.exportedChatInviteReplaced"
section: ref
kind: constructor
layout: layout.njk
---

# messages.exportedChatInviteReplaced

*Конструктор из схемы TL.*

> The specified chat invite was replaced with another one

## Определение TL

```
messages.exportedChatInviteReplaced#222600ef invite:ExportedChatInvite new_invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| invite | [ExportedChatInvite](/type/ExportedChatInvite/) | The replaced chat invite |
| new_invite | [ExportedChatInvite](/type/ExportedChatInvite/) | The invite that replaces the previous invite |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[messages.ExportedChatInvite](/type/messages.ExportedChatInvite/)
