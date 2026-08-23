---
title: "messageActionStarGiftUnique (конструктор)"
original: "https://core.telegram.org/constructor/messageActionStarGiftUnique"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionStarGiftUnique

*Конструктор из схемы TL.*

> A [gift »](https://core.telegram.org/api/gifts) was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| upgrade | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, this collectible was [upgraded »](https://core.telegram.org/api/gifts#collectible-gifts) to a collectible gift from a previously received or sent (depending on the out flag of the containing [messageService](/constructor/messageService/)) non-collectible gift. |
| transferred | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, this collectible was transferred (either to the current user or by the current user to the other user in the private chat, depending on the out flag of the containing [messageService](/constructor/messageService/)). |
| saved | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, this gift is visible on the user or channel's profile page; can only be set for the receiver of a gift. |
| refunded | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | This gift was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) and then re-downgraded to a regular gift because a request to refund the payment related to the upgrade was made, and the money was returned. |
| prepaid_upgrade | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | The sender has pre-paid for the upgrade of this gift to a collectible gift. |
| assigned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | This collectible gift was [linked from the TON blockchain to a Telegram profile »](https://core.telegram.org/api/gifts#hosted-collectible-gifts). |
| from_offer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | This collectible gift was transferred after a [purchase offer »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) was accepted. |
| craft | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | This collectible gift was obtained by [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts). |
| gift | [StarGift](/type/StarGift/) | The collectible gift. |
| can_export_at | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | If set, indicates that the current gift can't be [exported to the TON blockchain »](https://core.telegram.org/api/gifts#withdraw-a-collectible-gift-to-the-ton-blockchain) yet: the owner will be able to export it at the specified unixtime. |
| transfer_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[long](/type/long/) | If set, indicates that the gift can be [transferred »](https://core.telegram.org/api/gifts#transferring-collectible-gifts) to another user by paying the specified amount of stars. |
| from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[Peer](/type/Peer/) | Sender of the gift (unset for anonymous gifts). |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[Peer](/type/Peer/) | Receiver of the gift. |
| saved_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[long](/type/long/) | For channel gifts, ID to use in [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/) constructors. |
| resale_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[StarsAmount](/type/StarsAmount/) | Resale price of the gift. |
| can_transfer_at | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[int](/type/int/) | If set, indicates that the current gift can't be [transferred »](https://core.telegram.org/api/gifts#transferring-collectible-gifts) yet: the owner will be able to transfer it at the specified unixtime. |
| can_resell_at | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | If set, indicates that the current gift can't be [resold »](https://core.telegram.org/api/gifts#reselling-collectible-gifts) yet: the owner will be able to put it up for sale at the specified unixtime. |
| drop_original_details_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[long](/type/long/) | If set, the [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) attribute of this gift may be removed by paying the specified amount of stars, see [here »](https://core.telegram.org/api/gifts#dropping-the-original-details-of-an-upgraded-gift) for the full flow. |
| can_craft_at | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[int](/type/int/) | If set, this gift can be used for [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts) only starting from the specified unixtime. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [messageService](/constructor/messageService/)

Indicates a service message

#### [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/)

A gift received by a channel we own.

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Info about the sender, receiver and message attached to the original [gift »](https://core.telegram.org/api/gifts), before it was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).
