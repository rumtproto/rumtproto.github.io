---
title: "messages.reactions (конструктор)"
original: "https://core.telegram.org/constructor/messages.reactions"
section: ref
kind: constructor
layout: layout.njk
---

# messages.reactions

*Конструктор из схемы TL.*

> List of [message reactions](https://core.telegram.org/api/reactions)

## Определение TL

```
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | Hash used for caching, can also be locally regenerated using the algorithm specified [here »](https://core.telegram.org/api/reactions#recent-reactions). |
| reactions | [Vector](https://core.telegram.org/type/Vector%20t)<[Reaction](/type/Reaction/)> | Reactions |

## Тип

[messages.Reactions](/type/messages.Reactions/)

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
