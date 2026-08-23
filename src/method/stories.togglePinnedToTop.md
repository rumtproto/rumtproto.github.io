---
title: "stories.togglePinnedToTop (метод)"
original: "https://core.telegram.org/method/stories.togglePinnedToTop"
section: ref
kind: method
layout: layout.njk
---

# stories.togglePinnedToTop

*Метод из схемы TL.*

> Pin some stories to the top of the profile, see [here »](https://core.telegram.org/api/stories#pinned-or-archived-stories) for more info.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stories.togglePinnedToTop#b297e9b peer:InputPeer id:Vector<int> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where to pin stories. |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of the stories to pin (max [stories_pinned_to_top_count_max](https://core.telegram.org/api/config#stories-pinned-to-top-count-max)). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | STORY_ID_INVALID | The specified story ID is invalid. |

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
