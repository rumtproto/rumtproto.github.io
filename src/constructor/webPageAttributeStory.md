---
title: "webPageAttributeStory (конструктор)"
original: "https://core.telegram.org/constructor/webPageAttributeStory"
section: ref
kind: constructor
layout: layout.njk
---

# webPageAttributeStory

*Конструктор из схемы TL.*

> Webpage preview of a Telegram story

## Определение TL

```
webPageAttributeStory#2e94c3e7 flags:# peer:Peer id:int story:flags.0?StoryItem = WebPageAttribute;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [Peer](/type/Peer/) | Peer that posted the story |
| id | [int](/type/int/) | [Story ID](https://core.telegram.org/api/stories#watching-stories) |
| story | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[StoryItem](/type/StoryItem/) | May contain the story, if not the story should be fetched when and if needed using [stories.getStoriesByID](/method/stories.getStoriesByID/) with the above id and peer. |

## Тип

[WebPageAttribute](/type/WebPageAttribute/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Obtain full info about a set of [stories](https://core.telegram.org/api/stories) by their IDs.
