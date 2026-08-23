---
title: "mediaAreaWeather (конструктор)"
original: "https://core.telegram.org/constructor/mediaAreaWeather"
section: ref
kind: constructor
layout: layout.njk
---

# mediaAreaWeather

*Конструктор из схемы TL.*

> Represents a [weather widget »](https://core.telegram.org/api/stories#weather).

## Определение TL

```
mediaAreaWeather#49a6549c coordinates:MediaAreaCoordinates emoji:string temperature_c:double color:int = MediaArea;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| coordinates | [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | The size and location of the media area corresponding to the widget on top of the story media. |
| emoji | [string](/type/string/) | Weather emoji, should be rendered as an [animated emoji](https://core.telegram.org/api/animated-emojis). |
| temperature_c | [double](/type/double/) | Temperature in degrees Celsius. |
| color | [int](/type/int/) | ARGB background color. |

## Тип

[MediaArea](/type/MediaArea/)

## Related pages

#### [Animated Emojis](https://core.telegram.org/api/animated-emojis)

Graphical telegram clients should transform emojis into their respective animated version.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
