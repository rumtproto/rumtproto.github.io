---
title: "account.ResolvedBusinessChatLinks"
original: "https://core.telegram.org/type/account.ResolvedBusinessChatLinks"
section: ref
kind: type
description: "Содержит информацию об одной разрешённой глубокой ссылке на бизнес-чат »."
layout: layout.njk
---

# account.ResolvedBusinessChatLinks

Содержит информацию об одной разрешённой [глубокой ссылке на бизнес-чат »](/api/business/#business-chat-links).

```
account.resolvedBusinessChatLinks#9a23af21 flags:# peer:Peer message:string entities:flags.0?Vector<MessageEntity> chats:Vector<Chat> users:Vector<User> = account.ResolvedBusinessChatLinks;

---functions---

account.resolveBusinessChatLink#5492e5ee slug:string = account.ResolvedBusinessChatLinks;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.resolvedBusinessChatLinks">account.resolvedBusinessChatLinks</a></td><td>Содержит информацию об одной разрешённой <a href="/api/business#business-chat-links">глубокой ссылке на бизнес-чат »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.resolveBusinessChatLink">account.resolveBusinessChatLink</a></td><td>Разрешить <a href="/api/business#business-chat-links">глубокую ссылку на бизнес-чат »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
