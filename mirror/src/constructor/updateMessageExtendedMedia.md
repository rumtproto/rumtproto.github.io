---
title: "updateMessageExtendedMedia"
original: "https://core.telegram.org/constructor/updateMessageExtendedMedia"
section: ref
description: "You bought a paid media »: this update contains the revealed media."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateMessageExtendedMedia","url":"/constructor/updateMessageExtendedMedia/"}]
layout: layout.njk
---

# updateMessageExtendedMedia

You [bought a paid media »](/api/paid-media/): this update contains the revealed media.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateMessageExtendedMedia/" class="current_page_link">updateMessageExtendedMedia</a>#d5a41724 peer:<a href="/type/Peer/">Peer</a> msg_id:<a href="/type/int/">int</a> extended_media:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageExtendedMedia/">MessageExtendedMedia</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer where the paid media was posted</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the message containing the paid media</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageExtendedMedia/">MessageExtendedMedia</a>&gt;</td><td>Revealed media, contains only <a href="/constructor/messageExtendedMedia/">messageExtendedMedia</a> constructors.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [messageExtendedMedia](/constructor/messageExtendedMedia/)

Already purchased paid media, [see here »](/api/paid-media/) for more info.

#### [Paid media](/api/paid-media/)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
