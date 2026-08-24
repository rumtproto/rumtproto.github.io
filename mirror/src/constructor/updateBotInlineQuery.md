---
title: "updateBotInlineQuery"
original: "https://core.telegram.org/constructor/updateBotInlineQuery"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotInlineQuery","url":"/constructor/updateBotInlineQuery/"}]
layout: layout.njk
---

# updateBotInlineQuery

An incoming inline query

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotInlineQuery/" class="current_page_link">updateBotInlineQuery</a>#496f379c flags:<a href="/type/%23/">#</a> query_id:<a href="/type/long/">long</a> user_id:<a href="/type/long/">long</a> query:<a href="/type/string/">string</a> geo:flags.0?<a href="/type/GeoPoint/">GeoPoint</a> peer_type:flags.1?<a href="/type/InlineQueryPeerType/">InlineQueryPeerType</a> offset:<a href="/type/string/">string</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Query ID</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User that sent the query</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Text of query</td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/GeoPoint/">GeoPoint</a></td><td>Attached geolocation</td></tr><tr><td><strong>peer_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InlineQueryPeerType/">InlineQueryPeerType</a></td><td>Type of the chat from which the inline query was sent.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Offset to navigate through results</td></tr></tbody></table>

### Type

[Update](/type/Update/)
