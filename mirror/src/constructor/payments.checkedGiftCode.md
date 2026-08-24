---
title: "payments.checkedGiftCode"
original: "https://core.telegram.org/constructor/payments.checkedGiftCode"
section: ref
description: "Contains info about a Telegram Premium giftcode link."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.checkedGiftCode","url":"/constructor/payments.checkedGiftCode/"}]
layout: layout.njk
---

# payments.checkedGiftCode

Contains info about a [Telegram Premium giftcode link](/api/links/#premium-giftcode-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.checkedGiftCode/" class="current_page_link">payments.checkedGiftCode</a>#eb983f8f flags:<a href="/type/%23/">#</a> via_giveaway:flags.2?true from_id:flags.4?<a href="/type/Peer/">Peer</a> giveaway_msg_id:flags.3?<a href="/type/int/">int</a> to_id:flags.0?<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> days:<a href="/type/int/">int</a> used_date:flags.1?<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.CheckedGiftCode/">payments.CheckedGiftCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>via_giveaway</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this giftcode was created by a <a href="/api/giveaways/">giveaway</a>.</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Peer/">Peer</a></td><td>The peer that created the gift code.</td></tr><tr><td><strong>giveaway_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>Message ID of the giveaway in the channel specified in <code>from_id</code>.</td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>The destination user of the gift.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Creation date of the gift code.</td></tr><tr><td><strong>days</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration of the gifted Telegram Premium subscription, in days.</td></tr><tr><td><strong>used_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>When was the giftcode imported, if it was imported.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[payments.CheckedGiftCode](/type/payments.CheckedGiftCode/)

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
