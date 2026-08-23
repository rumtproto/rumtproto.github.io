---
title: "stories.deleteAlbum (метод)"
original: "https://core.telegram.org/method/stories.deleteAlbum"
section: ref
kind: method
layout: layout.njk
---

# stories.deleteAlbum

*Метод из схемы TL.*

> Delete a [story album](https://core.telegram.org/api/stories#story-albums).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stories.deleteAlbum#8d3456d0 peer:InputPeer album_id:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Owned peer where the album is located. |
| album_id | [int](/type/int/) | ID of the album to delete. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
