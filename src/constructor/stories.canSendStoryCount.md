---
title: "stories.canSendStoryCount (конструктор)"
original: "https://core.telegram.org/constructor/stories.canSendStoryCount"
section: ref
kind: constructor
layout: layout.njk
---

# stories.canSendStoryCount

*Конструктор из схемы TL.*

> Contains the number of available active story slots (equal to the value of the [`story_expiring_limit_*` client configuration parameter](https://core.telegram.org/api/config#story-expiring-limit-default) minus the number of currently active stories).

## Определение TL

```
stories.canSendStoryCount#c387c04e count_remains:int = stories.CanSendStoryCount;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count_remains | [int](/type/int/) | Remaining active story slots. |

## Тип

[stories.CanSendStoryCount](/type/stories.CanSendStoryCount/)

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
