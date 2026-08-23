---
title: "bots.getPopularAppBots (метод)"
original: "https://core.telegram.org/method/bots.getPopularAppBots"
section: ref
kind: method
layout: layout.njk
---

# bots.getPopularAppBots

*Метод из схемы TL.*

> Fetch popular [Main Mini Apps](https://core.telegram.org/api/bots/webapps#main-mini-apps), to be used in the [apps tab of global search »](https://core.telegram.org/api/search#apps-tab).

## Определение TL

```
bots.popularAppBots#1991b13b flags:# next_offset:flags.0?string users:Vector<User> = bots.PopularAppBots;
---functions---
bots.getPopularAppBots#c2510192 offset:string limit:int = bots.PopularAppBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [string](/type/string/) | Offset for [pagination](https://core.telegram.org/api/offsets), initially an empty string, then re-use the next_offset returned by the previous query. |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[bots.PopularAppBots](/type/bots.PopularAppBots/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Search and filters](https://core.telegram.org/api/search)

Telegram allows applying detailed message filters while looking for messages in chats.
