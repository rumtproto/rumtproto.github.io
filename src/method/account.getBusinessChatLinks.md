---
title: "account.getBusinessChatLinks (метод)"
original: "https://core.telegram.org/method/account.getBusinessChatLinks"
section: ref
kind: method
layout: layout.njk
---

# account.getBusinessChatLinks

*Метод из схемы TL.*

> List all created [business chat deep links »](https://core.telegram.org/api/business#business-chat-links).

## Определение TL

```
account.businessChatLinks#ec43a2d1 links:Vector<BusinessChatLink> chats:Vector<Chat> users:Vector<User> = account.BusinessChatLinks;
---functions---
account.getBusinessChatLinks#6f70dde1 = account.BusinessChatLinks;
```

## Параметры

This constructor does not require any parameters.

## Результат

[account.BusinessChatLinks](/type/account.BusinessChatLinks/)

## Only users can use this method

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
