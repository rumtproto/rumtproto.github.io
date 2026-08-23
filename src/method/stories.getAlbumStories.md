---
title: "stories.getAlbumStories (метод)"
original: "https://core.telegram.org/method/stories.getAlbumStories"
section: ref
kind: method
layout: layout.njk
---

# stories.getAlbumStories

*Метод из схемы TL.*

> Get stories in a [story album »](https://core.telegram.org/api/stories#story-albums).

## Определение TL

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;
---functions---
stories.getAlbumStories#ac806d61 peer:InputPeer album_id:int offset:int limit:int = stories.Stories;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the album is posted. |
| album_id | [int](/type/int/) | ID of the album. |
| offset | [int](/type/int/) | Offset for [pagination](https://core.telegram.org/api/offsets). |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[stories.Stories](/type/stories.Stories/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
