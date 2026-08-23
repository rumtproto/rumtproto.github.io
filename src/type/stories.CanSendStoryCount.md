---
title: "stories.CanSendStoryCount (тип)"
original: "https://core.telegram.org/type/stories.CanSendStoryCount"
section: ref
kind: type
layout: layout.njk
---

# stories.CanSendStoryCount

*Тип из схемы TL.*

> Contains the number of available active story slots (equal to the value of the [`story_expiring_limit_*` client configuration parameter](https://core.telegram.org/api/config#story-expiring-limit-default) minus the number of currently active stories).

## Определение TL

```
stories.canSendStoryCount#c387c04e count_remains:int = stories.CanSendStoryCount;

---functions---

stories.canSendStory#30eb63f0 peer:InputPeer = stories.CanSendStoryCount;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stories.canSendStoryCount](/constructor/stories.canSendStoryCount/) | Contains the number of available active story slots (equal to the value of the [story_expiring_limit_* client configuration parameter](https://core.telegram.org/api/config#story-expiring-limit-default) minus the number of currently active stories). |

## Методы

| Method | Описание |
|---|---|
| [stories.canSendStory](/method/stories.canSendStory/) | Check whether we can post stories as the specified peer. |

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
