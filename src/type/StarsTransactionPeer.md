---
title: "StarsTransactionPeer (тип)"
original: "https://core.telegram.org/type/StarsTransactionPeer"
section: ref
kind: type
layout: layout.njk
---

# StarsTransactionPeer

*Тип из схемы TL.*

> Source of an incoming [Telegram Star transaction](https://core.telegram.org/api/stars), or its recipient for outgoing [Telegram Star transactions](https://core.telegram.org/api/stars).

## Определение TL

```
starsTransactionPeerUnsupported#95f2bfe4 = StarsTransactionPeer;
starsTransactionPeerAppStore#b457b375 = StarsTransactionPeer;
starsTransactionPeerPlayMarket#7b560a0b = StarsTransactionPeer;
starsTransactionPeerPremiumBot#250dbaf8 = StarsTransactionPeer;
starsTransactionPeerFragment#e92fd902 = StarsTransactionPeer;
starsTransactionPeer#d80da15d peer:Peer = StarsTransactionPeer;
starsTransactionPeerAds#60682812 = StarsTransactionPeer;
starsTransactionPeerAPI#f9677aad = StarsTransactionPeer;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starsTransactionPeerUnsupported](/constructor/starsTransactionPeerUnsupported/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction that cannot be described using the current layer. |
| [starsTransactionPeerAppStore](/constructor/starsTransactionPeerAppStore/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction with the App Store, used when purchasing Telegram Stars through the App Store. |
| [starsTransactionPeerPlayMarket](/constructor/starsTransactionPeerPlayMarket/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction with the Play Store, used when purchasing Telegram Stars through the Play Store. |
| [starsTransactionPeerPremiumBot](/constructor/starsTransactionPeerPremiumBot/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction made using [@PremiumBot](https://t.me/premiumbot) (i.e. using the [inputInvoiceStars](/constructor/inputInvoiceStars/) flow described [here »](https://core.telegram.org/api/stars#buying-or-gifting-stars)). |
| [starsTransactionPeerFragment](/constructor/starsTransactionPeerFragment/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction with [Fragment](https://fragment.com), used when purchasing Telegram Stars through [Fragment](https://fragment.com). |
| [starsTransactionPeer](/constructor/starsTransactionPeer/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction with another peer. |
| [starsTransactionPeerAds](/constructor/starsTransactionPeerAds/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction used to pay for [Telegram ads as specified here »](https://core.telegram.org/api/stars#paying-for-ads). |
| [starsTransactionPeerAPI](/constructor/starsTransactionPeerAPI/) | Describes a [Telegram Star](https://core.telegram.org/api/stars) transaction used to pay for paid API usage, such as [paid bot broadcasts](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once). |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
