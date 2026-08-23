---
title: "smsjobs.finishJob (метод)"
original: "https://core.telegram.org/method/smsjobs.finishJob"
section: ref
kind: method
layout: layout.njk
---

# smsjobs.finishJob

*Метод из схемы TL.*

> Finish an SMS job (official clients only).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.finishJob#4f1ebf24 flags:# job_id:string error:flags.0?string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| job_id | [string](/type/string/) | Job ID. |
| error | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If failed, the error. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | SMSJOB_ID_INVALID | The specified job ID is invalid. |
