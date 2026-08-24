---
title: "messages.reorderQuickReplies"
original: "https://core.telegram.org/method/messages.reorderQuickReplies"
section: ref
kind: method
description: "Изменить порядок быстрых ответов."
layout: layout.njk
---

# messages.reorderQuickReplies

Изменить порядок [быстрых ответов](/api/business/#quick-reply-shortcuts).

Это отправит обновление [updateQuickReplies](/constructor/updateQuickReplies/) в другие активные сессии.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reorderQuickReplies#60331907 order:Vector<int> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы всех созданных <a href="/api/business#quick-reply-shortcuts">шаблонов быстрых ответов</a> в нужном порядке.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [updateQuickReplies](/constructor/updateQuickReplies/)

Изменились сведения о [шаблонах быстрых ответов »](/api/business/#quick-reply-shortcuts) или их порядок.
