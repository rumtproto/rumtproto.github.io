---
title: "inputInvoiceBusinessBotTransferStars"
original: "https://core.telegram.org/constructor/inputInvoiceBusinessBotTransferStars"
section: ref
kind: constructor
description: "Перевести stars с баланса учётной записи пользователя, подключённой к бизнес-боту, на баланс бизнес-бота; подробнее обо всём процессе см. здесь »."
layout: layout.njk
---

# inputInvoiceBusinessBotTransferStars

Перевести stars с баланса учётной записи пользователя, [подключённой к бизнес-боту](/api/bots/connected-business-bots/), на баланс [бизнес-бота](/api/bots/connected-business-bots/); подробнее обо всём процессе см. [здесь »](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot).

```
inputInvoiceBusinessBotTransferStars#f4997e42 bot:InputUser stars:long = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Всегда <a href="/constructor/inputUserSelf">inputUserSelf</a>.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество звёзд для перевода.</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [inputUserSelf](/constructor/inputUserSelf/)

Определяет текущего пользователя.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
