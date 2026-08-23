---
title: "inputBotAppShortName (конструктор)"
original: "https://core.telegram.org/constructor/inputBotAppShortName"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotAppShortName

*Конструктор из схемы TL.*

> Used to fetch information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) by its short name

## Определение TL

```
inputBotAppShortName#908c0407 bot_id:InputUser short_name:string = InputBotApp;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot_id | [InputUser](/type/InputUser/) | ID of the bot that owns the bot mini app |
| short_name | [string](/type/string/) | Short name, obtained from a [Direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) |

## Тип

[InputBotApp](/type/InputBotApp/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
