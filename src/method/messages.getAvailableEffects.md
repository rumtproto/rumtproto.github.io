---
title: "messages.getAvailableEffects (метод)"
original: "https://core.telegram.org/method/messages.getAvailableEffects"
section: ref
kind: method
layout: layout.njk
---

# messages.getAvailableEffects

*Метод из схемы TL.*

> Fetch the full list of usable [animated message effects »](https://core.telegram.org/api/effects).

## Определение TL

```
messages.availableEffectsNotModified#d1ed9a5b = messages.AvailableEffects;
messages.availableEffects#bddb616e hash:int effects:Vector<AvailableEffect> documents:Vector<Document> = messages.AvailableEffects;
---functions---
messages.getAvailableEffects#dea20a39 hash:int = messages.AvailableEffects;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.AvailableEffects](/type/messages.AvailableEffects/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Animated message effects](https://core.telegram.org/api/effects)

Telegram allows adding spectacular animated effects to messages you send.
