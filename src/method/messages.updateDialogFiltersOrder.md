---
title: "messages.updateDialogFiltersOrder (метод)"
original: "https://core.telegram.org/method/messages.updateDialogFiltersOrder"
section: ref
kind: method
layout: layout.njk
---

# messages.updateDialogFiltersOrder

*Метод из схемы TL.*

> Reorder [folders](https://core.telegram.org/api/folders)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.updateDialogFiltersOrder#c563c1e4 order:Vector<int> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | New [folder](https://core.telegram.org/api/folders) order |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
