---
title: "stats.getPollStats"
original: "https://core.telegram.org/method/stats.getPollStats"
section: ref
description: "Get statistics for a poll sent in a message."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stats.getPollStats","url":"/method/stats.getPollStats/"}]
layout: layout.njk
---

# stats.getPollStats

Get [statistics](/api/stats/#poll-statistics) for a poll sent in a message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="https://core.telegram.org/method/stats.getPollStats?layer=225">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to enable dark theme for graph colors</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer where the poll was sent</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the message containing the poll</td></tr></tbody></table>

### Result

[stats.PollStats](/type/stats.PollStats/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
