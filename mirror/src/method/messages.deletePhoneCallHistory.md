---
title: "messages.deletePhoneCallHistory"
original: "https://core.telegram.org/method/messages.deletePhoneCallHistory"
section: ref
description: "Delete the entire phone call history."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deletePhoneCallHistory","url":"/method/messages.deletePhoneCallHistory/"}]
layout: layout.njk
---

# messages.deletePhoneCallHistory

Delete the entire phone call history.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.affectedFoundMessages/">messages.affectedFoundMessages</a>#ef8d3e6c pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> offset:<a href="/type/int/">int</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.AffectedFoundMessages/">messages.AffectedFoundMessages</a>;
---functions---
<a href="/method/messages.deletePhoneCallHistory/" class="current_page_link">messages.deletePhoneCallHistory</a>#f9cbe409 flags:<a href="/type/%23/">#</a> revoke:flags.0?true = <a href="/type/messages.AffectedFoundMessages/">messages.AffectedFoundMessages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>revoke</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to remove phone call history for participants as well</td></tr></tbody></table>

### Result

[messages.AffectedFoundMessages](/type/messages.AffectedFoundMessages/)

### Only users can use this method
