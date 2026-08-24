---
title: "account.businessChatLinks"
original: "https://core.telegram.org/constructor/account.businessChatLinks"
section: ref
kind: constructor
description: "Содержит информацию о глубоких ссылках на бизнес-чат », созданных текущей учётной записью."
layout: layout.njk
---

# account.businessChatLinks

Содержит информацию о [глубоких ссылках на бизнес-чат »](/api/business/#business-chat-links), созданных текущей учётной записью.

```
account.businessChatLinks#ec43a2d1 links:Vector<BusinessChatLink> chats:Vector<Chat> users:Vector<User> = account.BusinessChatLinks;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>links</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/BusinessChatLink">BusinessChatLink</a>&gt;</td><td>Ссылки</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr></tbody></table>

### Тип

[account.BusinessChatLinks](/type/account.BusinessChatLinks/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
