---
title: "account.BusinessChatLinks"
original: "https://core.telegram.org/type/account.BusinessChatLinks"
section: ref
kind: type
description: "Содержит информацию о глубоких ссылках на бизнес-чат », созданных текущей учётной записью."
layout: layout.njk
---

# account.BusinessChatLinks

Содержит информацию о [глубоких ссылках на бизнес-чат »](/api/business/#business-chat-links), созданных текущей учётной записью.

```
account.businessChatLinks#ec43a2d1 links:Vector<BusinessChatLink> chats:Vector<Chat> users:Vector<User> = account.BusinessChatLinks;

---functions---

account.getBusinessChatLinks#6f70dde1 = account.BusinessChatLinks;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.businessChatLinks">account.businessChatLinks</a></td><td>Содержит информацию о <a href="/api/business#business-chat-links">глубоких ссылках на бизнес-чат »</a>, созданных текущей учётной записью.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getBusinessChatLinks">account.getBusinessChatLinks</a></td><td>Перечислить все созданные <a href="/api/business#business-chat-links">глубокие ссылки на бизнес-чат »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
