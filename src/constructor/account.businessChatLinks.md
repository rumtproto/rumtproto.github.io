---
title: "account.businessChatLinks (конструктор)"
original: "https://core.telegram.org/constructor/account.businessChatLinks"
section: ref
kind: constructor
layout: layout.njk
---

# account.businessChatLinks

*Конструктор из схемы TL.*

> Contains info about [business chat deep links »](https://core.telegram.org/api/business#business-chat-links) created by the current account.

## Определение TL

```
account.businessChatLinks#ec43a2d1 links:Vector<BusinessChatLink> chats:Vector<Chat> users:Vector<User> = account.BusinessChatLinks;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| links | [Vector](https://core.telegram.org/type/Vector%20t)<[BusinessChatLink](/type/BusinessChatLink/)> | Links |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[account.BusinessChatLinks](/type/account.BusinessChatLinks/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
