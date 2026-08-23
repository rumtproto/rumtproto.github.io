---
title: "mediaAreaChannelPost (конструктор)"
original: "https://core.telegram.org/constructor/mediaAreaChannelPost"
section: ref
kind: constructor
layout: layout.njk
---

# mediaAreaChannelPost

*Конструктор из схемы TL.*

> Represents a channel post.

## Определение TL

```
mediaAreaChannelPost#770416af coordinates:MediaAreaCoordinates channel_id:long msg_id:int = MediaArea;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| coordinates | [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | The size and location of the media area corresponding to the location sticker on top of the story media. |
| channel_id | [long](/type/long/) | The channel that posted the message |
| msg_id | [int](/type/int/) | ID of the channel message |

## Тип

[MediaArea](/type/MediaArea/)
