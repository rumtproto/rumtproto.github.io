---
title: "payments.toggleChatStarGiftNotifications"
original: "https://core.telegram.org/method/payments.toggleChatStarGiftNotifications"
section: ref
description: "Enables or disables the reception of notifications every time a gift » is received by the specified channel, can only be invoked by admins with post_messages admin rights."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.toggleChatStarGiftNotifications","url":"/method/payments.toggleChatStarGiftNotifications/"}]
layout: layout.njk
---

# payments.toggleChatStarGiftNotifications

Enables or disables the reception of notifications every time a [gift »](/api/gifts/) is received by the specified channel, can only be invoked by admins with `post_messages` [admin rights](/constructor/chatAdminRights/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/payments.toggleChatStarGiftNotifications/" class="current_page_link">payments.toggleChatStarGiftNotifications</a>#60eaefa1 flags:<a href="/type/%23/">#</a> enabled:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to enable or disable reception of notifications in the form of <a href="/constructor/messageActionStarGiftUnique/">messageActionStarGiftUnique</a> and <a href="/constructor/messageActionStarGift/">messageActionStarGift</a> service messages from the channel.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The channel for which to receive or not receive notifications.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

A [gift »](/api/gifts/) was upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](/api/gifts/) for more info.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [chatAdminRights](/constructor/chatAdminRights/)

Represents the rights of an admin in a [channel/supergroup](/api/channel/).
