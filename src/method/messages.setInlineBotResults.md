---
title: "messages.setInlineBotResults"
original: "https://core.telegram.org/method/messages.setInlineBotResults"
section: ref
kind: method
description: "Ответить на инлайн-запрос, только для ботов"
layout: layout.njk
---

# messages.setInlineBotResults

Ответить на инлайн-запрос, только для ботов

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setInlineBotResults#bb12a419 flags:# gallery:flags.0?true private:flags.1?true query_id:long results:Vector<InputBotInlineResult> cache_time:int next_offset:flags.2?string switch_pm:flags.3?InlineBotSwitchPM switch_webview:flags.4?InlineBotWebView = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>gallery</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если результаты состоят из медиафайлов</td></tr><tr><td><strong>private</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если результаты разрешено кешировать на сервере только для пользователя, отправившего запрос. По умолчанию результаты могут возвращаться любому пользователю, отправившему такой же запрос</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Уникальный идентификатор запроса, на который дан ответ</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputBotInlineResult">InputBotInlineResult</a>&gt;</td><td>Вектор результатов инлайн-запроса</td></tr><tr><td><strong>cache_time</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное время в секундах, в течение которого результат инлайн-запроса может кешироваться на сервере. По умолчанию 300.</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>[@term:next_offset] Передайте смещение, которое клиент должен отправить в следующем запросе с тем же текстом, чтобы получить больше результатов. Передайте пустую строку, если больше результатов нет или если постраничная выборка не поддерживается. Длина смещения не может превышать 64 байт.</td></tr><tr><td><strong>switch_pm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/InlineBotSwitchPM">InlineBotSwitchPM</a></td><td>Если передано, клиенты отображают над остальным списком инлайн-результатов кнопку с указанным текстом, которая переключает пользователя в личный чат с ботом и отправляет боту стартовое сообщение с определённым параметром.</td></tr><tr><td><strong>switch_webview</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/InlineBotWebView">InlineBotWebView</a></td><td>[@term:Mini App] Если передано, клиенты отображают над остальным списком инлайн-результатов кнопку с указанным текстом, которая переключает пользователя в указанный <a href="/api/bots/webapps#inline-mode-mini-apps">Mini App в инлайн-режиме</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ARTICLE_TITLE_EMPTY</td><td>Заголовок статьи пуст.</td></tr><tr><td>400</td><td>AUDIO_CONTENT_URL_EMPTY</td><td>Удалённый URL, указанный в поле content, пуст.</td></tr><tr><td>400</td><td>AUDIO_TITLE_EMPTY</td><td>Указано пустое название аудиозаписи.</td></tr><tr><td>400</td><td>BUTTON_DATA_INVALID</td><td>Данные одной или нескольких переданных вами кнопок недействительны.</td></tr><tr><td>400</td><td>BUTTON_TYPE_INVALID</td><td>Недопустимый тип одной или нескольких переданных вами кнопок.</td></tr><tr><td>400</td><td>BUTTON_URL_INVALID</td><td>Недействительный URL кнопки.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr><tr><td>400</td><td>FILE_CONTENT_TYPE_INVALID</td><td>Недопустимый content-type файла.</td></tr><tr><td>400</td><td>FILE_TITLE_EMPTY</td><td>Указано пустое название файла.</td></tr><tr><td>400</td><td>GIF_CONTENT_TYPE_INVALID</td><td>Недействительный content-type для GIF.</td></tr><tr><td>400</td><td>MEDIA_CAPTION_TOO_LONG</td><td>Подпись слишком длинная.</td></tr><tr><td>400</td><td>MESSAGE_EMPTY</td><td>Указанное сообщение пусто.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>Указанное сообщение слишком длинное.</td></tr><tr><td>400</td><td>NEXT_OFFSET_INVALID</td><td>Указанное смещение длиннее 64 байт.</td></tr><tr><td>400</td><td>PEER_TYPES_INVALID</td><td>Переданное поле <a href="/constructor/keyboardButtonSwitchInline">keyboardButtonSwitchInline</a>.<code>peer_types</code> недействительно.</td></tr><tr><td>400</td><td>PHOTO_CONTENT_TYPE_INVALID</td><td>Недействительный MIME-тип фотографии.</td></tr><tr><td>400</td><td>PHOTO_CONTENT_URL_EMPTY</td><td>Недействительный URL фотографии.</td></tr><tr><td>400</td><td>PHOTO_INVALID</td><td>Недействительная фотография.</td></tr><tr><td>400</td><td>PHOTO_THUMB_URL_EMPTY</td><td>URL миниатюры фотографии пуст.</td></tr><tr><td>400</td><td>QUERY_ID_INVALID</td><td>Указанный идентификатор запроса недействителен.</td></tr><tr><td>400</td><td>REPLY_MARKUP_INVALID</td><td>Указанная разметка ответа недействительна.</td></tr><tr><td>400</td><td>RESULTS_TOO_MUCH</td><td>Указано слишком много результатов.</td></tr><tr><td>400</td><td>RESULT_ID_DUPLICATE</td><td>Вы указали повторяющийся идентификатор результата.</td></tr><tr><td>400</td><td>RESULT_ID_INVALID</td><td>Один из указанных идентификаторов результата недействителен.</td></tr><tr><td>400</td><td>RESULT_TYPE_INVALID</td><td>Недопустимый тип результата.</td></tr><tr><td>400</td><td>SEND_MESSAGE_MEDIA_INVALID</td><td>Указан недопустимый медиафайл.</td></tr><tr><td>400</td><td>SEND_MESSAGE_TYPE_INVALID</td><td>Недопустимый тип сообщения.</td></tr><tr><td>400</td><td>START_PARAM_EMPTY</td><td>Параметр start пуст.</td></tr><tr><td>400</td><td>START_PARAM_INVALID</td><td>Недействительный параметр start.</td></tr><tr><td>400</td><td>STICKER_DOCUMENT_INVALID</td><td>Указанный документ стикера недействителен.</td></tr><tr><td>400</td><td>SWITCH_PM_TEXT_EMPTY</td><td>Поле switch_pm.text было пустым.</td></tr><tr><td>400</td><td>SWITCH_WEBVIEW_URL_INVALID</td><td>URL, указанный в switch_webview.url, недействителен!</td></tr><tr><td>400</td><td>URL_INVALID</td><td>Указан недействительный URL.</td></tr><tr><td>403</td><td>USER_BOT_INVALID</td><td>При вызове этого метода пользовательские аккаунты обязаны передавать параметр метода <code>bot</code>. Если такого параметра у метода нет, метод могут вызывать только аккаунты ботов.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr><tr><td>400</td><td>VIDEO_CONTENT_TYPE_INVALID</td><td>Тип содержимого видео недействителен.</td></tr><tr><td>400</td><td>VIDEO_TITLE_EMPTY</td><td>Указанное название видео пусто.</td></tr><tr><td>400</td><td>WEBDOCUMENT_INVALID</td><td>Указан недействительный URL веб-документа.</td></tr><tr><td>400</td><td>WEBDOCUMENT_MIME_INVALID</td><td>Указан недействительный MIME-тип веб-документа.</td></tr><tr><td>400</td><td>WEBDOCUMENT_SIZE_TOO_BIG</td><td>Веб-документ слишком велик!</td></tr><tr><td>400</td><td>WEBDOCUMENT_URL_EMPTY</td><td>Указанный URL веб-документа пуст.</td></tr><tr><td>400</td><td>WEBDOCUMENT_URL_INVALID</td><td>Указанный URL webdocument недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/)

Кнопка для переключения пользователя в инлайн-режим

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты обязаны вставить имя пользователя бота и `query` в поле ввода чата, инициировав [инлайн-запрос](/api/bots/inline/).

Если установлен `same_peer`, клиенты используют текущий чат. Иначе клиенты предлагают пользователю выбрать чат, отфильтрованный по `peer_types`, если он указан.
