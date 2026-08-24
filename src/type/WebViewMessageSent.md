---
title: "WebViewMessageSent"
original: "https://core.telegram.org/type/WebViewMessageSent"
section: ref
kind: type
description: "Содержит информацию об инлайн-сообщении, отправленном Web App от имени пользователя."
layout: layout.njk
---

# WebViewMessageSent

Содержит информацию об инлайн-сообщении, отправленном [Web App](https://core.telegram.org/bots/webapps) от имени пользователя.

```
webViewMessageSent#c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;

---functions---

messages.sendWebViewResultMessage#a4314f5 bot_query_id:string result:InputBotInlineResult = WebViewMessageSent;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/webViewMessageSent">webViewMessageSent</a></td><td>Информация об отправленном инлайн-сообщении с веб-представлением</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.sendWebViewResultMessage">messages.sendWebViewResultMessage</a></td><td>Завершить взаимодействие с веб-представлением, начатое через <a href="/method/messages.requestWebView">messages.requestWebView</a>, отправив указанное сообщение в чат от имени пользователя.</td></tr></tbody></table>
