---
title: "StarGiftAttribute (тип)"
original: "https://core.telegram.org/type/StarGiftAttribute"
section: ref
kind: type
layout: layout.njk
---

# StarGiftAttribute

*Тип из схемы TL.*

> An attribute of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
starGiftAttributeModel#565251e2 flags:# crafted:flags.0?true name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributePattern#4e7085ea name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributeBackdrop#9f2504e4 name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributeOriginalDetails#e0bff26c flags:# sender_id:flags.0?Peer recipient_id:Peer date:int message:flags.1?TextWithEntities = StarGiftAttribute;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starGiftAttributeModel](/constructor/starGiftAttributeModel/) | The model of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [starGiftAttributePattern](/constructor/starGiftAttributePattern/) | A [sticker](https://core.telegram.org/api/stickers) applied on the backdrop of a [collectible gift »](https://core.telegram.org/api/gifts) using a repeating pattern. |
| [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/) | The backdrop of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) | Info about the sender, receiver and message attached to the original [gift »](https://core.telegram.org/api/gifts), before it was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
