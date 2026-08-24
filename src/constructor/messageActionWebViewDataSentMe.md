---
title: "messageActionWebViewDataSentMe"
original: "https://core.telegram.org/constructor/messageActionWebViewDataSentMe"
section: ref
kind: constructor
description: "Данные из открытого мини-приложения бота в клавиатуре ответов были переданы боту, которому оно принадлежит (сервисное сообщение на стороне бота)."
layout: layout.njk
---

# messageActionWebViewDataSentMe

Данные из открытого [мини-приложения бота в клавиатуре ответов](/api/bots/webapps/) были переданы боту, которому оно принадлежит (сервисное сообщение на стороне бота).

```
messageActionWebViewDataSentMe#47dd8079 text:string data:string = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст кнопки <a href="/constructor/keyboardButtonSimpleWebView">keyboardButtonSimpleWebView</a>, нажатием которой было открыто веб-приложение.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Передаваемые данные.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/)

[@term:Mini App] Кнопка для открытия [mini app бота](/api/bots/webapps/) с помощью [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/) без передачи сведений о пользователе веб-приложению.

Может отправляться или приниматься только в составе клавиатуры ответа; для инлайн-клавиатур используйте [keyboardButtonWebView](/constructor/keyboardButtonWebView/).

При нажатии клиенты обязаны открыть [Mini App из кнопки клавиатуры](/api/bots/webapps/#keyboard-button-mini-apps) с помощью [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), передав `url` в поле [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/).`url`.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
