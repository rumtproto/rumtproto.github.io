---
title: "inputMediaAreaChannelPost (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaAreaChannelPost"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaAreaChannelPost

*Конструктор из схемы TL.*

> Represents a channel post

## Определение TL

```
inputMediaAreaChannelPost#2271f2bf coordinates:MediaAreaCoordinates channel:InputChannel msg_id:int = MediaArea;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| coordinates | [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | The size and location of the media area corresponding to the location sticker on top of the story media. |
| channel | [InputChannel](/type/InputChannel/) | The channel that posted the message |
| msg_id | [int](/type/int/) | ID of the channel message |

## Тип

[MediaArea](/type/MediaArea/)
