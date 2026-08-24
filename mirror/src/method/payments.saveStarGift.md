---
title: "payments.saveStarGift"
original: "https://core.telegram.org/method/payments.saveStarGift"
section: ref
description: "Display or remove a received or hosted gift » from our profile."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.saveStarGift","url":"/method/payments.saveStarGift/"}]
layout: layout.njk
---

# payments.saveStarGift

Display or remove a [received or hosted gift »](/api/gifts/#hosted-collectible-gifts) from our profile.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/payments.saveStarGift/" class="current_page_link">payments.saveStarGift</a>#2a2a697c flags:<a href="/type/%23/">#</a> unsave:flags.0?true stargift:<a href="/type/InputSavedStarGift/">InputSavedStarGift</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, hides the gift from our profile.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift/">InputSavedStarGift</a></td><td>The gift to display or remove. A <a href="/api/gifts/#hosted-collectible-gifts">hosted collectible gift »</a> may be used by its host or owner.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>SAVED_ID_EMPTY</td><td>The passed inputSavedStarGiftChat.saved_id is empty.</td></tr><tr><td>400</td><td>STARGIFT_OBJECT_INVALID</td><td>The specified star gift object is invalid.</td></tr><tr><td>400</td><td>STARGIFT_OWNER_INVALID</td><td>You cannot transfer or sell a gift owned by another user.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
