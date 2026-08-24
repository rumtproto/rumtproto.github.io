---
title: "stats.getMessageStats"
original: "https://core.telegram.org/method/stats.getMessageStats"
section: ref
description: "Telegram offers detailed channel statistics for channels and supergroups."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stats.getMessageStats","url":"/method/stats.getMessageStats/"}]
layout: layout.njk
---

# stats.getMessageStats

Get [message statistics](/api/stats/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stats.messageStats/">stats.messageStats</a>#7fe91c14 views_graph:<a href="/type/StatsGraph/">StatsGraph</a> reactions_by_emotion_graph:<a href="/type/StatsGraph/">StatsGraph</a> = <a href="/type/stats.MessageStats/">stats.MessageStats</a>;
---functions---
<a href="/method/stats.getMessageStats/" class="current_page_link">stats.getMessageStats</a>#b6e0a3f5 flags:<a href="/type/%23/">#</a> dark:flags.0?true channel:<a href="/type/InputChannel/">InputChannel</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/stats.MessageStats/">stats.MessageStats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to enable dark theme for graph colors</td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Channel ID</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr></tbody></table>

### Result

[stats.MessageStats](/type/stats.MessageStats/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
