---
title: "messages.getBotApp (метод)"
original: "https://core.telegram.org/method/messages.getBotApp"
section: ref
kind: method
layout: layout.njk
---

# messages.getBotApp

*Метод из схемы TL.*

> Obtain information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps)

## Определение TL

```
messages.botApp#eb50adf5 flags:# inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:BotApp = messages.BotApp;
---functions---
messages.getBotApp#34fdc5c3 app:InputBotApp hash:long = messages.BotApp;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| app | [InputBotApp](/type/InputBotApp/) | Bot app information obtained from a [Direct Mini App deep link »](https://core.telegram.org/api/links#direct-mini-app-links). |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Результат

[messages.BotApp](/type/messages.BotApp/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_APP_BOT_INVALID | The bot_id passed in the inputBotAppShortName constructor is invalid. |
| 400 | BOT_APP_INVALID | The specified bot app is invalid. |
| 400 | BOT_APP_SHORTNAME_INVALID | The specified bot app short name is invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
