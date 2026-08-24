---
title: "WebViewResult"
original: "https://core.telegram.org/type/WebViewResult"
section: ref
kind: type
description: "Содержит URL веб-представления с добавленными параметрами оформления и сведениями о пользователе"
layout: layout.njk
---

# WebViewResult

Содержит URL веб-представления с добавленными параметрами оформления и сведениями о пользователе

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;

---functions---

messages.requestWebView#269dc2c1 flags:# from_bot_menu:flags.4?true silent:flags.5?true compact:flags.7?true fullscreen:flags.8?true peer:InputPeer bot:InputUser url:flags.1?string start_param:flags.3?string theme_params:flags.2?DataJSON platform:string reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = WebViewResult;
messages.requestSimpleWebView#413a3e73 flags:# from_switch_webview:flags.1?true from_side_menu:flags.2?true compact:flags.7?true fullscreen:flags.8?true bot:InputUser url:flags.3?string start_param:flags.4?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
messages.requestAppWebView#53618bce flags:# write_allowed:flags.0?true compact:flags.7?true fullscreen:flags.8?true peer:InputPeer app:InputBotApp start_param:flags.1?string theme_params:flags.2?DataJSON platform:string = WebViewResult;
messages.requestMainWebView#c9e01e7b flags:# compact:flags.7?true fullscreen:flags.8?true peer:InputPeer bot:InputUser start_param:flags.1?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/webViewResultUrl">webViewResultUrl</a></td><td>Содержит URL веб-представления с добавленными параметрами оформления и сведениями о пользователе</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.requestWebView">messages.requestWebView</a></td><td>[@term:Mini App] Открыть <a href="/bots/webapps">mini app бота</a>, передав сведения о пользователе после его подтверждения.<br><br>После вызова этого метода и до тех пор, пока пользователь не закроет webview, необходимо каждые 60 секунд вызывать <a href="/method/messages.prolongWebView">messages.prolongWebView</a>.</td></tr><tr><td><a href="/method/messages.requestSimpleWebView">messages.requestSimpleWebView</a></td><td>Открыть <a href="/api/bots/webapps">mini app бота</a>.</td></tr><tr><td><a href="/method/messages.requestAppWebView">messages.requestAppWebView</a></td><td>Открыть <a href="/bots/webapps">mini app бота</a> по <a href="/api/links#direct-mini-app-links">прямой ссылке на Mini App</a>, передав сведения о пользователе после его подтверждения.<br><br>После вызова этого метода и до тех пор, пока пользователь не закроет webview, необходимо каждые 60 секунд вызывать <a href="/method/messages.prolongWebView">messages.prolongWebView</a>.</td></tr><tr><td><a href="/method/messages.requestMainWebView">messages.requestMainWebView</a></td><td>Открыть <a href="/api/bots/webapps#main-mini-apps">Main Mini App</a>.</td></tr></tbody></table>
