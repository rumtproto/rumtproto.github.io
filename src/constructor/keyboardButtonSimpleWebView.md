---
title: "keyboardButtonSimpleWebView"
original: "https://core.telegram.org/constructor/keyboardButtonSimpleWebView"
section: ref
kind: constructor
description: "Кнопка для открытия mini app бота с помощью messages.requestSimpleWebView без передачи сведений о пользователе веб-приложению."
layout: layout.njk
---

# keyboardButtonSimpleWebView

[@term:Mini App] Кнопка для открытия [mini app бота](/api/bots/webapps/) с помощью [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/) без передачи сведений о пользователе веб-приложению.

Может отправляться или приниматься только в составе клавиатуры ответа; для инлайн-клавиатур используйте [keyboardButtonWebView](/constructor/keyboardButtonWebView/).

При нажатии клиенты обязаны открыть [Mini App из кнопки клавиатуры](/api/bots/webapps/#keyboard-button-mini-apps) с помощью [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), передав `url` в поле [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/).`url`.

```
keyboardButtonSimpleWebView#e15c4370 flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
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

#### [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/)

Открыть [mini app бота](/api/bots/webapps/).

#### [keyboardButtonWebView](/constructor/keyboardButtonWebView/)

Кнопка для открытия [mini app бота](/api/bots/webapps/) с помощью [messages.requestWebView](/method/messages.requestWebView/) с передачей сведений о пользователе после его подтверждения.

Может отправляться или приниматься только в составе инлайн-клавиатуры; для клавиатур ответа используйте [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/).

При нажатии клиенты обязаны открыть [Mini App из инлайн-кнопки](/api/bots/webapps/#inline-button-mini-apps) с помощью [messages.requestWebView](/method/messages.requestWebView/), передав `url` в [messages.requestWebView](/method/messages.requestWebView/).`url`.
