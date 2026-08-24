---
title: "messages.prolongWebView"
original: "https://core.telegram.org/method/messages.prolongWebView"
section: ref
kind: method
description: "Сообщить серверу (со стороны пользователя), что пользователь всё ещё работает с веб-приложением."
layout: layout.njk
---

# messages.prolongWebView

Сообщить серверу (со стороны пользователя), что пользователь всё ещё работает с веб-приложением.

Если метод возвращает ошибку `QUERY_ID_INVALID`, веб-представление необходимо закрыть.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.prolongWebView#b0d81a83 flags:# silent:flags.5?true peer:InputPeer bot:InputUser query_id:long reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Следует ли отправить без звука (без уведомлений для получателей) инлайн-сообщение, которое бот отправит от имени пользователя после <a href="/method/messages.sendWebViewResultMessage">завершения</a> взаимодействия с веб-приложением.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Диалог, в котором было открыто веб-приложение.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит <a href="/api/bots/webapps">веб-приложение</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор взаимодействия с веб-приложением, полученный из <a href="/method/messages.requestWebView">messages.requestWebView</a></td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputReplyTo">InputReplyTo</a></td><td>Если установлено, указывает, что инлайн-сообщение, которое бот отправит от имени пользователя после <a href="/method/messages.sendWebViewResultMessage">завершения</a> взаимодействия с веб-приложением, следует отправить в ответ на указанное сообщение или историю.</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/InputPeer">InputPeer</a></td><td>Открыть веб-приложение от имени указанного пира</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

Завершить взаимодействие с веб-представлением, начатое через [messages.requestWebView](/method/messages.requestWebView/), отправив указанное сообщение в чат от имени пользователя.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [messages.requestWebView](/method/messages.requestWebView/)

[@term:Mini App] Открыть [mini app бота](https://core.telegram.org/bots/webapps), передав сведения о пользователе после его подтверждения.

После вызова этого метода и до тех пор, пока пользователь не закроет webview, необходимо каждые 60 секунд вызывать [messages.prolongWebView](/method/messages.prolongWebView/).
