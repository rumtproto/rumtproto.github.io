---
title: "RecentStory (тип)"
original: "https://core.telegram.org/type/RecentStory"
section: ref
kind: type
layout: layout.njk
---

# RecentStory

*Тип из схемы TL.*

> Summary of a peer's [active stories »](https://core.telegram.org/api/stories#recent-story-summaries).

## Определение TL

```
recentStory#711d692d flags:# live:flags.0?true max_id:flags.1?int = RecentStory;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [recentStory](/constructor/recentStory/) | Summary of a peer's [active stories »](https://core.telegram.org/api/stories#recent-story-summaries), embedded in [user](/constructor/user/).stories_max_id and [channel](/constructor/channel/).stories_max_id and returned by [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/). |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
