---
title: "messages.QuickReplies"
original: "https://core.telegram.org/type/messages.QuickReplies"
section: ref
kind: type
description: "Информация о шаблонах быстрых ответов »."
layout: layout.njk
---

# messages.QuickReplies

Информация о [шаблонах быстрых ответов »](/api/business/#quick-reply-shortcuts).

```
messages.quickReplies#c68d6695 quick_replies:Vector<QuickReply> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.QuickReplies;
messages.quickRepliesNotModified#5f91eb5b = messages.QuickReplies;

---functions---

messages.getQuickReplies#d483f2a8 hash:long = messages.QuickReplies;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.quickReplies">messages.quickReplies</a></td><td>Информация о <a href="/api/business#quick-reply-shortcuts">шаблонах быстрых ответов »</a>.</td></tr><tr><td><a href="/constructor/messages.quickRepliesNotModified">messages.quickRepliesNotModified</a></td><td>Информация о <a href="/api/business#quick-reply-shortcuts">шаблонах быстрых ответов »</a> не изменилась.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getQuickReplies">messages.getQuickReplies</a></td><td>Получить основные сведения обо всех существующих <a href="/api/business#quick-reply-shortcuts">шаблонах быстрых ответов</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
