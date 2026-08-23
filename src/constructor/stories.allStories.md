---
title: "stories.allStories (конструктор)"
original: "https://core.telegram.org/constructor/stories.allStories"
section: ref
kind: constructor
layout: layout.njk
---

# stories.allStories

*Конструктор из схемы TL.*

> Full list of active (or active and hidden) [stories](https://core.telegram.org/api/stories#watching-stories).

## Определение TL

```
stories.allStories#6efc5e81 flags:# has_more:flags.0?true count:int state:string peer_stories:Vector<PeerStories> chats:Vector<Chat> users:Vector<User> stealth_mode:StoriesStealthMode = stories.AllStories;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| has_more | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether more results can be fetched as [described here »](https://core.telegram.org/api/stories#watching-stories). |
| count | [int](/type/int/) | Total number of active (or active and hidden) stories |
| state | [string](/type/string/) | State to use for pagination |
| peer_stories | [Vector](https://core.telegram.org/type/Vector%20t)<[PeerStories](/type/PeerStories/)> | Stories |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |
| stealth_mode | [StoriesStealthMode](/type/StoriesStealthMode/) | Current [stealth mode](https://core.telegram.org/api/stories#stealth-mode) information |

## Тип

[stories.AllStories](/type/stories.AllStories/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
