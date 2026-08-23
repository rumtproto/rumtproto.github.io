---
title: "messages.availableEffects (конструктор)"
original: "https://core.telegram.org/constructor/messages.availableEffects"
section: ref
kind: constructor
layout: layout.njk
---

# messages.availableEffects

*Конструктор из схемы TL.*

> The full list of usable [animated message effects »](https://core.telegram.org/api/effects).

## Определение TL

```
messages.availableEffects#bddb616e hash:int effects:Vector<AvailableEffect> documents:Vector<Document> = messages.AvailableEffects;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| effects | [Vector](https://core.telegram.org/type/Vector%20t)<[AvailableEffect](/type/AvailableEffect/)> | Message effects |
| documents | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Documents specified in the effects constructors. |

## Тип

[messages.AvailableEffects](/type/messages.AvailableEffects/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Animated message effects](https://core.telegram.org/api/effects)

Telegram allows adding spectacular animated effects to messages you send.
