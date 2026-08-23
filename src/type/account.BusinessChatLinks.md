---
title: "account.BusinessChatLinks (тип)"
original: "https://core.telegram.org/type/account.BusinessChatLinks"
section: ref
kind: type
layout: layout.njk
---

# account.BusinessChatLinks

*Тип из схемы TL.*

> Contains info about [business chat deep links »](https://core.telegram.org/api/business#business-chat-links) created by the current account.

## Определение TL

```
account.businessChatLinks#ec43a2d1 links:Vector<BusinessChatLink> chats:Vector<Chat> users:Vector<User> = account.BusinessChatLinks;

---functions---

account.getBusinessChatLinks#6f70dde1 = account.BusinessChatLinks;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.businessChatLinks](/constructor/account.businessChatLinks/) | Contains info about [business chat deep links »](https://core.telegram.org/api/business#business-chat-links) created by the current account. |

## Методы

| Method | Описание |
|---|---|
| [account.getBusinessChatLinks](/method/account.getBusinessChatLinks/) | List all created [business chat deep links »](https://core.telegram.org/api/business#business-chat-links). |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
