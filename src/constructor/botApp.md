---
title: "botApp (конструктор)"
original: "https://core.telegram.org/constructor/botApp"
section: ref
kind: constructor
layout: layout.njk
---

# botApp

*Конструктор из схемы TL.*

> Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps).

## Определение TL

```
botApp#95fcd1d6 flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document hash:long = BotApp;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [long](/type/long/) | bot mini app ID |
| access_hash | [long](/type/long/) | bot mini app access hash |
| short_name | [string](/type/string/) | bot mini app short name, used to generate [Direct Mini App deep links](https://core.telegram.org/api/links#direct-mini-app-links). |
| title | [string](/type/string/) | bot mini app title. |
| description | [string](/type/string/) | bot mini app description. |
| photo | [Photo](/type/Photo/) | bot mini app photo. |
| document | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Document](/type/Document/) | bot mini app animation. |
| hash | [long](/type/long/) | Hash to pass to [messages.getBotApp](/method/messages.getBotApp/), to avoid refetching bot app info if it hasn't changed. |

## Тип

[BotApp](/type/BotApp/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [messages.getBotApp](/method/messages.getBotApp/)

Obtain information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps)

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
