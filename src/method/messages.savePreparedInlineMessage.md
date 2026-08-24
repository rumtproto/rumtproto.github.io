---
title: "messages.savePreparedInlineMessage"
original: "https://core.telegram.org/method/messages.savePreparedInlineMessage"
section: ref
kind: method
description: "Сохранить заранее подготовленное инлайн-сообщение для отправки пользователем mini app через событие web\\_app\\_send\\_prepared\\_message"
layout: layout.njk
---

# messages.savePreparedInlineMessage

[@term:Mini App] Сохранить [заранее подготовленное инлайн-сообщение](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) для отправки пользователем mini app через [событие web\_app\_send\_prepared\_message](/api/web-events/#web-app-send-prepared-message)

```
messages.botPreparedInlineMessage#8ecf0511 id:string expire_date:int = messages.BotPreparedInlineMessage;
---functions---
messages.savePreparedInlineMessage#f21f7f2f flags:# result:InputBotInlineResult user_id:InputUser peer_types:flags.0?Vector<InlineQueryPeerType> = messages.BotPreparedInlineMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>result</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineResult">InputBotInlineResult</a></td><td>Сообщение</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь, которому будет отправлено <a href="/api/web-events#web-app-send-prepared-message">событие web_app_send_prepared_message</a></td></tr><tr><td><strong>peer_types</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InlineQueryPeerType">InlineQueryPeerType</a>&gt;</td><td>Типы чатов, в которые можно отправить это сообщение</td></tr></tbody></table>

### Результат

[messages.BotPreparedInlineMessage](/type/messages.BotPreparedInlineMessage/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>RESULT_ID_INVALID</td><td>Один из указанных идентификаторов результата недействителен.</td></tr><tr><td>400</td><td>SEND_MESSAGE_GAME_INVALID</td><td>Конструктор inputBotInlineMessageGame может содержаться только в inputBotInlineResultGame, но не в inputBotInlineResult/inputBotInlineResultPhoto и подобных.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Веб-события](/api/web-events/)

Как приложения Telegram взаимодействуют с веб-страницами

#### [Инлайн-запросы](/api/bots/inline/)

Пользователи могут взаимодействовать с вашим ботом через инлайн-запросы прямо из поля ввода текста в любом чате.
