---
title: "webPagePending (конструктор)"
original: "https://core.telegram.org/constructor/webPagePending"
section: ref
kind: constructor
layout: layout.njk
---

# webPagePending

*Конструктор из схемы TL.*

> A preview of the webpage is currently being generated

## Определение TL

```
webPagePending#b0d13e47 flags:# id:long url:flags.0?string date:int = WebPage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [long](/type/long/) | ID of preview |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | URL of the webpage |
| date | [int](/type/int/) | When was the processing started |

## Тип

[WebPage](/type/WebPage/)
