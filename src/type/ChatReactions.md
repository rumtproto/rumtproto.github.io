---
title: "ChatReactions (тип)"
original: "https://core.telegram.org/type/ChatReactions"
section: ref
kind: type
layout: layout.njk
---

# ChatReactions

*Тип из схемы TL.*

> Available chat reactions

## Определение TL

```
chatReactionsNone#eafc32bc = ChatReactions;
chatReactionsAll#52928bca flags:# allow_custom:flags.0?true = ChatReactions;
chatReactionsSome#661d4037 reactions:Vector<Reaction> = ChatReactions;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatReactionsNone](/constructor/chatReactionsNone/) | No reactions are allowed |
| [chatReactionsAll](/constructor/chatReactionsAll/) | All reactions or all non-custom reactions are allowed |
| [chatReactionsSome](/constructor/chatReactionsSome/) | Some reactions are allowed |
