---
title: "account.updateBirthday (метод)"
original: "https://core.telegram.org/method/account.updateBirthday"
section: ref
kind: method
layout: layout.njk
---

# account.updateBirthday

*Метод из схемы TL.*

> Update our [birthday, see here »](https://core.telegram.org/api/profile#birthday) for more info.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBirthday#cc6e0c11 flags:# birthday:flags.0?Birthday = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| birthday | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Birthday](/type/Birthday/) | Birthday. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BIRTHDAY_INVALID | An invalid age was specified, must be between 0 and 150 years. |

## Related pages

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
