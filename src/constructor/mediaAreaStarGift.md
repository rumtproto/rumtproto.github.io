---
title: "mediaAreaStarGift (конструктор)"
original: "https://core.telegram.org/constructor/mediaAreaStarGift"
section: ref
kind: constructor
layout: layout.njk
---

# mediaAreaStarGift

*Конструктор из схемы TL.*

> Represents a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
mediaAreaStarGift#5787686d coordinates:MediaAreaCoordinates slug:string = MediaArea;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| coordinates | [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | Coordinates of the media area. |
| slug | [string](/type/string/) | slug from [starGiftUnique](/constructor/starGiftUnique/).slug, that can be resolved as [specified here »](https://core.telegram.org/api/gifts#sharing-and-getting-info-about-a-collectible-gift). |

## Тип

[MediaArea](/type/MediaArea/)

## Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
