---
title: "messages.toggleDialogFilterTags (метод)"
original: "https://core.telegram.org/method/messages.toggleDialogFilterTags"
section: ref
kind: method
layout: layout.njk
---

# messages.toggleDialogFilterTags

*Метод из схемы TL.*

> Enable or disable [folder tags »](https://core.telegram.org/api/folders#folder-tags).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.toggleDialogFilterTags#fd2dda49 enabled:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| enabled | [Bool](/type/Bool/) | Enable or disable folder tags. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
