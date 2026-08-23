---
title: "messages.clearRecentStickers (метод)"
original: "https://core.telegram.org/method/messages.clearRecentStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.clearRecentStickers

*Метод из схемы TL.*

> Clear recent stickers

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.clearRecentStickers#8999602d flags:# attached:flags.0?true = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| attached | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set this flag to clear the list of stickers recently attached to photo or video files |

## Результат

[Bool](/type/Bool/)

## Only users can use this method
