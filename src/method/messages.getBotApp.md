---
title: "messages.getBotApp"
original: "https://core.telegram.org/method/messages.getBotApp"
section: ref
kind: method
description: "Получить сведения о Mini App с прямой ссылкой"
layout: layout.njk
---

# messages.getBotApp

[@term:Mini App] Получить сведения о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps)

```
messages.botApp#eb50adf5 flags:# inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:BotApp = messages.BotApp;
---functions---
messages.getBotApp#34fdc5c3 app:InputBotApp hash:long = messages.BotApp;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>app</strong></td><td style="text-align: center;"><a href="/type/InputBotApp">InputBotApp</a></td><td>Сведения о приложении бота, полученные по <a href="/api/links#direct-mini-app-links">глубокой ссылке Direct Mini App »</a>.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr></tbody></table>

### Результат

[messages.BotApp](/type/messages.BotApp/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_APP_BOT_INVALID</td><td>Значение bot_id, переданное в конструкторе inputBotAppShortName, недействительно.</td></tr><tr><td>400</td><td>BOT_APP_INVALID</td><td>Указанное приложение бота недействительно.</td></tr><tr><td>400</td><td>BOT_APP_SHORTNAME_INVALID</td><td>Указанное короткое имя приложения бота недействительно.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
