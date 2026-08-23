---
title: "stories.albums (конструктор)"
original: "https://core.telegram.org/constructor/stories.albums"
section: ref
kind: constructor
layout: layout.njk
---

# stories.albums

*Конструктор из схемы TL.*

> [Story albums »](https://core.telegram.org/api/stories#story-albums).

## Определение TL

```
stories.albums#c3987a3a hash:long albums:Vector<StoryAlbum> = stories.Albums;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | Hash to pass to [stories.getAlbums](/method/stories.getAlbums/) to avoid returning any results if they haven't changed. |
| albums | [Vector](https://core.telegram.org/type/Vector%20t)<[StoryAlbum](/type/StoryAlbum/)> | The albums. |

## Тип

[stories.Albums](/type/stories.Albums/)

## Related pages

#### [stories.getAlbums](/method/stories.getAlbums/)

Get [story albums](https://core.telegram.org/api/stories#story-albums) created by a peer.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
