---
title: "messages.reportSpam"
original: "https://core.telegram.org/method/messages.reportSpam"
section: ref
description: "Report a new incoming chat for spam, if the peer settings of the chat allow us to do that"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reportSpam","url":"/method/messages.reportSpam/"}]
layout: layout.njk
---

# messages.reportSpam

Report a new incoming chat for spam, if the [peer settings](/constructor/peerSettings/) of the chat allow us to do that

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.reportSpam/" class="current_page_link">messages.reportSpam</a>#cf1592db peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer to report</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [peerSettings](/constructor/peerSettings/)

List of actions that are possible when interacting with this user, to be shown as suggested actions in the [chat action bar »](/api/action-bar/), see [here »](/api/action-bar/) for more info.
