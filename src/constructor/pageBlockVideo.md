---
title: "pageBlockVideo (конструктор)"
original: "https://core.telegram.org/constructor/pageBlockVideo"
section: ref
kind: constructor
layout: layout.njk
---

# pageBlockVideo

*Конструктор из схемы TL.*

> Video

## Определение TL

```
pageBlockVideo#7c8fe7b6 flags:# autoplay:flags.0?true loop:flags.1?true video_id:long caption:PageCaption = PageBlock;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| autoplay | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the video is set to autoplay |
| loop | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the video is set to loop |
| video_id | [long](/type/long/) | Video ID |
| caption | [PageCaption](/type/PageCaption/) | Caption |

## Тип

[PageBlock](/type/PageBlock/)
