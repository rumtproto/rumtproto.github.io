---
title: "starGift (конструктор)"
original: "https://core.telegram.org/constructor/starGift"
section: ref
kind: constructor
layout: layout.njk
---

# starGift

*Конструктор из схемы TL.*

> Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info.

## Определение TL

```
starGift#313a9547 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int auction_slug:flags.11?string gifts_per_round:flags.11?int auction_start_date:flags.11?int upgrade_variants:flags.12?int background:flags.13?StarGiftBackground = StarGift;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| limited | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this is a limited-supply gift. |
| sold_out | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this gift sold out and cannot be bought anymore. |
| birthday | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this is a birthday-themed gift |
| require_premium | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | This gift can only be bought by users with a [Premium](https://core.telegram.org/api/premium) subscription. |
| limited_per_user | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | If set, the maximum number of gifts of this type that can be owned by a single user is limited and specified in per_user_total, and the remaining slots for the current user in per_user_remains. |
| peer_color_available | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | If set, collectible gifts of this type may be used to generate a [message color palette and pattern »](https://core.telegram.org/api/colors#collectible-message-palettes). |
| auction | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | If set, this is a collectible gift that can only be bought through a [collectible gift auction »](https://core.telegram.org/api/auctions). |
| id | [long](/type/long/) | Identifier of the gift |
| sticker | [Document](/type/Document/) | [Sticker](https://core.telegram.org/api/stickers) that represents the gift. |
| stars | [long](/type/long/) | Price of the gift in [Telegram Stars](https://core.telegram.org/api/stars). |
| availability_remains | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | For limited-supply gifts: the remaining number of gifts that may be bought. |
| availability_total | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | For limited-supply gifts: the total number of gifts that was available in the initial supply. |
| availability_resale | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[long](/type/long/) | The total number of (upgraded to [collectibles](https://core.telegram.org/api/gifts#collectible-gifts)) gifts of this type currently on [resale](https://core.telegram.org/api/gifts#reselling-collectible-gifts) |
| convert_stars | [long](/type/long/) | The receiver of this gift may convert it to this many Telegram Stars, instead of displaying it on their profile page. convert_stars will be equal to stars only if the gift was bought using recently bought Telegram Stars, otherwise it will be less than stars. |
| first_sale_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | For sold out gifts only: when was the gift first bought. |
| last_sale_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | For sold out gifts only: when was the gift last bought. |
| upgrade_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[long](/type/long/) | The number of Telegram Stars the user can pay to [convert the gift into a collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| resell_min_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[long](/type/long/) | The minimum price in [Stars](https://core.telegram.org/api/stars) for gifts of this type currently on [resale](https://core.telegram.org/api/gifts#reselling-collectible-gifts). |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[string](/type/string/) | Title of the gift |
| released_by | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[Peer](/type/Peer/) | This gift was released by the specified peer. |
| per_user_total | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[int](/type/int/) | Maximum number of gifts of this type that can be owned by any user. |
| per_user_remains | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[int](/type/int/) | Remaining number of gifts of this type that can be owned by the current user. |
| locked_until_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[int](/type/int/) | If set, the specified gift possibly cannot be sent until the specified date, see [here »](https://core.telegram.org/api/gifts) for the full flow. |
| auction_slug | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[string](/type/string/) | Always set for gifts that can be bought on [auctions »](https://core.telegram.org/api/auctions), contains the [auction deep link slug »](https://core.telegram.org/api/links#auction-links). |
| gifts_per_round | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[int](/type/int/) | Always set for gifts that can be bought on [auctions »](https://core.telegram.org/api/auctions), contains the number of gifts of this kind that are distributed on every round. |
| auction_start_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[int](/type/int/) | Always set for gifts that can be bought on [auctions »](https://core.telegram.org/api/auctions), contains the UNIX timestamp indicating when will the auction start (or when the auction started, if it points to the past). |
| upgrade_variants | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[int](/type/int/) | Total number of possible [collectible variants »](https://core.telegram.org/api/gifts#listing-all-possible-collectible-variants) for this gift type. |
| background | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[StarGiftBackground](/type/StarGiftBackground/) | Default background palette for this gift type, used when rendering gift cards and previews before a specific collectible backdrop is chosen. |

## Тип

[StarGift](/type/StarGift/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
