---
title: "BotApp (тип)"
original: "https://core.telegram.org/type/BotApp"
section: ref
kind: type
layout: layout.njk
---

# BotApp

*Тип из схемы TL.*

> Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps).

## Определение TL

```
botAppNotModified#5da674b7 = BotApp;
botApp#95fcd1d6 flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document hash:long = BotApp;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [botAppNotModified](/constructor/botAppNotModified/) | Bot app info hasn't changed. |
| [botApp](/constructor/botApp/) | Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps). |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
