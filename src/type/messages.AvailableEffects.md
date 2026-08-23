---
title: "messages.AvailableEffects (тип)"
original: "https://core.telegram.org/type/messages.AvailableEffects"
section: ref
kind: type
layout: layout.njk
---

# messages.AvailableEffects

*Тип из схемы TL.*

> Full list of usable [animated message effects »](https://core.telegram.org/api/effects).

## Определение TL

```
messages.availableEffectsNotModified#d1ed9a5b = messages.AvailableEffects;
messages.availableEffects#bddb616e hash:int effects:Vector<AvailableEffect> documents:Vector<Document> = messages.AvailableEffects;

---functions---

messages.getAvailableEffects#dea20a39 hash:int = messages.AvailableEffects;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.availableEffectsNotModified](/constructor/messages.availableEffectsNotModified/) | The full list of usable [animated message effects »](https://core.telegram.org/api/effects) hasn't changed. |
| [messages.availableEffects](/constructor/messages.availableEffects/) | The full list of usable [animated message effects »](https://core.telegram.org/api/effects). |

## Методы

| Method | Описание |
|---|---|
| [messages.getAvailableEffects](/method/messages.getAvailableEffects/) | Fetch the full list of usable [animated message effects »](https://core.telegram.org/api/effects). |

## Related pages

#### [Animated message effects](https://core.telegram.org/api/effects)

Telegram allows adding spectacular animated effects to messages you send.
