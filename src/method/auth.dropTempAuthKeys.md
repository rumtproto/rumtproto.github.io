---
title: "auth.dropTempAuthKeys (метод)"
original: "https://core.telegram.org/method/auth.dropTempAuthKeys"
section: ref
kind: method
layout: layout.njk
---

# auth.dropTempAuthKeys

*Метод из схемы TL.*

> Delete all temporary authorization keys **except for** the ones specified

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.dropTempAuthKeys#8e48a188 except_auth_keys:Vector<long> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| except_auth_keys | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | The auth keys that shouldn't be dropped. |

## Результат

[Bool](/type/Bool/)

## Both users and bots can use this method
