---
title: "updateDeleteQuickReply"
original: "https://core.telegram.org/constructor/updateDeleteQuickReply"
section: ref
kind: constructor
description: "Шаблон быстрого ответа » был удалён. Это **не** вызовет обновлений updateDeleteQuickReplyMessages, даже если этим обновлением удаляются и все сообщения шаблона."
layout: layout.njk
---

# updateDeleteQuickReply

[Шаблон быстрого ответа »](/api/business/#quick-reply-shortcuts) был удалён. Это **не** вызовет обновлений [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/), даже если этим обновлением удаляются и все сообщения шаблона.

```
updateDeleteQuickReply#53e6f1ec shortcut_id:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор удалённого шаблона быстрого ответа.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/)

Одно или несколько сообщений в [шаблоне быстрого ответа »](/api/business/#quick-reply-shortcuts) были удалены.
