---
title: "StoryAlbum (тип)"
original: "https://core.telegram.org/type/StoryAlbum"
section: ref
kind: type
layout: layout.njk
---

# StoryAlbum

*Тип из схемы TL.*

> Represents a [story album »](https://core.telegram.org/api/stories#story-albums).

## Определение TL

```
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;

---functions---

stories.createAlbum#a36396e5 peer:InputPeer title:string stories:Vector<int> = StoryAlbum;
stories.updateAlbum#5e5259b6 flags:# peer:InputPeer album_id:int title:flags.0?string delete_stories:flags.1?Vector<int> add_stories:flags.2?Vector<int> order:flags.3?Vector<int> = StoryAlbum;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [storyAlbum](/constructor/storyAlbum/) | Represents a [story album »](https://core.telegram.org/api/stories#story-albums). |

## Методы

| Method | Описание |
|---|---|
| [stories.createAlbum](/method/stories.createAlbum/) | Creates a [story album](https://core.telegram.org/api/stories#story-albums). |
| [stories.updateAlbum](/method/stories.updateAlbum/) | Rename a [story albums »](https://core.telegram.org/api/stories#story-albums), or add, delete or reorder stories in it. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
