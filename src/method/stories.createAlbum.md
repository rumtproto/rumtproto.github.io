---
title: "stories.createAlbum (метод)"
original: "https://core.telegram.org/method/stories.createAlbum"
section: ref
kind: method
layout: layout.njk
---

# stories.createAlbum

*Метод из схемы TL.*

> Creates a [story album](https://core.telegram.org/api/stories#story-albums).

## Определение TL

```
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;
---functions---
stories.createAlbum#a36396e5 peer:InputPeer title:string stories:Vector<int> = StoryAlbum;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The owned peer where to create the album. |
| title | [string](/type/string/) | Album name. |
| stories | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Stories to add to the album. |

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
