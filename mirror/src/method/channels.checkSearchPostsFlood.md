---
title: "channels.checkSearchPostsFlood"
original: "https://core.telegram.org/method/channels.checkSearchPostsFlood"
section: ref
description: "Check if the specified global post search » requires payment."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.checkSearchPostsFlood","url":"/method/channels.checkSearchPostsFlood/"}]
layout: layout.njk
---

# channels.checkSearchPostsFlood

Check if the specified [global post search »](/api/search/#posts-tab) requires payment.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/searchPostsFlood/">searchPostsFlood</a>#3e0b5b6a flags:<a href="/type/%23/">#</a> query_is_free:flags.0?true total_daily:<a href="/type/int/">int</a> remains:<a href="/type/int/">int</a> wait_till:flags.1?<a href="/type/int/">int</a> stars_amount:<a href="/type/long/">long</a> = <a href="/type/SearchPostsFlood/">SearchPostsFlood</a>;
---functions---
<a href="/method/channels.checkSearchPostsFlood/" class="current_page_link">channels.checkSearchPostsFlood</a>#22567115 flags:<a href="/type/%23/">#</a> query:flags.0?<a href="/type/string/">string</a> = <a href="/type/SearchPostsFlood/">SearchPostsFlood</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>The query.</td></tr></tbody></table>

### Result

[SearchPostsFlood](/type/SearchPostsFlood/)

### Only users can use this method

### Related pages

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.
