---
title: "payments.getSavedStarGifts"
original: "https://core.telegram.org/method/payments.getSavedStarGifts"
section: ref
description: "Fetch the full list of gifts » owned, received or hosted » by a peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getSavedStarGifts","url":"/method/payments.getSavedStarGifts/"}]
layout: layout.njk
---

# payments.getSavedStarGifts

Fetch the full list of [gifts »](/api/gifts/#list-all-received-gifts) owned, received or [hosted »](/api/gifts/#hosted-collectible-gifts) by a peer.

Note that unlike what the name suggests, the method can be used to fetch both "saved" and "unsaved" gifts (aka gifts both pinned and not pinned) to the profile, depending on the passed flags.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.savedStarGifts/">payments.savedStarGifts</a>#95f389b1 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> chat_notifications_enabled:flags.1?<a href="/type/Bool/">Bool</a> gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedStarGift/">SavedStarGift</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.SavedStarGifts/">payments.SavedStarGifts</a>;
---functions---
<a href="/method/payments.getSavedStarGifts/" class="current_page_link">payments.getSavedStarGifts</a>#a319e569 flags:<a href="/type/%23/">#</a> exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:<a href="/type/InputPeer/">InputPeer</a> collection_id:flags.6?<a href="/type/int/">int</a> offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/payments.SavedStarGifts/">payments.SavedStarGifts</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>exclude_unsaved</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Exclude gifts not pinned on the profile.</td></tr><tr><td><strong>exclude_saved</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Exclude gifts pinned on the profile.</td></tr><tr><td><strong>exclude_unlimited</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Exclude gifts that do not have the <a href="/constructor/starGift/">starGift</a>.<code>limited</code> flag set.</td></tr><tr><td><strong>exclude_unique</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Exclude <a href="/api/gifts/#collectible-gifts">collectible gifts »</a>.</td></tr><tr><td><strong>sort_by_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>If set, sorts the gifts by price instead of reception date.</td></tr><tr><td><strong>exclude_upgradable</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Exclude gifts that can be <a href="/api/gifts/#collectible-gifts">upgraded to collectible gifts »</a>.</td></tr><tr><td><strong>exclude_unupgradable</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>Exclude gifts that cannot be <a href="/api/gifts/#collectible-gifts">upgraded to collectible gifts »</a>.</td></tr><tr><td><strong>peer_color_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>If set, only returns <a href="/api/gifts/#collectible-gifts">collectible gifts</a> whose palette can be used as a <a href="/api/colors/#collectible-message-palettes">collectible message palette »</a>.</td></tr><tr><td><strong>exclude_hosted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>If set, excludes <a href="/api/gifts/#hosted-collectible-gifts">hosted collectible gifts »</a>, returning only gifts owned or received by <code>peer</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Fetch only gifts owned, received or <a href="/api/gifts/#hosted-collectible-gifts">hosted »</a> by the specified peer, such as: a user, with peer=<a href="/constructor/inputPeerUser/">inputPeerUser</a>; a channel, with peer=<a href="/constructor/inputPeerChannel/">inputPeerChannel</a>; a <a href="/api/bots/connected-business-bots/">connected business user »</a> (when executing the method as a bot, over the business connection), with peer=<a href="/constructor/inputPeerUser/">inputPeerUser</a>.</td></tr><tr><td><strong>collection_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/int/">int</a></td><td>Only returns gifts within the specified <a href="/api/gifts/#gift-collections">collection »</a>.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/offsets/">Offset for pagination</a>.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

### Both users and bots can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>COLLECTION_ID_INVALID</td><td>The specified collection ID is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](/api/gifts/) for more info.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [inputPeerUser](/constructor/inputPeerUser/)

Defines a user for further interaction.

#### [inputPeerChannel](/constructor/inputPeerChannel/)

Defines a channel for further interaction.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
