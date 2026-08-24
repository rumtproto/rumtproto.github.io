---
title: "updateDeleteQuickReplyMessages"
original: "https://core.telegram.org/constructor/updateDeleteQuickReplyMessages"
section: ref
kind: constructor
description: "Одно или несколько сообщений в шаблоне быстрого ответа » были удалены."
layout: layout.njk
---

# updateDeleteQuickReplyMessages

Одно или несколько сообщений в [шаблоне быстрого ответа »](/api/business/#quick-reply-shortcuts) были удалены.

```
updateDeleteQuickReplyMessages#566fe7cd shortcut_id:int messages:Vector<int> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор шаблона быстрого ответа.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы удалённых сообщений.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
