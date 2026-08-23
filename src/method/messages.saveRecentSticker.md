---
title: "messages.saveRecentSticker (метод)"
original: "https://core.telegram.org/method/messages.saveRecentSticker"
section: ref
kind: method
layout: layout.njk
---

# messages.saveRecentSticker

*Метод из схемы TL.*

> Add/remove sticker from recent stickers list

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.saveRecentSticker#392718f8 flags:# attached:flags.0?true id:InputDocument unsave:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| attached | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to add/remove stickers recently attached to photo or video files |
| id | [InputDocument](/type/InputDocument/) | Sticker |
| unsave | [Bool](/type/Bool/) | Whether to save or unsave the sticker |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STICKER_ID_INVALID | The provided sticker ID is invalid. |
