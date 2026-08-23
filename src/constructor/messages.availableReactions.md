---
title: "messages.availableReactions (конструктор)"
original: "https://core.telegram.org/constructor/messages.availableReactions"
section: ref
kind: constructor
layout: layout.njk
---

# messages.availableReactions

*Конструктор из схемы TL.*

> Animations and metadata associated with [message reactions »](https://core.telegram.org/api/reactions)

## Определение TL

```
messages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| reactions | [Vector](https://core.telegram.org/type/Vector%20t)<[AvailableReaction](/type/AvailableReaction/)> | Animations and metadata associated with [message reactions »](https://core.telegram.org/api/reactions) |

## Тип

[messages.AvailableReactions](/type/messages.AvailableReactions/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
