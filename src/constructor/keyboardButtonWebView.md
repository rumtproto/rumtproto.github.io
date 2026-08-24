---
title: "keyboardButtonWebView"
original: "https://core.telegram.org/constructor/keyboardButtonWebView"
section: ref
kind: constructor
description: "Кнопка для открытия mini app бота с помощью messages.requestWebView с передачей сведений о пользователе после его подтверждения."
layout: layout.njk
---

# keyboardButtonWebView

[@term:Mini App] Кнопка для открытия [mini app бота](/api/bots/webapps/) с помощью [messages.requestWebView](/method/messages.requestWebView/) с передачей сведений о пользователе после его подтверждения.

Может отправляться или приниматься только в составе инлайн-клавиатуры; для клавиатур ответа используйте [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/).

При нажатии клиенты обязаны открыть [Mini App из инлайн-кнопки](/api/bots/webapps/#inline-button-mini-apps) с помощью [messages.requestWebView](/method/messages.requestWebView/), передав `url` в [messages.requestWebView](/method/messages.requestWebView/).`url`.

```
keyboardButtonWebView#e846b1a0 flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle">KeyboardButtonStyle</a></td><td>Стиль кнопки; подробнее о стилях кнопок см. <a href="/api/bots/buttons#button-styles">здесь »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст кнопки</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/bots/webapps">URL веб-приложения</a></td></tr></tbody></table>

### Тип

[KeyboardButton](/type/KeyboardButton/)

### Связанные страницы

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [messages.requestWebView](/method/messages.requestWebView/)

Открыть [mini app бота](https://core.telegram.org/bots/webapps), передав сведения о пользователе после его подтверждения.

После вызова этого метода и до тех пор, пока пользователь не закроет webview, необходимо каждые 60 секунд вызывать [messages.prolongWebView](/method/messages.prolongWebView/).

#### [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/)

Кнопка для открытия [mini app бота](/api/bots/webapps/) с помощью [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/) без передачи сведений о пользователе веб-приложению.

Может отправляться или приниматься только в составе клавиатуры ответа; для инлайн-клавиатур используйте [keyboardButtonWebView](/constructor/keyboardButtonWebView/).

При нажатии клиенты обязаны открыть [Mini App из кнопки клавиатуры](/api/bots/webapps/#keyboard-button-mini-apps) с помощью [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), передав `url` в поле [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/).`url`.
