---
title: "chatlists.ChatlistUpdates (тип)"
original: "https://core.telegram.org/type/chatlists.ChatlistUpdates"
section: ref
kind: type
layout: layout.njk
---

# chatlists.ChatlistUpdates

*Тип из схемы TL.*

> Updated info about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
chatlists.chatlistUpdates#93bd878d missing_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistUpdates;

---functions---

chatlists.getChatlistUpdates#89419521 chatlist:InputChatlist = chatlists.ChatlistUpdates;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatlists.chatlistUpdates](/constructor/chatlists.chatlistUpdates/) | Updated information about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |

## Методы

| Method | Описание |
|---|---|
| [chatlists.getChatlistUpdates](/method/chatlists.getChatlistUpdates/) | Fetch new chats associated with an imported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). Must be invoked at most every chatlist_update_period seconds (as per the related [client configuration parameter »](https://core.telegram.org/api/config#chatlist-update-period)). |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
