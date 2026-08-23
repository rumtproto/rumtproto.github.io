---
title: "stories.reorderAlbums (метод)"
original: "https://core.telegram.org/method/stories.reorderAlbums"
section: ref
kind: method
layout: layout.njk
---

# stories.reorderAlbums

*Метод из схемы TL.*

> Reorder [story albums on a profile »](https://core.telegram.org/api/stories#story-albums).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stories.reorderAlbums#8535fbd9 peer:InputPeer order:Vector<int> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the albums are located. |
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | New order of the albums. |

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
