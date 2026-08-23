---
title: "Contacts.TopPeers (тип)"
original: "https://core.telegram.org/type/contacts.TopPeers"
section: ref
kind: type
layout: layout.njk
---

# Contacts.TopPeers

*Тип из схемы TL.*

> Top peers

## Определение TL

```
contacts.topPeersNotModified#de266ef5 = contacts.TopPeers;
contacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;
contacts.topPeersDisabled#b52c939d = contacts.TopPeers;

---functions---

contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true offset:int limit:int hash:long = contacts.TopPeers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [contacts.topPeersNotModified](/constructor/contacts.topPeersNotModified/) | Top peer info hasn't changed |
| [contacts.topPeers](/constructor/contacts.topPeers/) | Top peers |
| [contacts.topPeersDisabled](/constructor/contacts.topPeersDisabled/) | Top peers disabled |

## Методы

| Method | Описание |
|---|---|
| [contacts.getTopPeers](/method/contacts.getTopPeers/) | Get most used peers |
