---
title: "updateDialogFilter (конструктор)"
original: "https://core.telegram.org/constructor/updateDialogFilter"
section: ref
kind: constructor
layout: layout.njk
---

# updateDialogFilter

*Конструктор из схемы TL.*

> A new [folder](https://core.telegram.org/api/folders) was added

## Определение TL

```
updateDialogFilter#26ffde7d flags:# id:int filter:flags.0?DialogFilter = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [int](/type/int/) | [Folder](https://core.telegram.org/api/folders) ID |
| filter | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[DialogFilter](/type/DialogFilter/) | [Folder](https://core.telegram.org/api/folders) info |

## Тип

[Update](/type/Update/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
