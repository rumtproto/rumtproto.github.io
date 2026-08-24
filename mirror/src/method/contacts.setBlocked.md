---
title: "contacts.setBlocked"
original: "https://core.telegram.org/method/contacts.setBlocked"
section: ref
description: "Replace the contents of an entire blocklist, see here for more info »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.setBlocked","url":"/method/contacts.setBlocked/"}]
layout: layout.njk
---

# contacts.setBlocked

Replace the contents of an entire [blocklist, see here for more info »](/api/block/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/contacts.setBlocked/" class="current_page_link">contacts.setBlocked</a>#94c65c76 flags:<a href="/type/%23/">#</a> my_stories_from:flags.0?true id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; limit:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to edit the story blocklist; if not set, will edit the main blocklist. See <a href="/api/block/">here »</a> for differences between the two.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt;</td><td>Full content of the blocklist.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Blocked users](/api/block/)

Working with the blocklist.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
