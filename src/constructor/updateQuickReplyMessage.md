---
title: "updateQuickReplyMessage"
original: "https://core.telegram.org/constructor/updateQuickReplyMessage"
section: ref
kind: constructor
description: "В шаблон быстрого ответа » было добавлено новое сообщение."
layout: layout.njk
---

# updateQuickReplyMessage

В [шаблон быстрого ответа »](/api/business/#quick-reply-shortcuts) было добавлено новое сообщение.

```
updateQuickReplyMessage#3e050d0f message:Message = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message">Message</a></td><td>Добавленное сообщение (поле <a href="/constructor/message">message</a>.<code>quick_reply_shortcut_id</code> будет содержать идентификатор быстрого ответа).</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [message](/constructor/message/)

Сообщение

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
