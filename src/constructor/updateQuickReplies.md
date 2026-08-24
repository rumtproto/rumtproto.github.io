---
title: "updateQuickReplies"
original: "https://core.telegram.org/constructor/updateQuickReplies"
section: ref
kind: constructor
description: "Изменились сведения о шаблонах быстрых ответов » или их порядок."
layout: layout.njk
---

# updateQuickReplies

Изменились сведения о [шаблонах быстрых ответов »](/api/business/#quick-reply-shortcuts) или их порядок.

```
updateQuickReplies#f9470ab2 quick_replies:Vector<QuickReply> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>quick_replies</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/QuickReply">QuickReply</a>&gt;</td><td>Новый порядок шаблонов быстрых ответов и сведения о них.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
