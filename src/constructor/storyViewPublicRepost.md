---
title: "storyViewPublicRepost (конструктор)"
original: "https://core.telegram.org/constructor/storyViewPublicRepost"
section: ref
kind: constructor
layout: layout.njk
---

# storyViewPublicRepost

*Конструктор из схемы TL.*

> A certain peer has reposted the story.

## Определение TL

```
storyViewPublicRepost#bd74cf49 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer story:StoryItem = StoryView;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| blocked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether we have [completely blocked](https://core.telegram.org/api/block) this user, including from viewing more of our stories. |
| blocked_my_stories_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether we have [blocked](https://core.telegram.org/api/block) this user from viewing more of our stories. |
| peer_id | [Peer](/type/Peer/) | The peer that reposted the story. |
| story | [StoryItem](/type/StoryItem/) | The reposted story. |

## Тип

[StoryView](/type/StoryView/)

## Related pages

#### [Blocked users](https://core.telegram.org/api/block)

Working with the blocklist.
