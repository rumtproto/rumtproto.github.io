---
title: "chatlists.ChatlistInvite (тип)"
original: "https://core.telegram.org/type/chatlists.ChatlistInvite"
section: ref
kind: type
layout: layout.njk
---

# chatlists.ChatlistInvite

*Тип из схемы TL.*

> Info about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
chatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
chatlists.chatlistInvite#f10ece2f flags:# title_noanimate:flags.1?true title:TextWithEntities emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;

---functions---

chatlists.checkChatlistInvite#41c10fff slug:string = chatlists.ChatlistInvite;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatlists.chatlistInviteAlready](/constructor/chatlists.chatlistInviteAlready/) | Updated info about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) we already imported. |
| [chatlists.chatlistInvite](/constructor/chatlists.chatlistInvite/) | Info about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |

## Методы

| Method | Описание |
|---|---|
| [chatlists.checkChatlistInvite](/method/chatlists.checkChatlistInvite/) | Obtain information about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
