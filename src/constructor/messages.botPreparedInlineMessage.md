---
title: "messages.botPreparedInlineMessage"
original: "https://core.telegram.org/constructor/messages.botPreparedInlineMessage"
section: ref
kind: constructor
description: "Представляет заранее подготовленное инлайн-сообщение, сохранённое ботом для отправки пользователю через веб-приложение »"
layout: layout.njk
---

# messages.botPreparedInlineMessage

Представляет [заранее подготовленное инлайн-сообщение, сохранённое ботом для отправки пользователю через веб-приложение »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message)

```
messages.botPreparedInlineMessage#8ecf0511 id:string expire_date:int = messages.BotPreparedInlineMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор сохранённого сообщения, который нужно передать в поле <code>id</code> <a href="/api/web-events#web-app-send-prepared-message">события web_app_send_prepared_message »</a></td></tr><tr><td><strong>expire_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата истечения срока действия сообщения</td></tr></tbody></table>

### Тип

[messages.BotPreparedInlineMessage](/type/messages.BotPreparedInlineMessage/)

### Связанные страницы

#### [Веб-события](/api/web-events/)

Как приложения Telegram взаимодействуют с веб-страницами

#### [Инлайн-запросы](/api/bots/inline/)

Пользователи могут взаимодействовать с вашим ботом через инлайн-запросы прямо из поля ввода текста в любом чате.
