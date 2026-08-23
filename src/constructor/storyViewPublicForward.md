---
title: "storyViewPublicForward (конструктор)"
original: "https://core.telegram.org/constructor/storyViewPublicForward"
section: ref
kind: constructor
layout: layout.njk
---

# storyViewPublicForward

*Конструктор из схемы TL.*

> A certain peer has forwarded the story as a message to a public chat or channel.

## Определение TL

```
storyViewPublicForward#9083670b flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true message:Message = StoryView;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| blocked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether we have [completely blocked](https://core.telegram.org/api/block) this user, including from viewing more of our stories. |
| blocked_my_stories_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether we have [blocked](https://core.telegram.org/api/block) this user from viewing more of our stories. |
| message | [Message](/type/Message/) | The message with the forwarded story. |

## Тип

[StoryView](/type/StoryView/)

## Related pages

#### [Blocked users](https://core.telegram.org/api/block)

Working with the blocklist.
