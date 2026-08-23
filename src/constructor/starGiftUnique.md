---
title: "starGiftUnique (конструктор)"
original: "https://core.telegram.org/constructor/starGiftUnique"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftUnique

*Конструктор из схемы TL.*

> Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.
> The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

## Определение TL

```
starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| require_premium | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | This gift can only be bought by users with a [Premium](https://core.telegram.org/api/premium) subscription. |
| resale_ton_only | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether the gift can be bought only using Grams. |
| theme_available | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | A chat theme associated to this gift is available, [see here »](https://core.telegram.org/api/themes#chat-themes) for more info on how to use it. |
| burned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | This gift was already used as an ingredient for [crafting another collectible gift »](https://core.telegram.org/api/gifts#crafting-collectible-gifts). |
| crafted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](/constructor/true/) | This collectible gift was obtained by [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts), not by upgrading a regular gift. |
| id | [long](/type/long/) | Unique identifier of this collectible gift. |
| gift_id | [long](/type/long/) | ID of the regular gift from which this gift was upgraded (all collectible gifts upgraded from the same gift will have the same gift_id, with different attributes). |
| title | [string](/type/string/) | Collectible title. |
| slug | [string](/type/string/) | Slug that can be used to create a [collectible gift deep link »](https://core.telegram.org/api/links#collectible-gift-link), or [elsewhere in the API where a collectible slug is accepted](https://core.telegram.org/api/gifts). |
| num | [int](/type/int/) | Unique identifier of this collectible gift among all (already upgraded) collectible gifts of the same type. |
| owner_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Peer](/type/Peer/) | The owner of the gift. |
| owner_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | The name of the owner if neither owner_id nor owner_address are set. |
| owner_address | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | For [NFTs on the TON blockchain](https://core.telegram.org/api/gifts#withdraw-a-collectible-gift-to-the-ton-blockchain), contains the address of the owner (append it to the [ton_blockchain_explorer_url client configuration value »](https://core.telegram.org/api/config#ton-blockchain-explorer-url) to obtain a link with information about the address). |
| attributes | [Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftAttribute](/type/StarGiftAttribute/)> | Collectible attributes |
| availability_issued | [int](/type/int/) | Total number of gifts of the same type that were upgraded to a collectible gift. |
| availability_total | [int](/type/int/) | Total number of gifts of the same type that can be upgraded or were already upgraded to a collectible gift. |
| gift_address | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | For [NFTs on the TON blockchain](https://core.telegram.org/api/gifts#withdraw-a-collectible-gift-to-the-ton-blockchain), contains the address of the NFT (append it to the [ton_blockchain_explorer_url client configuration value »](https://core.telegram.org/api/config#ton-blockchain-explorer-url) to obtain a link with information about the address). |
| resell_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Vector](https://core.telegram.org/type/Vector%20t)<[StarsAmount](/type/StarsAmount/)> | Resale price of the gift. |
| released_by | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[Peer](/type/Peer/) | This gift was released by the specified peer. |
| value_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[long](/type/long/) | Estimated price of the gift. |
| value_currency | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[string](/type/string/) | Currency for the gift's estimated price. |
| value_usd_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[long](/type/long/) | Estimated price of the gift in USD cents. |
| theme_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[Peer](/type/Peer/) | The current chat where the associated [chat theme](https://core.telegram.org/api/themes#chat-themes) is installed, if any (gift-based themes can only be installed in one chat at a time). |
| peer_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[PeerColor](/type/PeerColor/) | Can contain a [collectible message palette »](https://core.telegram.org/api/colors#collectible-message-palettes). |
| host_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[Peer](/type/Peer/) | If set, the gift is currently [hosted on the specified user or channel profile »](https://core.telegram.org/api/gifts#hosted-collectible-gifts), while ownership remains with the TON wallet in owner_address. |
| offer_min_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[int](/type/int/) | If set, you can [send a purchase offer for this gift »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers): the minimum offer price is specified in this flag. |
| craft_chance_permille | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[int](/type/int/) | Success probability, per 1000, contributed by this gift when it is used for [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts). |

## Тип

[StarGift](/type/StarGift/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram themes](https://core.telegram.org/api/themes)

Telegram apps support generating, sharing and synchronizing app themes.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [starGiftAttributeModel](/constructor/starGiftAttributeModel/)

The model of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).
