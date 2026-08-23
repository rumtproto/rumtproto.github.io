---
title: "savedStarGift (конструктор)"
original: "https://core.telegram.org/constructor/savedStarGift"
section: ref
kind: constructor
layout: layout.njk
---

# savedStarGift

*Конструктор из схемы TL.*

> Represents a [gift](https://core.telegram.org/api/gifts) owned by a peer.

## Определение TL

```
savedStarGift#41df43fc flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long gift_num:flags.19?int can_craft_at:flags.20?int = SavedStarGift;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| name_hidden | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the gift sender in from_id and the message are set only for the receiver of the gift. |
| unsaved | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | If set, the gift is not pinned on the user's profile. |
| refunded | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | This gift was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) and then re-downgraded to a regular gift because a request to refund the payment related to the upgrade was made, and the money was returned. |
| can_upgrade | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | Only set for non-collectible gifts, if they can be upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| pinned_to_top | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | Whether this gift is pinned on top of the user's profile page. |
| upgrade_separate | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[true](/constructor/true/) | If set, someone already [separately pre-paid](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade) for the upgrade of this gift. |
| from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Peer](/type/Peer/) | Sender of the gift (unset for anonymous gifts). |
| date | [int](/type/int/) | Reception date of the gift. |
| gift | [StarGift](/type/StarGift/) | The collectible gift. |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[TextWithEntities](/type/TextWithEntities/) | Message attached to the gift. |
| msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | For gifts received by users, ID to use in [inputSavedStarGiftUser](/constructor/inputSavedStarGiftUser/) constructors. |
| saved_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[long](/type/long/) | For gifts received by channels, ID to use in [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/) constructors. |
| convert_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[long](/type/long/) | For non-collectible gifts, the receiver of this gift may convert it to this many Telegram Stars, instead of displaying it on their profile page. |
| upgrade_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[long](/type/long/) | Only for pre-paid non-collectible gifts, the number of Telegram Stars the sender has already paid to [convert the gift into a collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) (this is different from the meaning of the flag in [messageActionStarGift](/constructor/messageActionStarGift/), where it signals the upgrade price for not yet upgraded gifts). |
| can_export_at | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[int](/type/int/) | If set, indicates that the current gift can't be [exported to the TON blockchain »](https://core.telegram.org/api/gifts#withdraw-a-collectible-gift-to-the-ton-blockchain) yet: the owner will be able to export it at the specified unixtime. |
| transfer_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[long](/type/long/) | If set, indicates that the gift can be [transferred »](https://core.telegram.org/api/gifts#transferring-collectible-gifts) to another user by paying the specified amount of stars. |
| can_transfer_at | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[int](/type/int/) | If set, indicates that the current gift can't be [transferred »](https://core.telegram.org/api/gifts#transferring-collectible-gifts) yet: the owner will be able to transfer it at the specified unixtime. |
| can_resell_at | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[int](/type/int/) | If set, indicates that the current gift can't be [resold »](https://core.telegram.org/api/gifts#reselling-collectible-gifts) yet: the owner will be able to put it up for sale at the specified unixtime. |
| collection_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of the [collections »](https://core.telegram.org/api/gifts#gift-collections) that this gift is a part of. |
| prepaid_upgrade_hash | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[string](/type/string/) | [Hash to prepay for a gift upgrade separately »](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade). |
| drop_original_details_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[long](/type/long/) | If set, the [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) attribute of this gift may be removed by paying the specified amount of stars, see [here »](https://core.telegram.org/api/gifts#dropping-the-original-details-of-an-upgraded-gift) for the full flow. |
| gift_num | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[int](/type/int/) | Collectible number assigned to the gift, if already known. |
| can_craft_at | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[int](/type/int/) | If set, this gift can be used for [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts) only starting from the specified unixtime. |

## Тип

[SavedStarGift](/type/SavedStarGift/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [inputSavedStarGiftUser](/constructor/inputSavedStarGiftUser/)

A gift received in a private chat with another user.

#### [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/)

A gift received by a channel we own.

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Info about the sender, receiver and message attached to the original [gift »](https://core.telegram.org/api/gifts), before it was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).
