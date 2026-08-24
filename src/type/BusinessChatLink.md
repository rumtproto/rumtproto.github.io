---
title: "BusinessChatLink"
original: "https://core.telegram.org/type/BusinessChatLink"
section: ref
kind: type
description: "Содержит информацию о глубокой ссылке на бизнес-чат », созданной текущей учётной записью."
layout: layout.njk
---

# BusinessChatLink

Содержит информацию о [глубокой ссылке на бизнес-чат »](/api/business/#business-chat-links), созданной текущей учётной записью.

```
businessChatLink#b4ae666f flags:# link:string message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string views:int = BusinessChatLink;

---functions---

account.createBusinessChatLink#8851e68e link:InputBusinessChatLink = BusinessChatLink;
account.editBusinessChatLink#8c3410af slug:string link:InputBusinessChatLink = BusinessChatLink;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/businessChatLink">businessChatLink</a></td><td>Содержит информацию о <a href="/api/business#business-chat-links">глубокой ссылке на бизнес-чат »</a>, созданной текущей учётной записью.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.createBusinessChatLink">account.createBusinessChatLink</a></td><td>Создать <a href="/api/business#business-chat-links">глубокую ссылку на бизнес-чат »</a>.</td></tr><tr><td><a href="/method/account.editBusinessChatLink">account.editBusinessChatLink</a></td><td>Изменить созданную <a href="/api/business#business-chat-links">глубокую ссылку на бизнес-чат »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
