---
title: "messages.searchCounter (конструктор)"
original: "https://core.telegram.org/constructor/messages.searchCounter"
section: ref
kind: constructor
layout: layout.njk
---

# messages.searchCounter

*Конструктор из схемы TL.*

> Indicates how many results would be found by a [messages.search](/method/messages.search/) call with the same parameters

## Определение TL

```
messages.searchCounter#e844ebff flags:# inexact:flags.1?true filter:MessagesFilter count:int = messages.SearchCounter;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| inexact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, the results may be inexact |
| filter | [MessagesFilter](/type/MessagesFilter/) | Provided message filter |
| count | [int](/type/int/) | Number of results that were found server-side |

## Тип

[messages.SearchCounter](/type/messages.SearchCounter/)

## Related pages

#### [messages.search](/method/messages.search/)

Search for messages.
