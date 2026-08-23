---
title: "StoryView (тип)"
original: "https://core.telegram.org/type/StoryView"
section: ref
kind: type
layout: layout.njk
---

# StoryView

*Тип из схемы TL.*

> [Story](https://core.telegram.org/api/stories) view date and reaction information

## Определение TL

```
storyView#b0bdeac5 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true user_id:long date:int reaction:flags.2?Reaction = StoryView;
storyViewPublicForward#9083670b flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true message:Message = StoryView;
storyViewPublicRepost#bd74cf49 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer story:StoryItem = StoryView;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [storyView](/constructor/storyView/) | [Story](https://core.telegram.org/api/stories) view date and reaction information |
| [storyViewPublicForward](/constructor/storyViewPublicForward/) | A certain peer has forwarded the story as a message to a public chat or channel. |
| [storyViewPublicRepost](/constructor/storyViewPublicRepost/) | A certain peer has reposted the story. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
