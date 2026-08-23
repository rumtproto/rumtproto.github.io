---
title: "webPageEmpty (конструктор)"
original: "https://core.telegram.org/constructor/webPageEmpty"
section: ref
kind: constructor
layout: layout.njk
---

# webPageEmpty

*Конструктор из схемы TL.*

> No preview is available for the webpage

## Определение TL

```
webPageEmpty#211a1788 flags:# id:long url:flags.0?string = WebPage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [long](/type/long/) | Preview ID |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | URL of the webpage. |

## Тип

[WebPage](/type/WebPage/)
