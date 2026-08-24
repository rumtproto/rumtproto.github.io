---
title: "searchPostsFlood"
original: "https://core.telegram.org/constructor/searchPostsFlood"
section: ref
description: "Indicates if the specified global post search » requires payment."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"searchPostsFlood","url":"/constructor/searchPostsFlood/"}]
layout: layout.njk
---

# searchPostsFlood

Indicates if the specified [global post search »](/api/search/#posts-tab) requires payment.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/searchPostsFlood/" class="current_page_link">searchPostsFlood</a>#3e0b5b6a flags:<a href="/type/%23/">#</a> query_is_free:flags.0?true total_daily:<a href="/type/int/">int</a> remains:<a href="/type/int/">int</a> wait_till:flags.1?<a href="/type/int/">int</a> stars_amount:<a href="/type/long/">long</a> = <a href="/type/SearchPostsFlood/">SearchPostsFlood</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>query_is_free</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>The specified query is free (and it <strong>will not use up free search slots</strong>).</td></tr><tr><td><strong>total_daily</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of daily free search slots.</td></tr><tr><td><strong>remains</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Remaining number of free search slots.</td></tr><tr><td><strong>wait_till</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>If there are no more search slots, specifies the unixtime when more search slots will be available.</td></tr><tr><td><strong>stars_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The number of <a href="/api/stars/">Telegram Stars</a> to pay for each non-free search.</td></tr></tbody></table>

### Type

[SearchPostsFlood](/type/SearchPostsFlood/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.
