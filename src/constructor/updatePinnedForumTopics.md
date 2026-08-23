---
title: "updatePinnedForumTopics (конструктор)"
original: "https://core.telegram.org/constructor/updatePinnedForumTopics"
section: ref
kind: constructor
layout: layout.njk
---

# updatePinnedForumTopics

*Конструктор из схемы TL.*

> The [pinned topics](https://core.telegram.org/api/forum#forum-topics) of a forum have changed.

## Определение TL

```
updatePinnedForumTopics#def143d0 flags:# peer:Peer order:flags.0?Vector<int> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [Peer](/type/Peer/) | The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located. |
| order | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Ordered list containing the IDs of all pinned topics. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
