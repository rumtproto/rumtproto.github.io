---
title: "help.getAppUpdate (метод)"
original: "https://core.telegram.org/method/help.getAppUpdate"
section: ref
kind: method
layout: layout.njk
---

# help.getAppUpdate

*Метод из схемы TL.*

> Returns information on update availability for the current application.

## Определение TL

```
help.appUpdate#ccbbce30 flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string sticker:flags.3?Document = help.AppUpdate;
help.noAppUpdate#c45a6536 = help.AppUpdate;
---functions---
help.getAppUpdate#522d5a7d source:string = help.AppUpdate;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| source | [string](/type/string/) | Source |

## Результат

[help.AppUpdate](/type/help.AppUpdate/)

## Only users can use this method
