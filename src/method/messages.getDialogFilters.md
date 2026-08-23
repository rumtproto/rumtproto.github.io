---
title: "messages.getDialogFilters (метод)"
original: "https://core.telegram.org/method/messages.getDialogFilters"
section: ref
kind: method
layout: layout.njk
---

# messages.getDialogFilters

*Метод из схемы TL.*

> Get [folders](https://core.telegram.org/api/folders)

## Определение TL

```
messages.dialogFilters#2ad93719 flags:# tags_enabled:flags.0?true filters:Vector<DialogFilter> = messages.DialogFilters;
---functions---
messages.getDialogFilters#efd48c89 = messages.DialogFilters;
```

## Параметры

This constructor does not require any parameters.

## Результат

[messages.DialogFilters](/type/messages.DialogFilters/)

## Only users can use this method

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
