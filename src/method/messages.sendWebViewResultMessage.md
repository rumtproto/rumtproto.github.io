---
title: "messages.sendWebViewResultMessage"
original: "https://core.telegram.org/method/messages.sendWebViewResultMessage"
section: ref
kind: method
description: "Завершить взаимодействие с веб-представлением, начатое через messages.requestWebView, отправив указанное сообщение в чат от имени пользователя."
layout: layout.njk
---

# messages.sendWebViewResultMessage

Завершить взаимодействие с веб-представлением, начатое через [messages.requestWebView](/method/messages.requestWebView/), отправив указанное сообщение в чат от имени пользователя.

```
webViewMessageSent#c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;
---functions---
messages.sendWebViewResultMessage#a4314f5 bot_query_id:string result:InputBotInlineResult = WebViewMessageSent;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot_query_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор взаимодействия с webview, полученный из <a href="/method/messages.requestWebView">messages.requestWebView</a></td></tr><tr><td><strong>result</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineResult">InputBotInlineResult</a></td><td>Сообщение для отправки</td></tr></tbody></table>

### Результат

[WebViewMessageSent](/type/WebViewMessageSent/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>QUERY_ID_INVALID</td><td>Указанный идентификатор запроса недействителен.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>

### Связанные страницы

#### [messages.requestWebView](/method/messages.requestWebView/)

[@term:Mini App] Открыть [mini app бота](https://core.telegram.org/bots/webapps), передав сведения о пользователе после его подтверждения.

После вызова этого метода и до тех пор, пока пользователь не закроет webview, необходимо каждые 60 секунд вызывать [messages.prolongWebView](/method/messages.prolongWebView/).
