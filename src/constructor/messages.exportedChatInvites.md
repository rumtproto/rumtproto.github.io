---
title: "messages.exportedChatInvites (конструктор)"
original: "https://core.telegram.org/constructor/messages.exportedChatInvites"
section: ref
kind: constructor
layout: layout.njk
---

# messages.exportedChatInvites

*Конструктор из схемы TL.*

> Info about chat invites exported by a certain admin.

## Определение TL

```
messages.exportedChatInvites#bdc62dcc count:int invites:Vector<ExportedChatInvite> users:Vector<User> = messages.ExportedChatInvites;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Number of invites exported by the admin |
| invites | [Vector](https://core.telegram.org/type/Vector%20t)<[ExportedChatInvite](/type/ExportedChatInvite/)> | Exported invites |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Info about the admin |

## Тип

[messages.ExportedChatInvites](/type/messages.ExportedChatInvites/)
