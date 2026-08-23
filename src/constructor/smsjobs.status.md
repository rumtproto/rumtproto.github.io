---
title: "smsjobs.status (конструктор)"
original: "https://core.telegram.org/constructor/smsjobs.status"
section: ref
kind: constructor
layout: layout.njk
---

# smsjobs.status

*Конструктор из схемы TL.*

> Status

## Определение TL

```
smsjobs.status#2aee9191 flags:# allow_international:flags.0?true recent_sent:int recent_since:int recent_remains:int total_sent:int total_since:int last_gift_slug:flags.1?string terms_url:string = smsjobs.Status;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| allow_international | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Allow international numbers |
| recent_sent | [int](/type/int/) | Recently sent |
| recent_since | [int](/type/int/) | Since |
| recent_remains | [int](/type/int/) | Remaining |
| total_sent | [int](/type/int/) | Total sent |
| total_since | [int](/type/int/) | Total since |
| last_gift_slug | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Last gift deep link |
| terms_url | [string](/type/string/) | Terms of service URL |

## Тип

[smsjobs.Status](/type/smsjobs.Status/)
