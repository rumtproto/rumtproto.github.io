---
title: "messages.toggleStickerSets (метод)"
original: "https://core.telegram.org/method/messages.toggleStickerSets"
section: ref
kind: method
layout: layout.njk
---

# messages.toggleStickerSets

*Метод из схемы TL.*

> Apply changes to multiple stickersets

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.toggleStickerSets#b5052fea flags:# uninstall:flags.0?true archive:flags.1?true unarchive:flags.2?true stickersets:Vector<InputStickerSet> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| uninstall | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Uninstall the specified stickersets |
| archive | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Archive the specified stickersets |
| unarchive | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Unarchive the specified stickersets |
| stickersets | [Vector](https://core.telegram.org/type/Vector%20t)<[InputStickerSet](/type/InputStickerSet/)> | Stickersets to act upon |

## Результат

[Bool](/type/Bool/)

## Only users can use this method
