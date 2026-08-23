---
title: "storyView (конструктор)"
original: "https://core.telegram.org/constructor/storyView"
section: ref
kind: constructor
layout: layout.njk
---

# storyView

*Конструктор из схемы TL.*

> [Story](https://core.telegram.org/api/stories) view date and reaction information

## Определение TL

```
storyView#b0bdeac5 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true user_id:long date:int reaction:flags.2?Reaction = StoryView;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| blocked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether we have [completely blocked](https://core.telegram.org/api/block) this user, including from viewing more of our stories. |
| blocked_my_stories_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether we have [blocked](https://core.telegram.org/api/block) this user from viewing more of our stories. |
| user_id | [long](/type/long/) | The user that viewed the story |
| date | [int](/type/int/) | When did the user view the story |
| reaction | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Reaction](/type/Reaction/) | If present, contains the reaction that the user left on the story |

## Тип

[StoryView](/type/StoryView/)

## Related pages

#### [Blocked users](https://core.telegram.org/api/block)

Working with the blocklist.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
