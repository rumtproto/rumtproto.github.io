---
title: "account.getBusinessChatLinks"
original: "https://core.telegram.org/method/account.getBusinessChatLinks"
section: ref
kind: method
description: "Перечислить все созданные глубокие ссылки на бизнес-чат »."
layout: layout.njk
---

# account.getBusinessChatLinks

Перечислить все созданные [глубокие ссылки на бизнес-чат »](/api/business/#business-chat-links).

```
account.businessChatLinks#ec43a2d1 links:Vector<BusinessChatLink> chats:Vector<Chat> users:Vector<User> = account.BusinessChatLinks;
---functions---
account.getBusinessChatLinks#6f70dde1 = account.BusinessChatLinks;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[account.BusinessChatLinks](/type/account.BusinessChatLinks/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
