---
title: "messages.sendWebViewData"
original: "https://core.telegram.org/method/messages.sendWebViewData"
section: ref
kind: method
description: "Используется пользователем для передачи данных из открытого бот-мини-приложения на клавиатуре ответа боту, которому оно принадлежит."
layout: layout.njk
---

# messages.sendWebViewData

Используется пользователем для передачи данных из открытого [бот-мини-приложения на клавиатуре ответа](/api/bots/webapps/) боту, которому оно принадлежит.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendWebViewData#dc0242c8 bot:InputUser random_id:long button_text:string data:string = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит веб-приложение</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Уникальный идентификатор сообщения на стороне клиента, предотвращающий повторную отправку того же события. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>button_text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст кнопки <a href="/constructor/keyboardButtonSimpleWebView">keyboardButtonSimpleWebView</a>, нажатием которой было открыто веб-приложение.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Данные для передачи боту, полученные из <a href="/api/web-events#web-app-data-send">JS-события <code>web_app_data_send</code></a>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/)

[@term:Mini App] Кнопка для открытия [mini app бота](/api/bots/webapps/) с помощью [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/) без передачи сведений о пользователе веб-приложению.

Может отправляться или приниматься только в составе клавиатуры ответа; для инлайн-клавиатур используйте [keyboardButtonWebView](/constructor/keyboardButtonWebView/).

При нажатии клиенты обязаны открыть [Mini App из кнопки клавиатуры](/api/bots/webapps/#keyboard-button-mini-apps) с помощью [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), передав `url` в поле [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/).`url`.

#### [Веб-события](/api/web-events/)

Как приложения Telegram взаимодействуют с веб-страницами

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
