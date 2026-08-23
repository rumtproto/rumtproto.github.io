---
title: "storyViews (конструктор)"
original: "https://core.telegram.org/constructor/storyViews"
section: ref
kind: constructor
layout: layout.njk
---

# storyViews

*Конструктор из схемы TL.*

> Aggregated view and reaction information of a [story](https://core.telegram.org/api/stories).

## Определение TL

```
storyViews#8d595cd6 flags:# has_viewers:flags.1?true views_count:int forwards_count:flags.2?int reactions:flags.3?Vector<ReactionCount> reactions_count:flags.4?int recent_viewers:flags.0?Vector<long> = StoryViews;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| has_viewers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, indicates that the viewers list is currently viewable, and was not yet deleted because the story has expired while the user didn't have a [Premium](https://core.telegram.org/api/premium) account. |
| views_count | [int](/type/int/) | View counter of the story |
| forwards_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Forward counter of the story |
| reactions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[ReactionCount](/type/ReactionCount/)> | All reactions sent to this story |
| reactions_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Number of reactions added to the story |
| recent_viewers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | User IDs of some recent viewers of the story |

## Тип

[StoryViews](/type/StoryViews/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
