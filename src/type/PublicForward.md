---
title: "PublicForward (тип)"
original: "https://core.telegram.org/type/PublicForward"
section: ref
kind: type
layout: layout.njk
---

# PublicForward

*Тип из схемы TL.*

> Contains info about the forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels.

## Определение TL

```
publicForwardMessage#1f2bf4a message:Message = PublicForward;
publicForwardStory#edf3add0 peer:Peer story:StoryItem = PublicForward;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [publicForwardMessage](/constructor/publicForwardMessage/) | Contains info about a forward of a [story](https://core.telegram.org/api/stories) as a message. |
| [publicForwardStory](/constructor/publicForwardStory/) | Contains info about a forward of a [story](https://core.telegram.org/api/stories) as a repost by a public channel. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
