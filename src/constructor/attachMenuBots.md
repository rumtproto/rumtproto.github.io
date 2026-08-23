---
title: "attachMenuBots (конструктор)"
original: "https://core.telegram.org/constructor/attachMenuBots"
section: ref
kind: constructor
layout: layout.njk
---

# attachMenuBots

*Конструктор из схемы TL.*

> Represents a list of [bot mini apps that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach)

## Определение TL

```
attachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| bots | [Vector](https://core.telegram.org/type/Vector%20t)<[AttachMenuBot](/type/AttachMenuBot/)> | List of [bot mini apps that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach) |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Info about related users/bots |

## Тип

[AttachMenuBots](/type/AttachMenuBots/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Bot attachment menu and side menu entries](https://core.telegram.org/api/bots/attach)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
