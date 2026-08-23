---
title: "messages.getAttachMenuBots (метод)"
original: "https://core.telegram.org/method/messages.getAttachMenuBots"
section: ref
kind: method
layout: layout.njk
---

# messages.getAttachMenuBots

*Метод из схемы TL.*

> Returns installed attachment menu [bot mini apps »](https://core.telegram.org/api/bots/attach)

## Определение TL

```
attachMenuBotsNotModified#f1d88a5c = AttachMenuBots;
attachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;
---functions---
messages.getAttachMenuBots#16fcc2cb hash:long = AttachMenuBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[AttachMenuBots](/type/AttachMenuBots/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Bot attachment menu and side menu entries](https://core.telegram.org/api/bots/attach)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
