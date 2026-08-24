---
title: "updateBotShippingQuery"
original: "https://core.telegram.org/constructor/updateBotShippingQuery"
section: ref
description: "This object contains information about an incoming shipping query."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotShippingQuery","url":"/constructor/updateBotShippingQuery/"}]
layout: layout.njk
---

# updateBotShippingQuery

This object contains information about an incoming shipping query.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotShippingQuery/" class="current_page_link">updateBotShippingQuery</a>#b5aefd7d query_id:<a href="/type/long/">long</a> user_id:<a href="/type/long/">long</a> payload:<a href="/type/bytes/">bytes</a> shipping_address:<a href="/type/PostAddress/">PostAddress</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique query identifier</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User who sent the query</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Bot specified invoice payload</td></tr><tr><td><strong>shipping_address</strong></td><td style="text-align: center;"><a href="/type/PostAddress/">PostAddress</a></td><td>User specified shipping address</td></tr></tbody></table>

### Type

[Update](/type/Update/)
