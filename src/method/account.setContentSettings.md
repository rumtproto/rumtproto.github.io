---
title: "account.setContentSettings (метод)"
original: "https://core.telegram.org/method/account.setContentSettings"
section: ref
kind: method
layout: layout.njk
---

# account.setContentSettings

*Метод из схемы TL.*

> Set sensitive content settings (for viewing or hiding NSFW content)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.setContentSettings#b574b16b flags:# sensitive_enabled:flags.0?true = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| sensitive_enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Enable NSFW content |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | SENSITIVE_CHANGE_FORBIDDEN | You can't change your sensitive content settings. |
