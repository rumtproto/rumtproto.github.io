---
title: "stories.getStoryViewsList (метод)"
original: "https://core.telegram.org/method/stories.getStoryViewsList"
section: ref
kind: method
layout: layout.njk
---

# stories.getStoryViewsList

*Метод из схемы TL.*

> Obtain the list of users that have viewed a specific [story we posted](https://core.telegram.org/api/stories)

## Определение TL

```
stories.storyViewsList#59d78fc5 flags:# count:int views_count:int forwards_count:int reactions_count:int views:Vector<StoryView> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryViewsList;
---functions---
stories.getStoryViewsList#7ed23c57 flags:# just_contacts:flags.0?true reactions_first:flags.2?true forwards_first:flags.3?true peer:InputPeer q:flags.1?string id:int offset:string limit:int = stories.StoryViewsList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| just_contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to only fetch view reaction/views made by our [contacts](https://core.telegram.org/api/contacts) |
| reactions_first | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether to return [storyView](/constructor/storyView/) info about users that reacted to the story (i.e. if set, the server will first sort results by view date as usual, and then also additionally sort the list by putting [storyView](/constructor/storyView/)s with an associated reaction first in the list). Ignored if forwards_first is set. |
| forwards_first | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, returns forwards and reposts first, then reactions, then other views; otherwise returns interactions sorted just by interaction date. |
| peer | [InputPeer](/type/InputPeer/) | Peer where the story was posted |
| q | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Search for specific peers |
| id | [int](/type/int/) | Story ID |
| offset | [string](/type/string/) | Offset for pagination, obtained from [stories.storyViewsList](/constructor/stories.storyViewsList/).next_offset |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[stories.StoryViewsList](/type/stories.StoryViewsList/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | STORY_ID_INVALID | The specified story ID is invalid. |

## Related pages

#### [Contact list](https://core.telegram.org/api/contacts)

Working with contacts.

#### [storyView](/constructor/storyView/)

[Story](https://core.telegram.org/api/stories) view date and reaction information

#### [stories.storyViewsList](/constructor/stories.storyViewsList/)

Reaction and view counters for a [story](https://core.telegram.org/api/stories)

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
