---
title: "webPageNotModified (конструктор)"
original: "https://core.telegram.org/constructor/webPageNotModified"
section: ref
kind: constructor
layout: layout.njk
---

# webPageNotModified

*Конструктор из схемы TL.*

> The preview of the webpage hasn't changed

## Определение TL

```
webPageNotModified#7311ca11 flags:# cached_page_views:flags.0?int = WebPage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| cached_page_views | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Page view count |

## Тип

[WebPage](/type/WebPage/)
