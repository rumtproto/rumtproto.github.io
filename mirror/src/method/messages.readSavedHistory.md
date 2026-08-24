---
title: "messages.readSavedHistory"
original: "https://core.telegram.org/method/messages.readSavedHistory"
section: ref
description: "Mark messages as read in a monoforum topic »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.readSavedHistory","url":"/method/messages.readSavedHistory/"}]
layout: layout.njk
---

# messages.readSavedHistory

Mark messages as read in a [monoforum topic »](/api/monoforum/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.readSavedHistory/" class="current_page_link">messages.readSavedHistory</a>#ba4a3b5b parent_peer:<a href="/type/InputPeer/">InputPeer</a> peer:<a href="/type/InputPeer/">InputPeer</a> max_id:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>ID of the monoforum group.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>ID of the topic.</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>If a positive value is passed, only messages with identifiers less than or equal to the given one will be read.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>PARENT_PEER_INVALID</td><td>The specified <code>parent_peer</code> is invalid.</td></tr></tbody></table>

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
