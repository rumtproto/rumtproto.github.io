---
title: "help.peerColorProfileSet (конструктор)"
original: "https://core.telegram.org/constructor/help.peerColorProfileSet"
section: ref
kind: constructor
layout: layout.njk
---

# help.peerColorProfileSet

*Конструктор из схемы TL.*

> Represents a [color palette that can be used in profile pages »](https://core.telegram.org/api/colors).

## Определение TL

```
help.peerColorProfileSet#767d61eb palette_colors:Vector<int> bg_colors:Vector<int> story_colors:Vector<int> = help.PeerColorSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| palette_colors | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | A list of 1-2 colors in RGB format, shown in the color palette settings to describe the current palette. |
| bg_colors | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | A list of 1-2 colors in RGB format describing the colors used to generate the actual background used in the profile page. |
| story_colors | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | A list of 2 colors in RGB format describing the colors of the gradient used for the unread active story indicator around the profile photo. |

## Тип

[help.PeerColorSet](/type/help.PeerColorSet/)

## Related pages

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
