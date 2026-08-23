---
title: "help.AppUpdate (тип)"
original: "https://core.telegram.org/type/help.AppUpdate"
section: ref
kind: type
layout: layout.njk
---

# help.AppUpdate

*Тип из схемы TL.*

> Contains info on app update availability.

## Определение TL

```
help.appUpdate#ccbbce30 flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string sticker:flags.3?Document = help.AppUpdate;
help.noAppUpdate#c45a6536 = help.AppUpdate;

---functions---

help.getAppUpdate#522d5a7d source:string = help.AppUpdate;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.appUpdate](/constructor/help.appUpdate/) | An update is available for the application. |
| [help.noAppUpdate](/constructor/help.noAppUpdate/) | No updates are available for the application. |

## Методы

| Method | Описание |
|---|---|
| [help.getAppUpdate](/method/help.getAppUpdate/) | Returns information on update availability for the current application. |
