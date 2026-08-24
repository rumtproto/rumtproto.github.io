---
title: "bots.checkDownloadFileParams"
original: "https://core.telegram.org/method/bots.checkDownloadFileParams"
section: ref
kind: method
description: "Проверить, может ли Mini App запросить скачивание конкретного файла: вызывается при обработке событий web\\_app\\_request\\_file\\_download »"
layout: layout.njk
---

# bots.checkDownloadFileParams

[@term:Mini App] Проверить, может ли [Mini App](/api/bots/webapps/) запросить скачивание конкретного файла: вызывается при обработке [событий web\_app\_request\_file\_download »](/api/web-events/#web-app-request-file-download)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.checkDownloadFileParams#50077589 bot:InputUser file_name:string url:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит <a href="/api/bots/webapps">mini app</a>, запросивший загрузку</td></tr><tr><td><strong>file_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><code>filename</code> из <a href="/api/web-events#web-app-request-file-download">события web_app_request_file_download »</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><code>url</code> из <a href="/api/web-events#web-app-request-file-download">события web_app_request_file_download »</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Веб-события](/api/web-events/)

Как приложения Telegram взаимодействуют с веб-страницами
