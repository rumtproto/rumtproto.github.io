---
title: "account.ResolvedBusinessChatLinks (тип)"
original: "https://core.telegram.org/type/account.ResolvedBusinessChatLinks"
section: ref
kind: type
layout: layout.njk
---

# account.ResolvedBusinessChatLinks

*Тип из схемы TL.*

> Contains info about a single resolved [business chat deep link »](https://core.telegram.org/api/business#business-chat-links).

## Определение TL

```
account.resolvedBusinessChatLinks#9a23af21 flags:# peer:Peer message:string entities:flags.0?Vector<MessageEntity> chats:Vector<Chat> users:Vector<User> = account.ResolvedBusinessChatLinks;

---functions---

account.resolveBusinessChatLink#5492e5ee slug:string = account.ResolvedBusinessChatLinks;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.resolvedBusinessChatLinks](/constructor/account.resolvedBusinessChatLinks/) | Contains info about a single resolved [business chat deep link »](https://core.telegram.org/api/business#business-chat-links). |

## Методы

| Method | Описание |
|---|---|
| [account.resolveBusinessChatLink](/method/account.resolveBusinessChatLink/) | Resolve a [business chat deep link »](https://core.telegram.org/api/business#business-chat-links). |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
