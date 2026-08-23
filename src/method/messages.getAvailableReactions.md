---
title: "messages.getAvailableReactions (метод)"
original: "https://core.telegram.org/method/messages.getAvailableReactions"
section: ref
kind: method
layout: layout.njk
---

# messages.getAvailableReactions

*Метод из схемы TL.*

> Obtain available [message reactions »](https://core.telegram.org/api/reactions)

## Определение TL

```
messages.availableReactionsNotModified#9f071957 = messages.AvailableReactions;
messages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;
---functions---
messages.getAvailableReactions#18dea0ac hash:int = messages.AvailableReactions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.AvailableReactions](/type/messages.AvailableReactions/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
