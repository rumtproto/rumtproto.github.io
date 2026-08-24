---
title: "disallowedGiftsSettings"
original: "https://core.telegram.org/constructor/disallowedGiftsSettings"
section: ref
description: "Disallow the reception of specific gift types."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"disallowedGiftsSettings","url":"/constructor/disallowedGiftsSettings/"}]
layout: layout.njk
---

# disallowedGiftsSettings

Disallow the reception of specific [gift](/api/gifts/) types.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/disallowedGiftsSettings/" class="current_page_link">disallowedGiftsSettings</a>#71f276c4 flags:<a href="/type/%23/">#</a> disallow_unlimited_stargifts:flags.0?true disallow_limited_stargifts:flags.1?true disallow_unique_stargifts:flags.2?true disallow_premium_gifts:flags.3?true disallow_stargifts_from_channels:flags.4?true = <a href="/type/DisallowedGiftsSettings/">DisallowedGiftsSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>disallow_unlimited_stargifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Disallow the reception of gifts with an unlimited supply (those with the <a href="/constructor/starGift/">starGift</a>.<code>limited</code> flag <strong>not</strong> set).</td></tr><tr><td><strong>disallow_limited_stargifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Disallow the reception of limited-supply gifts (those with the <a href="/constructor/starGift/">starGift</a>.<code>limited</code> flag set).</td></tr><tr><td><strong>disallow_unique_stargifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Disallow the reception of <a href="/api/gifts/#collectible-gifts">collectible gifts »</a>.</td></tr><tr><td><strong>disallow_premium_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Disallow the reception of <a href="/api/gifts/#collectible-gifts">gifted Telegram Premium subscriptions »</a>.</td></tr><tr><td><strong>disallow_stargifts_from_channels</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Disallow the reception of gifts sent by channels.</td></tr></tbody></table>

### Type

[DisallowedGiftsSettings](/type/DisallowedGiftsSettings/)

### Related pages

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](/api/gifts/) for more info.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
