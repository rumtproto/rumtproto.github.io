---
title: "stories.getPeerMaxIDs (метод)"
original: "https://core.telegram.org/method/stories.getPeerMaxIDs"
section: ref
kind: method
layout: layout.njk
---

# stories.getPeerMaxIDs

*Метод из схемы TL.*

> Get compact [active story summaries »](https://core.telegram.org/api/stories#recent-story-summaries) for a set of peers.

## Определение TL

```
---functions---
stories.getPeerMaxIDs#78499170 id:Vector<InputPeer> = Vector<RecentStory>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | Peers whose [active story summaries »](https://core.telegram.org/api/stories#recent-story-summaries) should be fetched. |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[RecentStory](/type/RecentStory/)\>

## Only users can use this method

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
