---
title: "AvailableEffect (тип)"
original: "https://core.telegram.org/type/AvailableEffect"
section: ref
kind: type
layout: layout.njk
---

# AvailableEffect

*Тип из схемы TL.*

> Describes a [message effect »](https://core.telegram.org/api/effects).

## Определение TL

```
availableEffect#93c3e27e flags:# premium_required:flags.2?true id:long emoticon:string static_icon_id:flags.0?long effect_sticker_id:long effect_animation_id:flags.1?long = AvailableEffect;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [availableEffect](/constructor/availableEffect/) | Represents a [message effect »](https://core.telegram.org/api/effects). All long IDs except for id are [document](/constructor/document/).ids from the containing [messages.availableEffects](/constructor/messages.availableEffects/) constructor. See [here »](https://core.telegram.org/api/effects) for more info on how to use following fields. |

## Related pages

#### [Animated message effects](https://core.telegram.org/api/effects)

Telegram allows adding spectacular animated effects to messages you send.
