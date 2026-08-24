---
title: "smsjobs.status"
original: "https://core.telegram.org/constructor/smsjobs.status"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"smsjobs.status","url":"/constructor/smsjobs.status/"}]
layout: layout.njk
---

# smsjobs.status

Status

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/smsjobs.status/" class="current_page_link">smsjobs.status</a>#2aee9191 flags:<a href="/type/%23/">#</a> allow_international:flags.0?true recent_sent:<a href="/type/int/">int</a> recent_since:<a href="/type/int/">int</a> recent_remains:<a href="/type/int/">int</a> total_sent:<a href="/type/int/">int</a> total_since:<a href="/type/int/">int</a> last_gift_slug:flags.1?<a href="/type/string/">string</a> terms_url:<a href="/type/string/">string</a> = <a href="/type/smsjobs.Status/">smsjobs.Status</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>allow_international</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Allow international numbers</td></tr><tr><td><strong>recent_sent</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Recently sent</td></tr><tr><td><strong>recent_since</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Since</td></tr><tr><td><strong>recent_remains</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Remaining</td></tr><tr><td><strong>total_sent</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total sent</td></tr><tr><td><strong>total_since</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total since</td></tr><tr><td><strong>last_gift_slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Last gift deep link</td></tr><tr><td><strong>terms_url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Terms of service URL</td></tr></tbody></table>

### Type

[smsjobs.Status](/type/smsjobs.Status/)
