---
title: "payments.getPremiumGiftCodeOptions"
original: "https://core.telegram.org/method/payments.getPremiumGiftCodeOptions"
section: ref
description: "Obtain a list of Telegram Premium giveaway/gift code » options."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getPremiumGiftCodeOptions","url":"/method/payments.getPremiumGiftCodeOptions/"}]
layout: layout.njk
---

# payments.getPremiumGiftCodeOptions

Obtain a list of Telegram Premium [giveaway/gift code »](/api/giveaways/) options.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/payments.getPremiumGiftCodeOptions/" class="current_page_link">payments.getPremiumGiftCodeOptions</a>#2757ba54 flags:<a href="/type/%23/">#</a> boost_peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PremiumGiftCodeOption/">PremiumGiftCodeOption</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>boost_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputPeer/">InputPeer</a></td><td>The channel that will start the giveaway</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[PremiumGiftCodeOption](/type/PremiumGiftCodeOption/)\>

### Only users can use this method

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
