---
title: "messages.DialogFilters (тип)"
original: "https://core.telegram.org/type/messages.DialogFilters"
section: ref
kind: type
layout: layout.njk
---

# messages.DialogFilters

*Тип из схемы TL.*

> [Folder](https://core.telegram.org/api/folders) information

## Определение TL

```
messages.dialogFilters#2ad93719 flags:# tags_enabled:flags.0?true filters:Vector<DialogFilter> = messages.DialogFilters;

---functions---

messages.getDialogFilters#efd48c89 = messages.DialogFilters;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.dialogFilters](/constructor/messages.dialogFilters/) | [Folder and folder tags](https://core.telegram.org/api/folders) information |

## Методы

| Method | Описание |
|---|---|
| [messages.getDialogFilters](/method/messages.getDialogFilters/) | Get [folders](https://core.telegram.org/api/folders) |

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
