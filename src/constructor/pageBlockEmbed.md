---
title: "pageBlockEmbed (конструктор)"
original: "https://core.telegram.org/constructor/pageBlockEmbed"
section: ref
kind: constructor
layout: layout.njk
---

# pageBlockEmbed

*Конструктор из схемы TL.*

> An embedded webpage

## Определение TL

```
pageBlockEmbed#a8718dc5 flags:# full_width:flags.0?true allow_scrolling:flags.3?true url:flags.1?string html:flags.2?string poster_photo_id:flags.4?long w:flags.5?int h:flags.5?int caption:PageCaption = PageBlock;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| full_width | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the block should be full width |
| allow_scrolling | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether scrolling should be allowed |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Web page URL, if available |
| html | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | HTML-markup of the embedded page |
| poster_photo_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[long](/type/long/) | Poster photo, if available |
| w | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | Block width, if known |
| h | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | Block height, if known |
| caption | [PageCaption](/type/PageCaption/) | Caption |

## Тип

[PageBlock](/type/PageBlock/)
