---
title: "inputBusinessGreetingMessage"
original: "https://core.telegram.org/constructor/inputBusinessGreetingMessage"
section: ref
kind: constructor
description: "Описывает приветственное сообщение Telegram Business, автоматически отправляемое новым пользователям, которые пишут нам в личные сообщения впервые или после определённого периода…"
layout: layout.njk
---

# inputBusinessGreetingMessage

Описывает [приветственное сообщение Telegram Business](/api/business/#greeting-messages), автоматически отправляемое новым пользователям, которые пишут нам в личные сообщения впервые или после определённого периода бездействия.

```
inputBusinessGreetingMessage#194cb3b shortcut_id:int recipients:InputBusinessRecipients no_activity_days:int = InputBusinessGreetingMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор <a href="/api/business#quick-reply-shortcuts">шаблона быстрого ответа, содержащего приветственные сообщения, которые нужно отправить; подробнее см. здесь »</a>.</td></tr><tr><td><strong>recipients</strong></td><td style="text-align: center;"><a href="/type/InputBusinessRecipients">InputBusinessRecipients</a></td><td>Допустимые получатели приветственных сообщений.</td></tr><tr><td><strong>no_activity_days</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Число дней, после которого личный чат считается неактивным; в настоящее время должно быть равно 7, 14, 21 или 28.</td></tr></tbody></table>

### Тип

[InputBusinessGreetingMessage](/type/InputBusinessGreetingMessage/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
