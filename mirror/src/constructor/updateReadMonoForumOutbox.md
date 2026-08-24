---
title: "updateReadMonoForumOutbox"
original: "https://core.telegram.org/constructor/updateReadMonoForumOutbox"
section: ref
description: "Outgoing messages in a monoforum were read."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateReadMonoForumOutbox","url":"/constructor/updateReadMonoForumOutbox/"}]
layout: layout.njk
---

# updateReadMonoForumOutbox

Outgoing messages in a [monoforum](/api/monoforum/) were read.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateReadMonoForumOutbox/" class="current_page_link">updateReadMonoForumOutbox</a>#a4a79376 channel_id:<a href="/type/long/">long</a> saved_peer_id:<a href="/type/Peer/">Peer</a> read_max_id:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the monoforum.</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Topic ID.</td></tr><tr><td><strong>read_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position up to which all outgoing messages are read.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
