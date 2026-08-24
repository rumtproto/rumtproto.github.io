---
title: "InputBusinessAwayMessage"
original: "https://core.telegram.org/type/InputBusinessAwayMessage"
section: ref
kind: type
description: "Описывает сообщение об отсутствии Telegram Business, автоматически отправляемое пользователям, которые пишут нам, когда мы не в сети, в нерабочие часы, во время отпуска или в…"
layout: layout.njk
---

# InputBusinessAwayMessage

Описывает [сообщение об отсутствии Telegram Business](/api/business/#away-messages), автоматически отправляемое пользователям, которые пишут нам, когда мы не в сети, в нерабочие часы, во время отпуска или в любой другой заданный период, когда мы не можем ответить сразу.

```
inputBusinessAwayMessage#832175e0 flags:# offline_only:flags.0?true shortcut_id:int schedule:BusinessAwayMessageSchedule recipients:InputBusinessRecipients = InputBusinessAwayMessage;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputBusinessAwayMessage">inputBusinessAwayMessage</a></td><td>Описывает <a href="/api/business#away-messages">сообщение об отсутствии Telegram Business</a>, автоматически отправляемое пользователям, которые пишут нам, когда мы не в сети, в нерабочие часы, во время отпуска или в любой другой заданный период, когда мы не можем ответить сразу.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
