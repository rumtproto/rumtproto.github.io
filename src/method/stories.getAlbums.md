---
title: "stories.getAlbums (метод)"
original: "https://core.telegram.org/method/stories.getAlbums"
section: ref
kind: method
layout: layout.njk
---

# stories.getAlbums

*Метод из схемы TL.*

> Get [story albums](https://core.telegram.org/api/stories#story-albums) created by a peer.

## Определение TL

```
stories.albumsNotModified#564edaeb = stories.Albums;
stories.albums#c3987a3a hash:long albums:Vector<StoryAlbum> = stories.Albums;
---functions---
stories.getAlbums#25b3eac7 peer:InputPeer hash:long = stories.Albums;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer. |
| hash | [long](/type/long/) | The hash from a previously returned [stories.albums](/constructor/stories.albums/), to avoid returning any results if they haven't changed. |

## Результат

[stories.Albums](/type/stories.Albums/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [stories.albums](/constructor/stories.albums/)

[Story albums »](https://core.telegram.org/api/stories#story-albums).

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
