---
title: "updatePinnedForumTopic (конструктор)"
original: "https://core.telegram.org/constructor/updatePinnedForumTopic"
section: ref
kind: constructor
layout: layout.njk
---

# updatePinnedForumTopic

*Конструктор из схемы TL.*

> A [forum topic »](https://core.telegram.org/api/forum#forum-topics) was pinned or unpinned.

## Определение TL

```
updatePinnedForumTopic#683b2c52 flags:# pinned:flags.0?true peer:Peer topic_id:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the topic was pinned or unpinned |
| peer | [Peer](/type/Peer/) | The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located. |
| topic_id | [int](/type/int/) | The topic ID |

## Тип

[Update](/type/Update/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
