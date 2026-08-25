---
title: "StarsTransactionPeer"
original: "https://core.telegram.org/type/StarsTransactionPeer"
section: ref
description: "Source of an incoming Telegram Star transaction, or its recipient for outgoing Telegram Star transactions."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarsTransactionPeer","url":"/type/StarsTransactionPeer/"}]
layout: layout.njk
---

# StarsTransactionPeer

Source of an incoming [Telegram Star transaction](/api/stars/), or its recipient for outgoing [Telegram Star transactions](/api/stars/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsTransactionPeerUnsupported/">starsTransactionPeerUnsupported</a>#95f2bfe4 = <a href="/type/StarsTransactionPeer/" class="current_page_link">StarsTransactionPeer</a>;
<a href="/constructor/starsTransactionPeerAppStore/">starsTransactionPeerAppStore</a>#b457b375 = <a href="/type/StarsTransactionPeer/" class="current_page_link">StarsTransactionPeer</a>;
<a href="/constructor/starsTransactionPeerPlayMarket/">starsTransactionPeerPlayMarket</a>#7b560a0b = <a href="/type/StarsTransactionPeer/" class="current_page_link">StarsTransactionPeer</a>;
<a href="/constructor/starsTransactionPeerPremiumBot/">starsTransactionPeerPremiumBot</a>#250dbaf8 = <a href="/type/StarsTransactionPeer/" class="current_page_link">StarsTransactionPeer</a>;
<a href="/constructor/starsTransactionPeerFragment/">starsTransactionPeerFragment</a>#e92fd902 = <a href="/type/StarsTransactionPeer/" class="current_page_link">StarsTransactionPeer</a>;
<a href="/constructor/starsTransactionPeer/">starsTransactionPeer</a>#d80da15d peer:<a href="/type/Peer/">Peer</a> = <a href="/type/StarsTransactionPeer/" class="current_page_link">StarsTransactionPeer</a>;
<a href="/constructor/starsTransactionPeerAds/">starsTransactionPeerAds</a>#60682812 = <a href="/type/StarsTransactionPeer/" class="current_page_link">StarsTransactionPeer</a>;
<a href="/constructor/starsTransactionPeerAPI/">starsTransactionPeerAPI</a>#f9677aad = <a href="/type/StarsTransactionPeer/" class="current_page_link">StarsTransactionPeer</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starsTransactionPeerUnsupported/">starsTransactionPeerUnsupported</a></td><td>Describes a <a href="/api/stars/">Telegram Star</a> transaction that cannot be described using the current layer.</td></tr><tr><td><a href="/constructor/starsTransactionPeerAppStore/">starsTransactionPeerAppStore</a></td><td>Describes a <a href="/api/stars/">Telegram Star</a> transaction with the App Store, used when purchasing Telegram Stars through the App Store.</td></tr><tr><td><a href="/constructor/starsTransactionPeerPlayMarket/">starsTransactionPeerPlayMarket</a></td><td>Describes a <a href="/api/stars/">Telegram Star</a> transaction with the Play Store, used when purchasing Telegram Stars through the Play Store.</td></tr><tr><td><a href="/constructor/starsTransactionPeerPremiumBot/">starsTransactionPeerPremiumBot</a></td><td>Describes a <a href="/api/stars/">Telegram Star</a> transaction made using <a href="https://t.me/premiumbot">@PremiumBot</a> (i.e. using the <a href="/constructor/inputInvoiceStars/">inputInvoiceStars</a> flow described <a href="/api/stars/#buying-or-gifting-stars">here »</a>).</td></tr><tr><td><a href="/constructor/starsTransactionPeerFragment/">starsTransactionPeerFragment</a></td><td>Describes a <a href="/api/stars/">Telegram Star</a> transaction with <a href="https://fragment.com">Fragment</a>, used when purchasing Telegram Stars through <a href="https://fragment.com">Fragment</a>.</td></tr><tr><td><a href="/constructor/starsTransactionPeer/">starsTransactionPeer</a></td><td>Describes a <a href="/api/stars/">Telegram Star</a> transaction with another peer.</td></tr><tr><td><a href="/constructor/starsTransactionPeerAds/">starsTransactionPeerAds</a></td><td>Describes a <a href="/api/stars/">Telegram Star</a> transaction used to pay for <a href="/api/stars/#paying-for-ads">Telegram ads as specified here »</a>.</td></tr><tr><td><a href="/constructor/starsTransactionPeerAPI/">starsTransactionPeerAPI</a></td><td>Describes a <a href="/api/stars/">Telegram Star</a> transaction used to pay for paid API usage, such as <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">paid bot broadcasts</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
