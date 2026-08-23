---
title: "account.saveMusic (метод)"
original: "https://core.telegram.org/method/account.saveMusic"
section: ref
kind: method
layout: layout.njk
---

# account.saveMusic

*Метод из схемы TL.*

> Adds or removes a song from the current user's profile [see here »](https://core.telegram.org/api/profile#music) for more info on the music tab of the profile page.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.saveMusic#b26732a9 flags:# unsave:flags.0?true id:InputDocument after_id:flags.1?InputDocument = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| unsave | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, removes the song. |
| id | [InputDocument](/type/InputDocument/) | The song to add or remove; can be an already added song when reordering songs with after_id. Adding an already added song will never re-add it, only move it to the top of the song list (or after the song passed in after_id). |
| after_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputDocument](/type/InputDocument/) | If set, the song will be added after the passed song (must be already pinned on the profile). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | DOCUMENT_INVALID | The specified document is invalid. |

## Related pages

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
