---
title: "messageMediaPaidMedia"
original: "https://core.telegram.org/constructor/messageMediaPaidMedia"
section: ref
description: "Paid media, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaPaidMedia","url":"/constructor/messageMediaPaidMedia/"}]
layout: layout.njk
---

# messageMediaPaidMedia

[Paid media, see here »](/api/paid-media/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaPaidMedia/" class="current_page_link">messageMediaPaidMedia</a>#a8852491 stars_amount:<a href="/type/long/">long</a> extended_media:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageExtendedMedia/">MessageExtendedMedia</a>&gt; = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stars_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The price of the media in <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageExtendedMedia/">MessageExtendedMedia</a>&gt;</td><td>Either the paid-for media, or super low resolution media previews if the media wasn't purchased yet, <a href="/api/paid-media/#viewing-paid-media">see here »</a> for more info.</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid media](/api/paid-media/)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
