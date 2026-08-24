---
title: "channels.exportMessageLink"
original: "https://core.telegram.org/method/channels.exportMessageLink"
section: ref
description: "Get link and embed info of a message in a channel/supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.exportMessageLink","url":"/method/channels.exportMessageLink/"}]
layout: layout.njk
---

# channels.exportMessageLink

Get link and embed info of a message in a [channel/supergroup](/api/channel/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/exportedMessageLink/">exportedMessageLink</a>#5dab1af4 link:<a href="/type/string/">string</a> html:<a href="/type/string/">string</a> = <a href="/type/ExportedMessageLink/">ExportedMessageLink</a>;
---functions---
<a href="/method/channels.exportMessageLink/" class="current_page_link">channels.exportMessageLink</a>#e63fadeb flags:<a href="/type/%23/">#</a> grouped:flags.0?true thread:flags.1?true channel:<a href="/type/InputChannel/">InputChannel</a> id:<a href="/type/int/">int</a> = <a href="/type/ExportedMessageLink/">ExportedMessageLink</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>grouped</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to include other grouped media (for albums)</td></tr><tr><td><strong>thread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether to also include a thread ID, if available, inside of the link</td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Channel</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr></tbody></table>

### Result

[ExportedMessageLink](/type/ExportedMessageLink/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
