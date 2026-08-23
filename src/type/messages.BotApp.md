---
title: "messages.BotApp (тип)"
original: "https://core.telegram.org/type/messages.BotApp"
section: ref
kind: type
layout: layout.njk
---

# messages.BotApp

*Тип из схемы TL.*

> Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps)

## Определение TL

```
messages.botApp#eb50adf5 flags:# inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:BotApp = messages.BotApp;

---functions---

messages.getBotApp#34fdc5c3 app:InputBotApp hash:long = messages.BotApp;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.botApp](/constructor/messages.botApp/) | Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) |

## Методы

| Method | Описание |
|---|---|
| [messages.getBotApp](/method/messages.getBotApp/) | Obtain information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
