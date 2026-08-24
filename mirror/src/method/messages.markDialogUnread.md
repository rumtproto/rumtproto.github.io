---
title: "messages.markDialogUnread"
original: "https://core.telegram.org/method/messages.markDialogUnread"
section: ref
description: "Manually mark dialog as unread"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.markDialogUnread","url":"/method/messages.markDialogUnread/"}]
layout: layout.njk
---

# messages.markDialogUnread

Manually mark dialog as unread

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.markDialogUnread/" class="current_page_link">messages.markDialogUnread</a>#8c5006f8 flags:<a href="/type/%23/">#</a> unread:flags.0?true parent_peer:flags.1?<a href="/type/InputPeer/">InputPeer</a> peer:<a href="/type/InputDialogPeer/">InputDialogPeer</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>unread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Mark as unread/read</td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputPeer/">InputPeer</a></td><td>If set, must be equal to the ID of a <a href="/api/monoforum/">monoforum</a>, and will affect the monoforum topic passed in <code>peer</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputDialogPeer/">InputDialogPeer</a></td><td>Dialog</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
