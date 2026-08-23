---
title: "SavedStarGift (тип)"
original: "https://core.telegram.org/type/SavedStarGift"
section: ref
kind: type
layout: layout.njk
---

# SavedStarGift

*Тип из схемы TL.*

> Represents a [gift](https://core.telegram.org/api/gifts) owned by a peer.

## Определение TL

```
savedStarGift#41df43fc flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long gift_num:flags.19?int can_craft_at:flags.20?int = SavedStarGift;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [savedStarGift](/constructor/savedStarGift/) | Represents a [gift](https://core.telegram.org/api/gifts) owned by a peer. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
