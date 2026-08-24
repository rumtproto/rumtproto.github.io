---
title: "messages.checkQuickReplyShortcut"
original: "https://core.telegram.org/method/messages.checkQuickReplyShortcut"
section: ref
kind: method
description: "Перед тем как предложить пользователю добавить сообщение в шаблон быстрого ответа, чтобы убедиться, что ни одно из ограничений, указанных здесь », не достигнуто."
layout: layout.njk
---

# messages.checkQuickReplyShortcut

Перед тем как предложить пользователю добавить сообщение в [шаблон быстрого ответа](/api/business/#quick-reply-shortcuts), чтобы убедиться, что ни одно из ограничений, указанных [здесь »](/api/business/#quick-reply-shortcuts), не достигнуто.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.checkQuickReplyShortcut#f1d0fbd3 shortcut:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>shortcut</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя шаблона (не идентификатор!).</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
