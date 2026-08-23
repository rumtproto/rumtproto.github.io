---
title: "inputMessagesFilterPhoneCalls (конструктор)"
original: "https://core.telegram.org/constructor/inputMessagesFilterPhoneCalls"
section: ref
kind: constructor
layout: layout.njk
---

# inputMessagesFilterPhoneCalls

*Конструктор из схемы TL.*

> Return only phone calls

## Определение TL

```
inputMessagesFilterPhoneCalls#80c99768 flags:# missed:flags.0?true = MessagesFilter;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| missed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Return only missed phone calls |

## Тип

[MessagesFilter](/type/MessagesFilter/)
