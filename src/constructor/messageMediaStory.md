---
title: "messageMediaStory (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaStory"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaStory

*Конструктор из схемы TL.*

> Represents a forwarded [story](https://core.telegram.org/api/stories) or a story mention.

## Определение TL

```
messageMediaStory#68cb6283 flags:# via_mention:flags.1?true peer:Peer id:int story:flags.0?StoryItem = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| via_mention | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, indicates that this someone has mentioned us in this story (i.e. by tagging us in the description) or vice versa, we have mentioned the other peer (if the message is outgoing). |
| peer | [Peer](/type/Peer/) | Peer that posted the story. |
| id | [int](/type/int/) | Story ID |
| story | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[StoryItem](/type/StoryItem/) | The story itself, if absent fetch it using [stories.getStoriesByID](/method/stories.getStoriesByID/) and the peer/id parameters specified above. |

## Тип

[MessageMedia](/type/MessageMedia/)

## Related pages

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Obtain full info about a set of [stories](https://core.telegram.org/api/stories) by their IDs.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
