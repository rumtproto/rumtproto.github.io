---
title: "messages.deleteQuickReplyShortcut"
original: "https://core.telegram.org/method/messages.deleteQuickReplyShortcut"
section: ref
kind: method
description: "Полностью удалить ярлык быстрого ответа."
layout: layout.njk
---

# messages.deleteQuickReplyShortcut

Полностью удалить [ярлык быстрого ответа](/api/business/#quick-reply-shortcuts).  
Это также отправит обновление [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/) в другие активные сессии (и _ни одного_ обновления [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/), даже если этот метод удалит и все сообщения в ярлыках).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.deleteQuickReplyShortcut#3cc04740 shortcut_id:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/business#quick-reply-shortcuts">Идентификатор шаблона</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>SHORTCUT_INVALID</td><td>Указанный шаблон быстрого ответа недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/)

[Шаблон быстрого ответа »](/api/business/#quick-reply-shortcuts) был удалён. Это **не** вызовет обновлений [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/), даже если этим обновлением удаляются и все сообщения шаблона.

#### [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/)

Одно или несколько сообщений в [шаблоне быстрого ответа »](/api/business/#quick-reply-shortcuts) были удалены.
