---
title: "publicForwardStory (конструктор)"
original: "https://core.telegram.org/constructor/publicForwardStory"
section: ref
kind: constructor
layout: layout.njk
---

# publicForwardStory

*Конструктор из схемы TL.*

> Contains info about a forward of a [story](https://core.telegram.org/api/stories) as a repost by a public channel.

## Определение TL

```
publicForwardStory#edf3add0 peer:Peer story:StoryItem = PublicForward;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | The channel that reposted the story. |
| story | [StoryItem](/type/StoryItem/) | The reposted story (may be different from the original story). |

## Тип

[PublicForward](/type/PublicForward/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
