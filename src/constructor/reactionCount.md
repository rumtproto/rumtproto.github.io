---
title: "reactionCount (конструктор)"
original: "https://core.telegram.org/constructor/reactionCount"
section: ref
kind: constructor
layout: layout.njk
---

# reactionCount

*Конструктор из схемы TL.*

> Reactions

## Определение TL

```
reactionCount#a3d1cb80 flags:# chosen_order:flags.0?int reaction:Reaction count:int = ReactionCount;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| chosen_order | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | If set, indicates that the current user also sent this reaction. The integer value indicates when was the reaction added: the bigger the value, the newer the reaction. |
| reaction | [Reaction](/type/Reaction/) | The reaction. |
| count | [int](/type/int/) | Number of users that reacted with this emoji. |

## Тип

[ReactionCount](/type/ReactionCount/)
