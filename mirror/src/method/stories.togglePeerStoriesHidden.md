---
title: "stories.togglePeerStoriesHidden"
original: "https://core.telegram.org/method/stories.togglePeerStoriesHidden"
section: ref
description: "Hide the active stories of a user, preventing them from being displayed on the action bar on the homescreen, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.togglePeerStoriesHidden","url":"/method/stories.togglePeerStoriesHidden/"}]
layout: layout.njk
---

# stories.togglePeerStoriesHidden

Hide the active stories of a user, preventing them from being displayed on the action bar on the homescreen, see [here »](/api/stories/#hiding-stories-of-other-users) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/stories.togglePeerStoriesHidden/" class="current_page_link">stories.togglePeerStoriesHidden</a>#bd0415c4 peer:<a href="/type/InputPeer/">InputPeer</a> hidden:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer whose stories should be (un)hidden.</td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to hide or unhide stories.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
