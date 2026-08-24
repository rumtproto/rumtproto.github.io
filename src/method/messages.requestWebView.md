---
title: "messages.requestWebView"
original: "https://core.telegram.org/method/messages.requestWebView"
section: ref
kind: method
description: "Открыть mini app бота, передав сведения о пользователе после его подтверждения."
layout: layout.njk
---

# messages.requestWebView

[@term:Mini App] Открыть [mini app бота](https://core.telegram.org/bots/webapps), передав сведения о пользователе после его подтверждения.

После вызова этого метода и до тех пор, пока пользователь не закроет webview, необходимо каждые 60 секунд вызывать [messages.prolongWebView](/method/messages.prolongWebView/).

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;
---functions---
messages.requestWebView#269dc2c1 flags:# from_bot_menu:flags.4?true silent:flags.5?true compact:flags.7?true fullscreen:flags.8?true peer:InputPeer bot:InputUser url:flags.1?string start_param:flags.3?string theme_params:flags.2?DataJSON platform:string reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = WebViewResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>from_bot_menu</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Был ли webview открыт нажатием на <a href="/api/bots/menu">кнопку меню »</a> бота.</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Следует ли отправить без звука (без уведомлений для получателей) инлайн-сообщение, которое бот отправит от имени пользователя после <a href="/method/messages.sendWebViewResultMessage">завершения</a> взаимодействия с веб-приложением.</td></tr><tr><td><strong>compact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Если установлено, запрашивает открытие mini app в компактном режиме (в отличие от обычного и полноэкранного режимов). Должно быть установлено, если параметр <code>mode</code> <a href="/api/links#bot-attachment-or-side-menu-links">глубокой ссылки на меню вложений</a> равен <code>compact</code>.</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Если установлено, запрашивает открытие mini app в полноэкранном режиме (в отличие от обычного и компактного режимов). Должно быть установлено, если параметр <code>mode</code> <a href="/api/links#bot-attachment-or-side-menu-links">глубокой ссылки на меню вложений</a> равен <code>fullscreen</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Диалог, в котором открывается веб-приложение и в который будет отправлено итоговое сообщение (подробнее см. <a href="/api/bots/webapps">документацию »</a>).</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит <a href="/api/bots/webapps">веб-приложение</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td><a href="/api/bots/webapps">URL веб-приложения</a></td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Если веб-приложение было открыто из меню вложений по <a href="/api/links#bot-attachment-or-side-menu-links">глубокой ссылке на меню вложений</a>, поле <code>start_param</code> должно содержать значение <code>data</code> из параметра <code>startattach</code>.</td></tr><tr><td><strong>theme_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/DataJSON">DataJSON</a></td><td><a href="/api/bots/webapps#theme-parameters">Параметры темы оформления »</a></td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Краткое имя приложения; 0–64 латинские буквы, цифры и подчёркивания</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputReplyTo">InputReplyTo</a></td><td>Если установлено, указывает, что инлайн-сообщение, которое бот отправит от имени пользователя после <a href="/method/messages.sendWebViewResultMessage">завершения</a> взаимодействия с веб-приложением, следует отправить в ответ на указанное сообщение или историю.</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/InputPeer">InputPeer</a></td><td>Открыть веб-приложение от имени указанного пира, отправив итоговое сообщение от имени этого же пира.</td></tr></tbody></table>

### Результат

[WebViewResult](/type/WebViewResult/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>BOT_WEBVIEW_DISABLED</td><td>Веб-представление нельзя открыть при указанных условиях: возникает, например, если заданы <code>from_bot_menu</code> или <code>url</code>, а <code>peer</code> не является чатом с ботом.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>403</td><td>PRIVACY_PREMIUM_REQUIRED</td><td>Чтобы отправить сообщение этому пользователю, нужна <a href="/api/premium">подписка Telegram Premium</a>.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>Вы не можете отправлять сообщения от имени указанного пира.</td></tr><tr><td>400</td><td>THEME_PARAMS_INVALID</td><td>Указанное поле <code>theme_params</code> недействительно.</td></tr><tr><td>400</td><td>URL_INVALID</td><td>Указан недействительный URL.</td></tr><tr><td>400</td><td>YOU_BLOCKED_USER</td><td>Вы заблокировали этого пользователя.</td></tr></tbody></table>

### Связанные страницы

#### [Кнопка меню бота](/api/bots/menu/)

Боты могут выбирать поведение кнопки меню, отображаемой рядом с полем ввода текста.

#### [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

Завершить взаимодействие с веб-представлением, начатое через [messages.requestWebView](/method/messages.requestWebView/), отправив указанное сообщение в чат от имени пользователя.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)

#### [messages.prolongWebView](/method/messages.prolongWebView/)

Сообщить серверу (со стороны пользователя), что пользователь всё ещё работает с веб-приложением.

Если метод возвращает ошибку `QUERY_ID_INVALID`, веб-представление необходимо закрыть.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
