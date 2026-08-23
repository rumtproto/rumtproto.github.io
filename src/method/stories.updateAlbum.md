---
title: "stories.updateAlbum (метод)"
original: "https://core.telegram.org/method/stories.updateAlbum"
section: ref
kind: method
layout: layout.njk
---

# stories.updateAlbum

*Метод из схемы TL.*

> Rename a [story albums »](https://core.telegram.org/api/stories#story-albums), or add, delete or reorder stories in it.

## Определение TL

```
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;
---functions---
stories.updateAlbum#5e5259b6 flags:# peer:InputPeer album_id:int title:flags.0?string delete_stories:flags.1?Vector<int> add_stories:flags.2?Vector<int> order:flags.3?Vector<int> = StoryAlbum;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Peer where the album is posted. |
| album_id | [int](/type/int/) | Album ID. |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | New album title. |
| delete_stories | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | If set, deletes the specified stories from the album. |
| add_stories | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | If set, adds the specified stories to the album. |
| order | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | If set, reorders the stories in the album by their IDs. |

## Результат

[StoryAlbum](/type/StoryAlbum/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
