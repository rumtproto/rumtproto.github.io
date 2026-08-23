---
title: "account.updateStatus (метод)"
original: "https://core.telegram.org/method/account.updateStatus"
section: ref
kind: method
layout: layout.njk
---

# account.updateStatus

*Метод из схемы TL.*

> Updates online user status.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateStatus#6628562c offline:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offline | [Bool](/type/Bool/) | If [(boolTrue)](/constructor/boolTrue/) is transmitted, user status will change to [(userStatusOffline)](/constructor/userStatusOffline/). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.

#### [userStatusOffline](/constructor/userStatusOffline/)

The user's offline status.
