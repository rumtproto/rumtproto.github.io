---
title: "messages.dialogFilters (конструктор)"
original: "https://core.telegram.org/constructor/messages.dialogFilters"
section: ref
kind: constructor
layout: layout.njk
---

# messages.dialogFilters

*Конструктор из схемы TL.*

> [Folder and folder tags](https://core.telegram.org/api/folders) information

## Определение TL

```
messages.dialogFilters#2ad93719 flags:# tags_enabled:flags.0?true filters:Vector<DialogFilter> = messages.DialogFilters;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| tags_enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether [folder tags](https://core.telegram.org/api/folders#folder-tags) are enabled. |
| filters | [Vector](https://core.telegram.org/type/Vector%20t)<[DialogFilter](/type/DialogFilter/)> | Folders. |

## Тип

[messages.DialogFilters](/type/messages.DialogFilters/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
