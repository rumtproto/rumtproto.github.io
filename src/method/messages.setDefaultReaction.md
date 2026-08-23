---
title: "messages.setDefaultReaction (метод)"
original: "https://core.telegram.org/method/messages.setDefaultReaction"
section: ref
kind: method
layout: layout.njk
---

# messages.setDefaultReaction

*Метод из схемы TL.*

> Change default emoji reaction to use in the quick reaction menu: the value is synced across devices and can be fetched using [help.getConfig, `reactions_default` field](/method/help.getConfig/).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setDefaultReaction#4f47a016 reaction:Reaction = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| reaction | [Reaction](/type/Reaction/) | New emoji reaction |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | REACTION_INVALID | The specified reaction is invalid. |

## Related pages

#### [help.getConfig](/method/help.getConfig/)

Returns current configuration, including data center configuration.
