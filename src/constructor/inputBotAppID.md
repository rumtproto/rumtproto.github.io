---
title: "inputBotAppID (конструктор)"
original: "https://core.telegram.org/constructor/inputBotAppID"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotAppID

*Конструктор из схемы TL.*

> Used to fetch information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) by its ID

## Определение TL

```
inputBotAppID#a920bd7a id:long access_hash:long = InputBotApp;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) ID. |
| access_hash | [long](/type/long/) | Access hash, obtained from the [botApp](/constructor/botApp/) constructor. |

## Тип

[InputBotApp](/type/InputBotApp/)

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [botApp](/constructor/botApp/)

Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps).
