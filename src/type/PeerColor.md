---
title: "PeerColor (тип)"
original: "https://core.telegram.org/type/PeerColor"
section: ref
kind: type
layout: layout.njk
---

# PeerColor

*Тип из схемы TL.*

> Represents a [color palette »](https://core.telegram.org/api/colors).

## Определение TL

```
peerColor#b54b5acf flags:# color:flags.0?int background_emoji_id:flags.1?long = PeerColor;
peerColorCollectible#b9c0639a flags:# collectible_id:long gift_emoji_id:long background_emoji_id:long accent_color:int colors:Vector<int> dark_accent_color:flags.0?int dark_colors:flags.1?Vector<int> = PeerColor;
inputPeerColorCollectible#b8ea86a9 collectible_id:long = PeerColor;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [peerColor](/constructor/peerColor/) | Represents a [color palette »](https://core.telegram.org/api/colors). |
| [peerColorCollectible](/constructor/peerColorCollectible/) | Represents a [color palette »](https://core.telegram.org/api/colors) associated to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/colors#collectible-gift-palettes) for more info. |
| [inputPeerColorCollectible](/constructor/inputPeerColorCollectible/) | Represents a [color palette »](https://core.telegram.org/api/colors) associated to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/colors#collectible-gift-palettes) for more info. |

## Related pages

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
