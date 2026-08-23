---
title: "chatlists.exportedInvites (конструктор)"
original: "https://core.telegram.org/constructor/chatlists.exportedInvites"
section: ref
kind: constructor
layout: layout.njk
---

# chatlists.exportedInvites

*Конструктор из схемы TL.*

> Info about multiple [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
chatlists.exportedInvites#10ab6dc7 invites:Vector<ExportedChatlistInvite> chats:Vector<Chat> users:Vector<User> = chatlists.ExportedInvites;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| invites | [Vector](https://core.telegram.org/type/Vector%20t)<[ExportedChatlistInvite](/type/ExportedChatlistInvite/)> | The [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links). |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Related chat information |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Related user information |

## Тип

[chatlists.ExportedInvites](/type/chatlists.ExportedInvites/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
