---
title: "quickReply"
original: "https://core.telegram.org/constructor/quickReply"
section: ref
kind: constructor
description: "Шаблон быстрого ответа."
layout: layout.njk
---

# quickReply

[Шаблон быстрого ответа](/api/business/#quick-reply-shortcuts).

```
quickReply#697102b shortcut_id:int shortcut:string top_message:int count:int = QuickReply;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Уникальный идентификатор шаблона быстрого ответа.</td></tr><tr><td><strong>shortcut</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название быстрого ответа.</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор последнего сообщения в шаблоне быстрого ответа.</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число сообщений в шаблоне быстрого ответа.</td></tr></tbody></table>

### Тип

[QuickReply](/type/QuickReply/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
