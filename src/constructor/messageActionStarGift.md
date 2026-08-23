---
title: "messageActionStarGift (конструктор)"
original: "https://core.telegram.org/constructor/messageActionStarGift"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionStarGift

*Конструктор из схемы TL.*

> You received a [gift, see here »](https://core.telegram.org/api/gifts) for more info.

## Определение TL

```
messageActionStarGift#ea2c31d3 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int to_id:flags.18?Peer gift_num:flags.19?int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| name_hidden | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the name of the sender of the gift will be hidden if the destination user decides to display the gift on their profile |
| saved | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this gift was added to the destination user's profile (may be toggled using [payments.saveStarGift](/method/payments.saveStarGift/) and fetched using [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)) |
| converted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this gift was converted to [Telegram Stars](https://core.telegram.org/api/stars) and cannot be displayed on the profile anymore. |
| upgraded | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | This gift was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| refunded | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | This gift is not available anymore because a request to refund the payment related to this gift was made, and the money was returned. |
| can_upgrade | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | If set, this gift can be [upgraded to a collectible gift](https://core.telegram.org/api/gifts#upgrade-a-gift-to-a-collectible-gift); can only be set for the receiver of a gift. |
| prepaid_upgrade | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | The sender has already pre-paid for the upgrade of this gift to a collectible gift. |
| upgrade_separate | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | This service message is the notification of a [separate pre-payment for the upgrade of a gift we own](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade). |
| auction_acquired | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[true](/constructor/true/) | If set, this gift was acquired in a [collectible gifts auction »](https://core.telegram.org/api/auctions). |
| gift | [StarGift](/type/StarGift/) | Info about the gift |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[TextWithEntities](/type/TextWithEntities/) | Additional message from the sender of the gift |
| convert_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[long](/type/long/) | The receiver of this gift may convert it to this many Telegram Stars, instead of displaying it on their profile page. convert_stars will be equal to stars only if the gift was bought using recently bought Telegram Stars, otherwise it will be less than stars. |
| upgrade_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | If set, this gift was [upgraded to a collectible gift](https://core.telegram.org/api/gifts#upgrade-a-gift-to-a-collectible-gift), and the corresponding [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/) is available at the specified message ID. |
| upgrade_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[long](/type/long/) | The number of Telegram Stars the user can pay to [convert the gift into a collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[Peer](/type/Peer/) | Sender of the gift (unset for anonymous gifts). |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[Peer](/type/Peer/) | Receiver of the gift. |
| saved_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[long](/type/long/) | For channel gifts, ID to use in [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/) constructors. |
| prepaid_upgrade_hash | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[string](/type/string/) | [Hash to prepay for a gift upgrade separately »](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade). |
| gift_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[int](/type/int/) | For [separate upgrades](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade), the identifier of the message with the gift whose upgrade was prepaid (only valid for the receiver of the service message). |
| to_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[Peer](/type/Peer/) | For gifts acquired in an [auction »](https://core.telegram.org/api/auctions) (i.e. when auction_acquired is set), the peer the gift was assigned to; only present if the target peer is different from the bidder, in which case it will only be present to the messageActionStarGift sent to the bidder, not to the messageActionStarGift sent to the target peer. |
| gift_num | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[int](/type/int/) | For gifts acquired in an [auction »](https://core.telegram.org/api/auctions), the collectible number of the won [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts); this field is disjoint from auction_acquired because only auction collectibles won before this field was introduced in the API will not have this flag set. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [payments.saveStarGift](/method/payments.saveStarGift/)

Display or remove a [received or hosted gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) from our profile.

#### [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

Fetch the full list of [gifts »](https://core.telegram.org/api/gifts#list-all-received-gifts) owned, received or [hosted »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) by a peer.

Note that unlike what the name suggests, the method can be used to fetch both "saved" and "unsaved" gifts (aka gifts both pinned and not pinned) to the profile, depending on the passed flags.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

A [gift »](https://core.telegram.org/api/gifts) was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

#### [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/)

A gift received by a channel we own.
