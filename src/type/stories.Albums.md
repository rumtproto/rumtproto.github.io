---
title: "Stories.Albums (тип)"
original: "https://core.telegram.org/type/stories.Albums"
section: ref
kind: type
layout: layout.njk
---

# Stories.Albums

*Тип из схемы TL.*

> Represents a list of [story albums »](https://core.telegram.org/api/stories#story-albums).

## Определение TL

```
stories.albumsNotModified#564edaeb = stories.Albums;
stories.albums#c3987a3a hash:long albums:Vector<StoryAlbum> = stories.Albums;

---functions---

stories.getAlbums#25b3eac7 peer:InputPeer hash:long = stories.Albums;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stories.albumsNotModified](/constructor/stories.albumsNotModified/) | The [story album list »](https://core.telegram.org/api/stories#story-albums) hasn't changed. |
| [stories.albums](/constructor/stories.albums/) | [Story albums »](https://core.telegram.org/api/stories#story-albums). |

## Методы

| Method | Описание |
|---|---|
| [stories.getAlbums](/method/stories.getAlbums/) | Get [story albums](https://core.telegram.org/api/stories#story-albums) created by a peer. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
