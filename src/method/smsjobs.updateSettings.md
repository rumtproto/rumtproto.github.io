---
title: "smsjobs.updateSettings (метод)"
original: "https://core.telegram.org/method/smsjobs.updateSettings"
section: ref
kind: method
layout: layout.njk
---

# smsjobs.updateSettings

*Метод из схемы TL.*

> Update SMS job settings (official clients only).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.updateSettings#93fa0bf flags:# allow_international:flags.0?true = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| allow_international | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Allow international numbers? |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | NOT_JOINED | The current user hasn't joined the Peer-to-Peer Login Program. |
