---
title: "bots.checkDownloadFileParams (метод)"
original: "https://core.telegram.org/method/bots.checkDownloadFileParams"
section: ref
kind: method
layout: layout.njk
---

# bots.checkDownloadFileParams

*Метод из схемы TL.*

> Check if a [mini app](https://core.telegram.org/api/bots/webapps) can request the download of a specific file: called when handling [web\_app\_request\_file\_download events »](https://core.telegram.org/api/web-events#web-app-request-file-download)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.checkDownloadFileParams#50077589 bot:InputUser file_name:string url:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The bot that owns the [mini app](https://core.telegram.org/api/bots/webapps) that requested the download |
| file_name | [string](/type/string/) | The filename from the [web_app_request_file_download event »](https://core.telegram.org/api/web-events#web-app-request-file-download) |
| url | [string](/type/string/) | The url from the [web_app_request_file_download event »](https://core.telegram.org/api/web-events#web-app-request-file-download) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Web events](https://core.telegram.org/api/web-events)

How telegram apps interact with webpages
