---
title: "peerColorCollectible (конструктор)"
original: "https://core.telegram.org/constructor/peerColorCollectible"
section: ref
kind: constructor
layout: layout.njk
---

# peerColorCollectible

*Конструктор из схемы TL.*

> Represents a [color palette »](https://core.telegram.org/api/colors) associated to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/colors#collectible-gift-palettes) for more info.

## Определение TL

```
peerColorCollectible#b9c0639a flags:# collectible_id:long gift_emoji_id:long background_emoji_id:long accent_color:int colors:Vector<int> dark_accent_color:flags.0?int dark_colors:flags.1?Vector<int> = PeerColor;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| collectible_id | [long](/type/long/) | ID of the [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| gift_emoji_id | [long](/type/long/) | [Custom emoji ID »](https://core.telegram.org/api/custom-emoji) of the collectible gift: a single copy of this custom emoji should be displayed as-is (without recoloring it, unlike for background_emoji_id) in the top-right corner of the palette. |
| background_emoji_id | [long](/type/long/) | [Custom emoji ID »](https://core.telegram.org/api/custom-emoji) used to generate the pattern. |
| accent_color | [int](/type/int/) | Accent color in RGB24 format, used for reply backgrounds and the user's name in messages. |
| colors | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | 1-3 RGB24 colors to be used in the reply strip. |
| dark_accent_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Accent color in RGB24 format, used for reply backgrounds and the user's name in messages in dark mode (fallback to accent_color if absent). |
| dark_colors | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | 1-3 RGB24 colors to be used in the reply strip in dark mode (fallback to colors if absent). |

## Тип

[PeerColor](/type/PeerColor/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
