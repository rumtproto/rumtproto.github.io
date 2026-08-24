---
title: "messages.readHistory"
original: "https://core.telegram.org/method/messages.readHistory"
section: ref
description: "Marks message history as read."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.readHistory","url":"/method/messages.readHistory/"}]
layout: layout.njk
---

# messages.readHistory

Marks message history as read.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.affectedMessages/">messages.affectedMessages</a>#84d19185 pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedMessages/">messages.AffectedMessages</a>;
---functions---
<a href="/method/messages.readHistory/" class="current_page_link">messages.readHistory</a>#e306d3a peer:<a href="/type/InputPeer/">InputPeer</a> max_id:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedMessages/">messages.AffectedMessages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Target user or group</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>If a positive value is passed, only messages with identifiers less than or equal to the given one will be read</td></tr></tbody></table>

### Result

[messages.AffectedMessages](/type/messages.AffectedMessages/)

### Only users can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
