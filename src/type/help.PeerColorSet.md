---
title: "Help.PeerColorSet (тип)"
original: "https://core.telegram.org/type/help.PeerColorSet"
section: ref
kind: type
layout: layout.njk
---

# Help.PeerColorSet

*Тип из схемы TL.*

> Contains info about a [color palette »](https://core.telegram.org/api/colors).

## Определение TL

```
help.peerColorSet#26219a58 colors:Vector<int> = help.PeerColorSet;
help.peerColorProfileSet#767d61eb palette_colors:Vector<int> bg_colors:Vector<int> story_colors:Vector<int> = help.PeerColorSet;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.peerColorSet](/constructor/help.peerColorSet/) | Represents a [color palette that can be used in message accents »](https://core.telegram.org/api/colors). |
| [help.peerColorProfileSet](/constructor/help.peerColorProfileSet/) | Represents a [color palette that can be used in profile pages »](https://core.telegram.org/api/colors). |

## Related pages

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
