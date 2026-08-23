---
title: "pageRelatedArticle (конструктор)"
original: "https://core.telegram.org/constructor/pageRelatedArticle"
section: ref
kind: constructor
layout: layout.njk
---

# pageRelatedArticle

*Конструктор из схемы TL.*

> Related article

## Определение TL

```
pageRelatedArticle#b390dc08 flags:# url:string webpage_id:long title:flags.0?string description:flags.1?string photo_id:flags.2?long author:flags.3?string published_date:flags.4?int = PageRelatedArticle;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| url | [string](/type/string/) | URL of article |
| webpage_id | [long](/type/long/) | Webpage ID of generated IV preview |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Title |
| description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Description |
| photo_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[long](/type/long/) | ID of preview photo |
| author | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Author name |
| published_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Date of publication |

## Тип

[PageRelatedArticle](/type/PageRelatedArticle/)
