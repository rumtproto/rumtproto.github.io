---
title: "payments.toggleStarGiftsPinnedToTop"
original: "https://core.telegram.org/method/payments.toggleStarGiftsPinnedToTop"
section: ref
description: "Pins a received gift on top of the profile of the user or owned channels by using payments.toggleStarGiftsPinnedToTop."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.toggleStarGiftsPinnedToTop","url":"/method/payments.toggleStarGiftsPinnedToTop/"}]
layout: layout.njk
---

# payments.toggleStarGiftsPinnedToTop

Pins a received gift on top of the profile of the user or owned channels by using [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/payments.toggleStarGiftsPinnedToTop/" class="current_page_link">payments.toggleStarGiftsPinnedToTop</a>#1513e7b0 peer:<a href="/type/InputPeer/">InputPeer</a> stargift:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer where to pin the gift.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt;</td><td>The gift to pin.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/)

Pins a received gift on top of the profile of the user or owned channels by using [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/).
