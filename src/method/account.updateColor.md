---
title: "account.updateColor (метод)"
original: "https://core.telegram.org/method/account.updateColor"
section: ref
kind: method
layout: layout.njk
---

# account.updateColor

*Метод из схемы TL.*

> Update the [accent color and background custom emoji »](https://core.telegram.org/api/colors) of the current account.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateColor#684d214e flags:# for_profile:flags.1?true color:flags.2?PeerColor = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| for_profile | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether to change the accent color emoji pattern of the profile page; otherwise, the accent color and emoji pattern of messages will be changed. |
| color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[PeerColor](/type/PeerColor/) | [ID of the accent color palette »](https://core.telegram.org/api/colors) to use (not RGB24, see [here »](https://core.telegram.org/api/colors) for more info). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | COLOR_INVALID | The specified color palette ID was invalid. |
| 400 | DOCUMENT_INVALID | The specified document is invalid. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |

## Related pages

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
