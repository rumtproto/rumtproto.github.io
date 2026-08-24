---
title: "messages.getQuickReplies"
original: "https://core.telegram.org/method/messages.getQuickReplies"
section: ref
kind: method
description: "Получить основные сведения обо всех существующих шаблонах быстрых ответов."
layout: layout.njk
---

# messages.getQuickReplies

Получить основные сведения обо всех существующих [шаблонах быстрых ответов](/api/business/#quick-reply-shortcuts).

```
messages.quickReplies#c68d6695 quick_replies:Vector<QuickReply> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.QuickReplies;
messages.quickRepliesNotModified#5f91eb5b = messages.QuickReplies;
---functions---
messages.getQuickReplies#d483f2a8 hash:long = messages.QuickReplies;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш для постраничной выборки, вычисляемый так, как указано <a href="/api/business#quick-reply-shortcuts">здесь »</a> (не по обычному алгоритму вычисления хеша.)</td></tr></tbody></table>

### Результат

[messages.QuickReplies](/type/messages.QuickReplies/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
