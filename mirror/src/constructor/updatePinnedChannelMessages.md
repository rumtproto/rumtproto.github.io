---
title: "updatePinnedChannelMessages"
original: "https://core.telegram.org/constructor/updatePinnedChannelMessages"
section: ref
description: "Messages were pinned/unpinned in a channel/supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePinnedChannelMessages","url":"/constructor/updatePinnedChannelMessages/"}]
layout: layout.njk
---

# updatePinnedChannelMessages

Messages were pinned/unpinned in a [channel/supergroup](/api/channel/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatePinnedChannelMessages/" class="current_page_link">updatePinnedChannelMessages</a>#5bb98608 flags:<a href="/type/%23/">#</a> pinned:flags.0?true channel_id:<a href="/type/long/">long</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the messages were pinned or unpinned</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Channel ID</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Messages</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Number of events that were generated</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
