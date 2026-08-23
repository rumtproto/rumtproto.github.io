---
title: "InputInvoice (тип)"
original: "https://core.telegram.org/type/InputInvoice"
section: ref
kind: type
layout: layout.njk
---

# InputInvoice

*Тип из схемы TL.*

> An invoice

## Определение TL

```
inputInvoiceMessage#c5b56859 peer:InputPeer msg_id:int = InputInvoice;
inputInvoiceSlug#c326caef slug:string = InputInvoice;
inputInvoicePremiumGiftCode#98986c0d purpose:InputStorePaymentPurpose option:PremiumGiftCodeOption = InputInvoice;
inputInvoiceStars#65f00ce3 purpose:InputStorePaymentPurpose = InputInvoice;
inputInvoiceChatInviteSubscription#34e793f1 hash:string = InputInvoice;
inputInvoiceStarGift#e8625e92 flags:# hide_name:flags.0?true include_upgrade:flags.2?true peer:InputPeer gift_id:long message:flags.1?TextWithEntities = InputInvoice;
inputInvoiceStarGiftUpgrade#4d818d5d flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = InputInvoice;
inputInvoiceStarGiftTransfer#4a5f5bd9 stargift:InputSavedStarGift to_id:InputPeer = InputInvoice;
inputInvoicePremiumGiftStars#dabab2ef flags:# user_id:InputUser months:int message:flags.0?TextWithEntities = InputInvoice;
inputInvoiceBusinessBotTransferStars#f4997e42 bot:InputUser stars:long = InputInvoice;
inputInvoiceStarGiftResale#c39f5324 flags:# ton:flags.0?true slug:string to_id:InputPeer = InputInvoice;
inputInvoiceStarGiftPrepaidUpgrade#9a0b48b8 peer:InputPeer hash:string = InputInvoice;
inputInvoicePremiumAuthCode#3e77f614 purpose:InputStorePaymentPurpose = InputInvoice;
inputInvoiceStarGiftDropOriginalDetails#923d8d1 stargift:InputSavedStarGift = InputInvoice;
inputInvoiceStarGiftAuctionBid#1ecafa10 flags:# hide_name:flags.0?true update_bid:flags.2?true peer:flags.3?InputPeer gift_id:long bid_amount:long message:flags.1?TextWithEntities = InputInvoice;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputInvoiceMessage](/constructor/inputInvoiceMessage/) | An invoice contained in a [messageMediaInvoice](/constructor/messageMediaInvoice/) message or [paid media »](https://core.telegram.org/api/paid-media). |
| [inputInvoiceSlug](/constructor/inputInvoiceSlug/) | An invoice slug taken from an [invoice deep link](https://core.telegram.org/api/links#invoice-links) or from the [premium_invoice_slug app config parameter »](https://core.telegram.org/api/config#premium-invoice-slug) |
| [inputInvoicePremiumGiftCode](/constructor/inputInvoicePremiumGiftCode/) | Used if the user wishes to start a channel/supergroup [giveaway](https://core.telegram.org/api/giveaways) or send some [giftcodes](https://core.telegram.org/api/giveaways) to members of a channel/supergroup, in exchange for [boosts](https://core.telegram.org/api/boost). |
| [inputInvoiceStars](/constructor/inputInvoiceStars/) | Used to top up the [Telegram Stars](https://core.telegram.org/api/stars) balance of the current account or someone else's account, or to start a [Telegram Star giveaway »](https://core.telegram.org/api/giveaways#star-giveaways). |
| [inputInvoiceChatInviteSubscription](/constructor/inputInvoiceChatInviteSubscription/) | Used to pay for a [Telegram Star subscription »](https://core.telegram.org/api/stars#star-subscriptions). |
| [inputInvoiceStarGift](/constructor/inputInvoiceStarGift/) | Used to buy a [Telegram Star Gift, see here »](https://core.telegram.org/api/gifts) for more info. |
| [inputInvoiceStarGiftUpgrade](/constructor/inputInvoiceStarGiftUpgrade/) | Used to [pay to upgrade a Gift to a collectible gift](https://core.telegram.org/api/gifts#upgrade-a-gift-to-a-collectible-gift), see the [collectible gifts »](https://core.telegram.org/api/gifts#collectible-gifts) documentation for more info on the full flow. |
| [inputInvoiceStarGiftTransfer](/constructor/inputInvoiceStarGiftTransfer/) | Used to [pay to transfer a collectible gift to another peer](https://core.telegram.org/api/gifts#transferring-collectible-gifts), see the [gifts »](https://core.telegram.org/api/gifts#transferring-collectible-gifts) documentation for more info. |
| [inputInvoicePremiumGiftStars](/constructor/inputInvoicePremiumGiftStars/) | Used to gift a [Telegram Premium](https://core.telegram.org/api/premium) subscription to another user, paying with [Telegram Stars](https://core.telegram.org/api/stars). |
| [inputInvoiceBusinessBotTransferStars](/constructor/inputInvoiceBusinessBotTransferStars/) | Transfer stars from the balance of a user account [connected to a business bot](https://core.telegram.org/api/bots/connected-business-bots), to the balance of the [business bot](https://core.telegram.org/api/bots/connected-business-bots), see [here »](https://core.telegram.org/api/stars#transferring-stars-from-a-business-account-to-the-business-bot) for more info on the full flow. |
| [inputInvoiceStarGiftResale](/constructor/inputInvoiceStarGiftResale/) | Used to buy a [collectible gift](https://core.telegram.org/api/gifts#collectible-gifts) currently up on resale, see [here](https://core.telegram.org/api/gifts#reselling-collectible-gifts) for more info on the full flow. |
| [inputInvoiceStarGiftPrepaidUpgrade](/constructor/inputInvoiceStarGiftPrepaidUpgrade/) | [Separately prepay for the upgrade of a gift »](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade). |
| [inputInvoicePremiumAuthCode](/constructor/inputInvoicePremiumAuthCode/) | Used to pay for login codes, in case of high cost of SMS verification codes for the user's country/provider, see [here »](https://core.telegram.org/api/auth/#paid-auth) for more info. |
| [inputInvoiceStarGiftDropOriginalDetails](/constructor/inputInvoiceStarGiftDropOriginalDetails/) | Used to pay for for the removal of the [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) attribute from a collectible gift, see [here »](https://core.telegram.org/api/gifts#dropping-the-original-details-of-an-upgraded-gift) for the full flow. |
| [inputInvoiceStarGiftAuctionBid](/constructor/inputInvoiceStarGiftAuctionBid/) | Used to place a bid in a [collectible gift auction »](https://core.telegram.org/api/auctions). |
