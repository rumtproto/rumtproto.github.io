---
title: "chatReactionsAll (конструктор)"
original: "https://core.telegram.org/constructor/chatReactionsAll"
section: ref
kind: constructor
layout: layout.njk
---

# chatReactionsAll

*Конструктор из схемы TL.*

> All reactions or all non-custom reactions are allowed

## Определение TL

```
chatReactionsAll#52928bca flags:# allow_custom:flags.0?true = ChatReactions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| allow_custom | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to allow custom reactions |

## Тип

[ChatReactions](/type/ChatReactions/)
