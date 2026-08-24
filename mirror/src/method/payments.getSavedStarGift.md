---
title: "payments.getSavedStarGift"
original: "https://core.telegram.org/method/payments.getSavedStarGift"
section: ref
description: "Fetch info about specific gifts owned by a peer we control."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getSavedStarGift","url":"/method/payments.getSavedStarGift/"}]
layout: layout.njk
---

# payments.getSavedStarGift

Fetch info about specific [gifts](/api/gifts/) owned by a peer we control.

Note that unlike what the name suggests, the method can be used to fetch both "saved" and "unsaved" gifts (aka gifts both pinned and not pinned to the profile).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.savedStarGifts/">payments.savedStarGifts</a>#95f389b1 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> chat_notifications_enabled:flags.1?<a href="/type/Bool/">Bool</a> gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedStarGift/">SavedStarGift</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.SavedStarGifts/">payments.SavedStarGifts</a>;
---functions---
<a href="/method/payments.getSavedStarGift/" class="current_page_link">payments.getSavedStarGift</a>#b455a106 stargift:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt; = <a href="/type/payments.SavedStarGifts/">payments.SavedStarGifts</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt;</td><td>List of gifts to fetch info about.</td></tr></tbody></table>

### Result

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>SAVED_ID_EMPTY</td><td>The passed inputSavedStarGiftChat.saved_id is empty.</td></tr><tr><td>400</td><td>STARGIFT_OWNER_INVALID</td><td>You cannot transfer or sell a gift owned by another user.</td></tr><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>The specified gift slug is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
