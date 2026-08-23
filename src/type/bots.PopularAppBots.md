---
title: "bots.PopularAppBots (тип)"
original: "https://core.telegram.org/type/bots.PopularAppBots"
section: ref
kind: type
layout: layout.njk
---

# bots.PopularAppBots

*Тип из схемы TL.*

> Popular [Main Mini Apps](https://core.telegram.org/api/bots/webapps#main-mini-apps), to be used in the [apps tab of global search »](https://core.telegram.org/api/search#apps-tab).

## Определение TL

```
bots.popularAppBots#1991b13b flags:# next_offset:flags.0?string users:Vector<User> = bots.PopularAppBots;

---functions---

bots.getPopularAppBots#c2510192 offset:string limit:int = bots.PopularAppBots;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [bots.popularAppBots](/constructor/bots.popularAppBots/) | Popular [Main Mini Apps](https://core.telegram.org/api/bots/webapps#main-mini-apps), to be used in the [apps tab of global search »](https://core.telegram.org/api/search#apps-tab). |

## Методы

| Method | Описание |
|---|---|
| [bots.getPopularAppBots](/method/bots.getPopularAppBots/) | Fetch popular [Main Mini Apps](https://core.telegram.org/api/bots/webapps#main-mini-apps), to be used in the [apps tab of global search »](https://core.telegram.org/api/search#apps-tab). |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Search and filters](https://core.telegram.org/api/search)

Telegram allows applying detailed message filters while looking for messages in chats.
