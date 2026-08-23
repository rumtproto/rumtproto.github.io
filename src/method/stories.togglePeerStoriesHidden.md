---
title: "stories.togglePeerStoriesHidden (метод)"
original: "https://core.telegram.org/method/stories.togglePeerStoriesHidden"
section: ref
kind: method
layout: layout.njk
---

# stories.togglePeerStoriesHidden

*Метод из схемы TL.*

> Hide the active stories of a user, preventing them from being displayed on the action bar on the homescreen, see [here »](https://core.telegram.org/api/stories#hiding-stories-of-other-users) for more info.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stories.togglePeerStoriesHidden#bd0415c4 peer:InputPeer hidden:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer whose stories should be (un)hidden. |
| hidden | [Bool](/type/Bool/) | Whether to hide or unhide stories. |

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
