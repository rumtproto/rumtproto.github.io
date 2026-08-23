---
title: "stories.searchPosts (метод)"
original: "https://core.telegram.org/method/stories.searchPosts"
section: ref
kind: method
layout: layout.njk
---

# stories.searchPosts

*Метод из схемы TL.*

> Globally search for [stories](https://core.telegram.org/api/stories) using a hashtag or a [location media area](https://core.telegram.org/api/stories#location-tags), see [here »](https://core.telegram.org/api/stories#searching-stories) for more info on the full flow.
> Either `hashtag` **or** `area` **must** be set when invoking the method.

## Определение TL

```
stories.foundStories#e2de7737 flags:# count:int stories:Vector<FoundStory> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stories.FoundStories;
---functions---
stories.searchPosts#d1810907 flags:# hashtag:flags.0?string area:flags.1?MediaArea peer:flags.2?InputPeer offset:string limit:int = stories.FoundStories;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| hashtag | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Hashtag (without the #) |
| area | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[MediaArea](/type/MediaArea/) | A [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/) or a [mediaAreaVenue](/constructor/mediaAreaVenue/). Note [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/) areas may be searched only if they have an associated address. |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputPeer](/type/InputPeer/) | If set, returns only stories posted by this peer. |
| offset | [string](/type/string/) | Offset for [pagination](https://core.telegram.org/api/offsets): initially an empty string, then the next_offset from the previously returned [stories.foundStories](/constructor/stories.foundStories/). |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[stories.FoundStories](/type/stories.FoundStories/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | HASHTAG_INVALID | The specified hashtag is invalid. |

## Related pages

#### [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/)

Represents a geolocation tag attached to a [story](https://core.telegram.org/api/stories).

#### [mediaAreaVenue](/constructor/mediaAreaVenue/)

Represents a location tag attached to a [story](https://core.telegram.org/api/stories), with additional venue information.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [stories.foundStories](/constructor/stories.foundStories/)

Stories found using [global story search »](https://core.telegram.org/api/stories#searching-stories).

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
