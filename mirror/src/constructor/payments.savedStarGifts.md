---
title: "payments.savedStarGifts"
original: "https://core.telegram.org/constructor/payments.savedStarGifts"
section: ref
description: "Represents a list of gifts."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.savedStarGifts","url":"/constructor/payments.savedStarGifts/"}]
layout: layout.njk
---

# payments.savedStarGifts

Represents a list of [gifts](/api/gifts/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.savedStarGifts/" class="current_page_link">payments.savedStarGifts</a>#95f389b1 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> chat_notifications_enabled:flags.1?<a href="/type/Bool/">Bool</a> gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedStarGift/">SavedStarGift</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.SavedStarGifts/">payments.SavedStarGifts</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of results (can be less than the returned <code>gifts</code>, in which case <code>next_offset</code> will be set).</td></tr><tr><td><strong>chat_notifications_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Bool/">Bool</a></td><td>Ternary value: can be not set, set&amp;true, set&amp;false.<br>Can only be set for channels we own: the value indicates whether we <a href="/api/gifts/#notifications-for-received-channel-gifts">enabled gift notifications</a> for this channel.</td></tr><tr><td><strong>gifts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedStarGift/">SavedStarGift</a>&gt;</td><td>Gifts</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Offset to pass to <a href="/method/payments.getSavedStarGifts/">payments.getSavedStarGifts</a> to fetch the next page of results.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Channels mentioned in <code>gifts</code></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in <code>gifts</code></td></tr></tbody></table>

### Type

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

Fetch the full list of [gifts »](/api/gifts/#list-all-received-gifts) owned, received or [hosted »](/api/gifts/#hosted-collectible-gifts) by a peer.

Note that unlike what the name suggests, the method can be used to fetch both "saved" and "unsaved" gifts (aka gifts both pinned and not pinned) to the profile, depending on the passed flags.
