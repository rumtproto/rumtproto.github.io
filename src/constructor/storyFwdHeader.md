---
title: "storyFwdHeader (конструктор)"
original: "https://core.telegram.org/constructor/storyFwdHeader"
section: ref
kind: constructor
layout: layout.njk
---

# storyFwdHeader

*Конструктор из схемы TL.*

> Contains info about the original poster of a reposted story.

## Определение TL

```
storyFwdHeader#b826e150 flags:# modified:flags.3?true from:flags.0?Peer from_name:flags.1?string story_id:flags.2?int = StoryFwdHeader;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| modified | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether the story media was modified before reposting it (for example by overlaying a round video with a reaction). |
| from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Peer](/type/Peer/) | Peer that originally posted the story; will be empty for stories forwarded from a user with forwards privacy enabled, in which case from_name will be set, instead. |
| from_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Will be set for stories forwarded from a user with forwards privacy enabled, in which case from will also be empty. |
| story_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | , contains the story ID |

## Тип

[StoryFwdHeader](/type/StoryFwdHeader/)
