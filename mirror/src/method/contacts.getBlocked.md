---
title: "contacts.getBlocked"
original: "https://core.telegram.org/method/contacts.getBlocked"
section: ref
description: "Returns the list of blocked users."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.getBlocked","url":"/method/contacts.getBlocked/"}]
layout: layout.njk
---

# contacts.getBlocked

Returns the list of blocked users.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.blocked/">contacts.blocked</a>#ade1591 blocked:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PeerBlocked/">PeerBlocked</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.Blocked/">contacts.Blocked</a>;
<a href="/constructor/contacts.blockedSlice/">contacts.blockedSlice</a>#e1664194 count:<a href="/type/int/">int</a> blocked:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PeerBlocked/">PeerBlocked</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.Blocked/">contacts.Blocked</a>;
---functions---
<a href="/method/contacts.getBlocked/" class="current_page_link">contacts.getBlocked</a>#9a868f80 flags:<a href="/type/%23/">#</a> my_stories_from:flags.0?true offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/contacts.Blocked/">contacts.Blocked</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to fetch the story blocklist; if not set, will fetch the main blocklist. See <a href="/api/block/">here »</a> for differences between the two.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The number of list elements to be skipped</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The number of list elements to be returned</td></tr></tbody></table>

### Result

[contacts.Blocked](/type/contacts.Blocked/)

### Only users can use this method

### Related pages

#### [Blocked users](/api/block/)

Working with the blocklist.
