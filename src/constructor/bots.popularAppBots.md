---
title: "bots.popularAppBots (конструктор)"
original: "https://core.telegram.org/constructor/bots.popularAppBots"
section: ref
kind: constructor
layout: layout.njk
---

# bots.popularAppBots

*Конструктор из схемы TL.*

> Popular [Main Mini Apps](https://core.telegram.org/api/bots/webapps#main-mini-apps), to be used in the [apps tab of global search »](https://core.telegram.org/api/search#apps-tab).

## Определение TL

```
bots.popularAppBots#1991b13b flags:# next_offset:flags.0?string users:Vector<User> = bots.PopularAppBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Offset for [pagination](https://core.telegram.org/api/offsets). |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | The bots associated to each [Main Mini App, see here »](https://core.telegram.org/api/bots/webapps#main-mini-apps) for more info. |

## Тип

[bots.PopularAppBots](/type/bots.PopularAppBots/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Search and filters](https://core.telegram.org/api/search)

Telegram allows applying detailed message filters while looking for messages in chats.
