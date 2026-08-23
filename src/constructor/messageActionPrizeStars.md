---
title: "messageActionPrizeStars (конструктор)"
original: "https://core.telegram.org/constructor/messageActionPrizeStars"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionPrizeStars

*Конструктор из схемы TL.*

> You won some [Telegram Stars](https://core.telegram.org/api/stars) in a [Telegram Star giveaway »](https://core.telegram.org/api/giveaways#star-giveaways).
> This service message should be displayed below the appropriate sticker from the [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) [stickerset »](https://core.telegram.org/api/stickers#stickersets):
> -   If `stars <= 1000`, choose the sticker with emoji equal to "![2️⃣](https://core.telegram.org//telegram.org/img/emoji/40/32E283A3.png)"
> -   If `stars < 2500`, choose the sticker with emoji equal to "![3️⃣](https://core.telegram.org//telegram.org/img/emoji/40/33E283A3.png)"
> -   Otherwise, choose the sticker with emoji equal to "![4️⃣](https://core.telegram.org//telegram.org/img/emoji/40/34E283A3.png)"

## Определение TL

```
messageActionPrizeStars#b00c47a2 flags:# unclaimed:flags.0?true stars:long transaction_id:string boost_peer:Peer giveaway_msg_id:int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| unclaimed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, this indicates the reverse transaction that refunds the remaining stars to the creator of a giveaway if, when the giveaway ends, the number of members in the channel is smaller than the number of winners in the giveaway. |
| stars | [long](/type/long/) | The number of Telegram Stars you won |
| transaction_id | [string](/type/string/) | ID of the telegram star transaction. |
| boost_peer | [Peer](/type/Peer/) | Identifier of the peer that was automatically boosted by the winners of the giveaway. |
| giveaway_msg_id | [int](/type/int/) | ID of the message containing the [messageMediaGiveaway](/constructor/messageMediaGiveaway/) |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [messageMediaGiveaway](/constructor/messageMediaGiveaway/)

Contains info about a [giveaway, see here »](https://core.telegram.org/api/giveaways) for more info.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/)

Stickers to show when receiving a gifted Telegram Premium subscription

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
