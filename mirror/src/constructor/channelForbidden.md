---
title: "channelForbidden"
original: "https://core.telegram.org/constructor/channelForbidden"
section: ref
description: "Indicates a channel/supergroup we can't access because we were banned, or for some other reason."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelForbidden","url":"/constructor/channelForbidden/"}]
layout: layout.njk
---

# channelForbidden

Indicates a channel/supergroup we can't access because we were banned, or for some other reason.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelForbidden/" class="current_page_link">channelForbidden</a>#17d493d5 flags:<a href="/type/%23/">#</a> broadcast:flags.5?true megagroup:flags.8?true monoforum:flags.10?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> until_date:flags.16?<a href="/type/int/">int</a> = <a href="/type/Chat/">Chat</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>broadcast</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Is this a channel</td></tr><tr><td><strong>megagroup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>Is this a supergroup</td></tr><tr><td><strong>monoforum</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>If set, this is a <a href="/api/monoforum/">monoforum »</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Channel ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title</td></tr><tr><td><strong>until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/type/int/">int</a></td><td>The ban is valid until the specified date</td></tr></tbody></table>

### Type

[Chat](/type/Chat/)

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
