---
title: "updateReadChannelOutbox"
original: "https://core.telegram.org/constructor/updateReadChannelOutbox"
section: ref
description: "Outgoing messages in a channel/supergroup were read"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateReadChannelOutbox","url":"/constructor/updateReadChannelOutbox/"}]
layout: layout.njk
---

# updateReadChannelOutbox

Outgoing messages in a [channel/supergroup](/api/channel/) were read

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateReadChannelOutbox/" class="current_page_link">updateReadChannelOutbox</a>#b75f99a9 channel_id:<a href="/type/long/">long</a> max_id:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Channel/supergroup ID</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position up to which all outgoing messages are read.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
