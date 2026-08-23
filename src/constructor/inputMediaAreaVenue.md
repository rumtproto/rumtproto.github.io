---
title: "inputMediaAreaVenue (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaAreaVenue"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaAreaVenue

*Конструктор из схемы TL.*

> Represents a [location tag](https://core.telegram.org/api/stories#media-areas) attached to a [story](https://core.telegram.org/api/stories), with additional venue information.

## Определение TL

```
inputMediaAreaVenue#b282217f coordinates:MediaAreaCoordinates query_id:long result_id:string = MediaArea;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| coordinates | [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | The size and location of the media area corresponding to the location sticker on top of the story media. |
| query_id | [long](/type/long/) | The query_id from [messages.botResults](/constructor/messages.botResults/), see [here »](https://core.telegram.org/api/stories#media-areas) for more info. |
| result_id | [string](/type/string/) | The id of the chosen result, see [here »](https://core.telegram.org/api/stories#media-areas) for more info. |

## Тип

[MediaArea](/type/MediaArea/)

## Related pages

#### [messages.botResults](/constructor/messages.botResults/)

Result of a query to an inline bot

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
