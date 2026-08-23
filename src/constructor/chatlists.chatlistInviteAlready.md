---
title: "chatlists.chatlistInviteAlready (конструктор)"
original: "https://core.telegram.org/constructor/chatlists.chatlistInviteAlready"
section: ref
kind: constructor
layout: layout.njk
---

# chatlists.chatlistInviteAlready

*Конструктор из схемы TL.*

> Updated info about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) we already imported.

## Определение TL

```
chatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| filter_id | [int](/type/int/) | ID of the imported folder |
| missing_peers | [Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | New peers to be imported |
| already_peers | [Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | Peers that were already imported |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Related chat information |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Related user information |

## Тип

[chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
