---
title: "chatReactionsSome (конструктор)"
original: "https://core.telegram.org/constructor/chatReactionsSome"
section: ref
kind: constructor
layout: layout.njk
---

# chatReactionsSome

*Конструктор из схемы TL.*

> Some reactions are allowed

## Определение TL

```
chatReactionsSome#661d4037 reactions:Vector<Reaction> = ChatReactions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| reactions | [Vector](https://core.telegram.org/type/Vector%20t)<[Reaction](/type/Reaction/)> | Allowed set of reactions: the [reactions_in_chat_max](https://core.telegram.org/api/config#reactions-in-chat-max) configuration field indicates the maximum number of reactions that can be specified in this field. |

## Тип

[ChatReactions](/type/ChatReactions/)

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
