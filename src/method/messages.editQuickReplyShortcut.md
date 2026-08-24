---
title: "messages.editQuickReplyShortcut"
original: "https://core.telegram.org/method/messages.editQuickReplyShortcut"
section: ref
kind: method
description: "Переименовать быстрый ответ."
layout: layout.njk
---

# messages.editQuickReplyShortcut

Переименовать [быстрый ответ](/api/business/#quick-reply-shortcuts).  
Это вызовет отправку обновления [updateQuickReplies](/constructor/updateQuickReplies/) другим активным сессиям.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.editQuickReplyShortcut#5c003cef shortcut_id:int shortcut:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/business#quick-reply-shortcuts">Идентификатор шаблона</a>.</td></tr><tr><td><strong>shortcut</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Новое название шаблона.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr><tr><td>400</td><td>SHORTCUT_INVALID</td><td>Указанный шаблон быстрого ответа недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [updateQuickReplies](/constructor/updateQuickReplies/)

Изменились сведения о [шаблонах быстрых ответов »](/api/business/#quick-reply-shortcuts) или их порядок.
