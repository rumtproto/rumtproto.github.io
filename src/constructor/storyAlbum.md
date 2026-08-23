---
title: "storyAlbum (конструктор)"
original: "https://core.telegram.org/constructor/storyAlbum"
section: ref
kind: constructor
layout: layout.njk
---

# storyAlbum

*Конструктор из схемы TL.*

> Represents a [story album »](https://core.telegram.org/api/stories#story-albums).

## Определение TL

```
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| album_id | [int](/type/int/) | ID of the album. |
| title | [string](/type/string/) | Name of the album. |
| icon_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Photo](/type/Photo/) | Photo from the first story of the album, if it's a photo. |
| icon_video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Document](/type/Document/) | Video from the first story of the album, if it's a video. |

## Тип

[StoryAlbum](/type/StoryAlbum/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
