---
title: "messageActionBotAllowed"
original: "https://core.telegram.org/constructor/messageActionBotAllowed"
section: ref
kind: constructor
description: "Мы разрешили боту отправлять нам личные сообщения."
layout: layout.njk
---

# messageActionBotAllowed

Мы разрешили боту отправлять нам личные сообщения.

Необязательные поля указывают, каким образом мы разрешили боту отправлять нам сообщения.

```
messageActionBotAllowed#c516d679 flags:# attach_menu:flags.1?true from_request:flags.3?true domain:flags.0?string app:flags.2?BotApp = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>attach_menu</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Мы разрешили боту отправлять нам сообщения, установив <a href="/api/bots/attach">меню вложений</a> этого бота.</td></tr><tr><td><strong>from_request</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Мы разрешили боту отправлять нам сообщения с помощью <a href="/method/bots.allowSendMessage">bots.allowSendMessage »</a>.</td></tr><tr><td><strong>domain</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Мы разрешили боту отправлять нам сообщения, войдя на сайт через <a href="/widgets/login">Telegram Login »</a>; это поле содержит доменное имя сайта, на котором пользователь выполнил вход.</td></tr><tr><td><strong>app</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/BotApp">BotApp</a></td><td>[@term:Mini App] Мы разрешили боту отправлять нам сообщения, открыв указанный <a href="/api/bots/webapps">mini app бота</a>.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Пункты меню вложений и бокового меню для ботов](/api/bots/attach/)

Боты могут добавлять пункты в меню вложений и в боковое меню, предлагая легкодоступные многофункциональные веб-приложения.

#### [bots.allowSendMessage](/method/bots.allowSendMessage/)

Разрешить указанному боту отправлять нам сообщения

#### [Виджет входа через Telegram](https://core.telegram.org/widgets/login)

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
