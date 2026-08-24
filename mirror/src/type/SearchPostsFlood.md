---
title: "SearchPostsFlood"
original: "https://core.telegram.org/type/SearchPostsFlood"
section: ref
description: "Indicates if the specified global post search » requires payment."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SearchPostsFlood","url":"/type/SearchPostsFlood/"}]
layout: layout.njk
---

# SearchPostsFlood

Indicates if the specified [global post search »](/api/search/#posts-tab) requires payment.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/searchPostsFlood/">searchPostsFlood</a>#3e0b5b6a flags:<a href="/type/%23/">#</a> query_is_free:flags.0?true total_daily:<a href="/type/int/">int</a> remains:<a href="/type/int/">int</a> wait_till:flags.1?<a href="/type/int/">int</a> stars_amount:<a href="/type/long/">long</a> = <a href="/type/SearchPostsFlood/" class="current_page_link">SearchPostsFlood</a>;

---functions---

<a href="/method/channels.checkSearchPostsFlood/">channels.checkSearchPostsFlood</a>#22567115 flags:<a href="/type/%23/">#</a> query:flags.0?<a href="/type/string/">string</a> = <a href="/type/SearchPostsFlood/" class="current_page_link">SearchPostsFlood</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/searchPostsFlood/">searchPostsFlood</a></td><td>Indicates if the specified <a href="/api/search/#posts-tab">global post search »</a> requires payment.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.checkSearchPostsFlood/">channels.checkSearchPostsFlood</a></td><td>Check if the specified <a href="/api/search/#posts-tab">global post search »</a> requires payment.</td></tr></tbody></table>

### Related pages

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.
