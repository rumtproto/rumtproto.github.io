---
title: "pageBlockPhoto (конструктор)"
original: "https://core.telegram.org/constructor/pageBlockPhoto"
section: ref
kind: constructor
layout: layout.njk
---

# pageBlockPhoto

*Конструктор из схемы TL.*

> A photo

## Определение TL

```
pageBlockPhoto#1759c560 flags:# photo_id:long caption:PageCaption url:flags.0?string webpage_id:flags.0?long = PageBlock;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| photo_id | [long](/type/long/) | Photo ID |
| caption | [PageCaption](/type/PageCaption/) | Caption |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | HTTP URL of page the photo leads to when clicked |
| webpage_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | ID of preview of the page the photo leads to when clicked |

## Тип

[PageBlock](/type/PageBlock/)
