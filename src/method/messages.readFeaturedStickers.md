---
title: "messages.readFeaturedStickers (метод)"
original: "https://core.telegram.org/method/messages.readFeaturedStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.readFeaturedStickers

*Метод из схемы TL.*

> Mark new featured stickers as read

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.readFeaturedStickers#5b118126 id:Vector<long> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | IDs of stickersets to mark as read |

## Результат

[Bool](/type/Bool/)

## Only users can use this method
