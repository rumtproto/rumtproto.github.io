---
title: "messages.getSponsoredMessages"
original: "https://core.telegram.org/method/messages.getSponsoredMessages"
section: ref
description: "Get a list of sponsored messages for a peer, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSponsoredMessages","url":"/method/messages.getSponsoredMessages/"}]
layout: layout.njk
---

# messages.getSponsoredMessages

Get a list of [sponsored messages for a peer, see here »](/api/sponsored-messages/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.sponsoredMessages/">messages.sponsoredMessages</a>#ffda656d flags:<a href="/type/%23/">#</a> posts_between:flags.0?<a href="/type/int/">int</a> start_delay:flags.1?<a href="/type/int/">int</a> between_delay:flags.2?<a href="/type/int/">int</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SponsoredMessage/">SponsoredMessage</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SponsoredMessages/">messages.SponsoredMessages</a>;
<a href="/constructor/messages.sponsoredMessagesEmpty/">messages.sponsoredMessagesEmpty</a>#1839490f = <a href="/type/messages.SponsoredMessages/">messages.SponsoredMessages</a>;
---functions---
<a href="/method/messages.getSponsoredMessages/" class="current_page_link">messages.getSponsoredMessages</a>#3d6ce850 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:flags.0?<a href="/type/int/">int</a> = <a href="/type/messages.SponsoredMessages/">messages.SponsoredMessages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The currently open channel/bot.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Must be set when fetching <a href="/api/sponsored-messages/#getting-sponsored-video-advertisements">sponsored messages to show on channel videos »</a>.</td></tr></tbody></table>

### Result

[messages.SponsoredMessages](/type/messages.SponsoredMessages/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>

### Related pages

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.
