---
title: "account.finishTakeoutSession (метод)"
original: "https://core.telegram.org/method/account.finishTakeoutSession"
section: ref
kind: method
layout: layout.njk
---

# account.finishTakeoutSession

*Метод из схемы TL.*

> Terminate a [takeout session, see here » for more info](https://core.telegram.org/api/takeout).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.finishTakeoutSession#1d2652ee flags:# success:flags.0?true = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| success | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Data exported successfully |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | TAKEOUT_REQUIRED | A [takeout](https://core.telegram.org/api/takeout) session needs to be initialized first, [see here » for more info](https://core.telegram.org/api/takeout). |

## Related pages

#### [Takeout API](https://core.telegram.org/api/takeout)

Telegram's API allows users to export all of their information through the takeout API.
