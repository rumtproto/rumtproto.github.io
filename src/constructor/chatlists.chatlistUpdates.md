---
title: "chatlists.chatlistUpdates (конструктор)"
original: "https://core.telegram.org/constructor/chatlists.chatlistUpdates"
section: ref
kind: constructor
layout: layout.njk
---

# chatlists.chatlistUpdates

*Конструктор из схемы TL.*

> Updated information about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
chatlists.chatlistUpdates#93bd878d missing_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistUpdates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| missing_peers | [Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | New peers to join |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Related chat information |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Related user information |

## Тип

[chatlists.ChatlistUpdates](/type/chatlists.ChatlistUpdates/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
