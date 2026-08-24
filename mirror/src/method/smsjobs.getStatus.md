---
title: "smsjobs.getStatus"
original: "https://core.telegram.org/method/smsjobs.getStatus"
section: ref
description: "Get SMS jobs status (official clients only)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"smsjobs.getStatus","url":"/method/smsjobs.getStatus/"}]
layout: layout.njk
---

# smsjobs.getStatus

Get SMS jobs status (official clients only).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/smsjobs.status/">smsjobs.status</a>#2aee9191 flags:<a href="/type/%23/">#</a> allow_international:flags.0?true recent_sent:<a href="/type/int/">int</a> recent_since:<a href="/type/int/">int</a> recent_remains:<a href="/type/int/">int</a> total_sent:<a href="/type/int/">int</a> total_since:<a href="/type/int/">int</a> last_gift_slug:flags.1?<a href="/type/string/">string</a> terms_url:<a href="/type/string/">string</a> = <a href="/type/smsjobs.Status/">smsjobs.Status</a>;
---functions---
<a href="/method/smsjobs.getStatus/" class="current_page_link">smsjobs.getStatus</a>#10a698e8 = <a href="/type/smsjobs.Status/">smsjobs.Status</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[smsjobs.Status](/type/smsjobs.Status/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>NOT_JOINED</td><td>The current user hasn't joined the Peer-to-Peer Login Program.</td></tr></tbody></table>
