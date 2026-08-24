---
title: "businessGreetingMessage"
original: "https://core.telegram.org/constructor/businessGreetingMessage"
section: ref
kind: constructor
description: "Описывает приветственное сообщение Telegram Business, автоматически отправляемое новым пользователям, которые пишут нам в личные сообщения впервые или после определённого периода…"
layout: layout.njk
---

# businessGreetingMessage

Описывает [приветственное сообщение Telegram Business](/api/business/#greeting-messages), автоматически отправляемое новым пользователям, которые пишут нам в личные сообщения впервые или после определённого периода бездействия.

```
businessGreetingMessage#e519abab shortcut_id:int recipients:BusinessRecipients no_activity_days:int = BusinessGreetingMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор <a href="/api/business#quick-reply-shortcuts">шаблона быстрого ответа, содержащего приветственные сообщения, которые нужно отправить; подробнее см. здесь »</a>.</td></tr><tr><td><strong>recipients</strong></td><td style="text-align: center;"><a href="/type/BusinessRecipients">BusinessRecipients</a></td><td>Допустимые получатели приветственных сообщений.</td></tr><tr><td><strong>no_activity_days</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Число дней, после которого личный чат считается неактивным; в настоящее время должно быть равно 7, 14, 21 или 28.</td></tr></tbody></table>

### Тип

[BusinessGreetingMessage](/type/BusinessGreetingMessage/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
