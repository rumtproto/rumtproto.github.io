---
title: "mediaAreaUrl (конструктор)"
original: "https://core.telegram.org/constructor/mediaAreaUrl"
section: ref
kind: constructor
layout: layout.njk
---

# mediaAreaUrl

*Конструктор из схемы TL.*

> Represents a [URL media area](https://core.telegram.org/api/stories#urls).

## Определение TL

```
mediaAreaUrl#37381085 coordinates:MediaAreaCoordinates url:string = MediaArea;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| coordinates | [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | The size and location of the media area corresponding to the URL button on top of the story media. |
| url | [string](/type/string/) | URL to open when clicked. |

## Тип

[MediaArea](/type/MediaArea/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
