---
title: "updateChannelMessageForwards"
original: "https://core.telegram.org/constructor/updateChannelMessageForwards"
section: ref
description: "The forward counter of a message in a channel has changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChannelMessageForwards","url":"/constructor/updateChannelMessageForwards/"}]
layout: layout.njk
---

# updateChannelMessageForwards

The forward counter of a message in a channel has changed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChannelMessageForwards/" class="current_page_link">updateChannelMessageForwards</a>#d29a27f4 channel_id:<a href="/type/long/">long</a> id:<a href="/type/int/">int</a> forwards:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Channel ID</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the message</td></tr><tr><td><strong>forwards</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New forward counter</td></tr></tbody></table>

### Type

[Update](/type/Update/)
