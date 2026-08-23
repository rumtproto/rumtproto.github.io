---
title: "factCheck (конструктор)"
original: "https://core.telegram.org/constructor/factCheck"
section: ref
kind: constructor
layout: layout.njk
---

# factCheck

*Конструктор из схемы TL.*

> Represents a [fact-check »](https://core.telegram.org/api/factcheck) created by an independent fact-checker.

## Определение TL

```
factCheck#b89bfccf flags:# need_check:flags.0?true country:flags.1?string text:flags.1?TextWithEntities hash:long = FactCheck;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| need_check | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the country/text fields will not be set, and the fact check must be fetched manually by the client (if it isn't already cached with the key specified in hash) using bundled [messages.getFactCheck](/method/messages.getFactCheck/) requests, when the message with the factcheck scrolls into view. |
| country | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | A two-letter ISO 3166-1 alpha-2 country code of the country for which the fact-check should be shown. |
| text | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[TextWithEntities](/type/TextWithEntities/) | The fact-check. |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Тип

[FactCheck](/type/FactCheck/)

## Related pages

#### [messages.getFactCheck](/method/messages.getFactCheck/)

Fetch one or more [factchecks, see here »](https://core.telegram.org/api/factcheck) for the full flow.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Fact checks](https://core.telegram.org/api/factcheck)

Telegram clients support displaying fact-checks added to messages by independent fact-checkers.
