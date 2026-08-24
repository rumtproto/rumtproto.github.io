---
title: "Payments.CheckedGiftCode"
original: "https://core.telegram.org/type/payments.CheckedGiftCode"
section: ref
description: "Info about a Telegram Premium Giftcode."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.CheckedGiftCode","url":"/type/payments.CheckedGiftCode/"}]
layout: layout.njk
---

# Payments.CheckedGiftCode

Info about a [Telegram Premium Giftcode](/api/giveaways/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.checkedGiftCode/">payments.checkedGiftCode</a>#eb983f8f flags:<a href="/type/%23/">#</a> via_giveaway:flags.2?true from_id:flags.4?<a href="/type/Peer/">Peer</a> giveaway_msg_id:flags.3?<a href="/type/int/">int</a> to_id:flags.0?<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> days:<a href="/type/int/">int</a> used_date:flags.1?<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.CheckedGiftCode/" class="current_page_link">payments.CheckedGiftCode</a>;

---functions---

<a href="/method/payments.checkGiftCode/">payments.checkGiftCode</a>#8e51b4c1 slug:<a href="/type/string/">string</a> = <a href="/type/payments.CheckedGiftCode/" class="current_page_link">payments.CheckedGiftCode</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.checkedGiftCode/">payments.checkedGiftCode</a></td><td>Contains info about a <a href="/api/links/#premium-giftcode-links">Telegram Premium giftcode link</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.checkGiftCode/">payments.checkGiftCode</a></td><td>Obtain information about a <a href="/api/giveaways/">Telegram Premium giftcode »</a></td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
