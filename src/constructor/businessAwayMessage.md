---
title: "businessAwayMessage"
original: "https://core.telegram.org/constructor/businessAwayMessage"
section: ref
kind: constructor
description: "Описывает сообщение об отсутствии Telegram Business, автоматически отправляемое пользователям, которые пишут нам, когда мы не в сети, в нерабочие часы, во время отпуска или в…"
layout: layout.njk
---

# businessAwayMessage

Описывает [сообщение об отсутствии Telegram Business](/api/business/#away-messages), автоматически отправляемое пользователям, которые пишут нам, когда мы не в сети, в нерабочие часы, во время отпуска или в любой другой заданный период, когда мы не можем ответить сразу.

```
businessAwayMessage#ef156a5c flags:# offline_only:flags.0?true shortcut_id:int schedule:BusinessAwayMessageSchedule recipients:BusinessRecipients = BusinessAwayMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>offline_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, сообщения не будут отправлены, если аккаунт был в сети в последние 10 минут.</td></tr><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор <a href="/api/business#quick-reply-shortcuts">шаблона быстрого ответа, содержащего сообщения об отсутствии, которые нужно отправить; подробнее см. здесь »</a>.</td></tr><tr><td><strong>schedule</strong></td><td style="text-align: center;"><a href="/type/BusinessAwayMessageSchedule">BusinessAwayMessageSchedule</a></td><td>Указывает, когда следует отправлять сообщения об отсутствии.</td></tr><tr><td><strong>recipients</strong></td><td style="text-align: center;"><a href="/type/BusinessRecipients">BusinessRecipients</a></td><td>Допустимые получатели сообщений об отсутствии.</td></tr></tbody></table>

### Тип

[BusinessAwayMessage](/type/BusinessAwayMessage/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
