---
title: "InputBotApp (тип)"
original: "https://core.telegram.org/type/InputBotApp"
section: ref
kind: type
layout: layout.njk
---

# InputBotApp

*Тип из схемы TL.*

> Used to fetch information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps)

## Определение TL

```
inputBotAppID#a920bd7a id:long access_hash:long = InputBotApp;
inputBotAppShortName#908c0407 bot_id:InputUser short_name:string = InputBotApp;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputBotAppID](/constructor/inputBotAppID/) | Used to fetch information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) by its ID |
| [inputBotAppShortName](/constructor/inputBotAppShortName/) | Used to fetch information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) by its short name |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
