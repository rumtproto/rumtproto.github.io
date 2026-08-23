---
title: "help.saveAppLog (метод)"
original: "https://core.telegram.org/method/help.saveAppLog"
section: ref
kind: method
layout: layout.njk
---

# help.saveAppLog

*Метод из схемы TL.*

> Saves logs of application on the server.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
help.saveAppLog#6f02f748 events:Vector<InputAppEvent> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| events | [Vector](https://core.telegram.org/type/Vector%20t)<[InputAppEvent](/type/InputAppEvent/)> | List of input events |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »
