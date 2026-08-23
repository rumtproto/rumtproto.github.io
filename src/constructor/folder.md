---
title: "folder (конструктор)"
original: "https://core.telegram.org/constructor/folder"
section: ref
kind: constructor
layout: layout.njk
---

# folder

*Конструктор из схемы TL.*

> Folder

## Определение TL

```
folder#ff544e65 flags:# autofill_new_broadcasts:flags.0?true autofill_public_groups:flags.1?true autofill_new_correspondents:flags.2?true id:int title:string photo:flags.3?ChatPhoto = Folder;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| autofill_new_broadcasts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Automatically add new channels to this folder |
| autofill_public_groups | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Automatically add joined new public supergroups to this folder |
| autofill_new_correspondents | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Automatically add new private chats to this folder |
| id | [int](/type/int/) | Folder ID |
| title | [string](/type/string/) | Folder title |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[ChatPhoto](/type/ChatPhoto/) | Folder picture |

## Тип

[Folder](/type/Folder/)
