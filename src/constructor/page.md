---
title: "page (конструктор)"
original: "https://core.telegram.org/constructor/page"
section: ref
kind: constructor
layout: layout.njk
---

# page

*Конструктор из схемы TL.*

> [Instant view](https://instantview.telegram.org) page

## Определение TL

```
page#98657f0d flags:# part:flags.0?true rtl:flags.1?true v2:flags.2?true url:string blocks:Vector<PageBlock> photos:Vector<Photo> documents:Vector<Document> views:flags.3?int = Page;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| part | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Indicates that not full page preview is available to the client and it will need to fetch full Instant View from the server using [messages.getWebPagePreview](/method/messages.getWebPagePreview/). |
| rtl | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the page contains RTL text |
| v2 | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this is an [IV v2](https://instantview.telegram.org/docs#what-39s-new-in-2-0) page |
| url | [string](/type/string/) | Original page HTTP URL |
| blocks | [Vector](https://core.telegram.org/type/Vector%20t)<[PageBlock](/type/PageBlock/)> | Page elements (like with HTML elements, only as TL constructors) |
| photos | [Vector](https://core.telegram.org/type/Vector%20t)<[Photo](/type/Photo/)> | Photos in page |
| documents | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Media in page |
| views | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | View count |

## Тип

[Page](/type/Page/)

## Related pages

#### [messages.getWebPagePreview](/method/messages.getWebPagePreview/)

Get preview of webpage
