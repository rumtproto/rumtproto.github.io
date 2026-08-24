---
title: "channels.deleteMessages"
original: "https://core.telegram.org/method/channels.deleteMessages"
section: ref
description: "Delete messages in a channel/supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.deleteMessages","url":"/method/channels.deleteMessages/"}]
layout: layout.njk
---

# channels.deleteMessages

Delete messages in a [channel/supergroup](/api/channel/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.affectedMessages/">messages.affectedMessages</a>#84d19185 pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedMessages/">messages.AffectedMessages</a>;
---functions---
<a href="/method/channels.deleteMessages/" class="current_page_link">channels.deleteMessages</a>#84c1fd4e channel:<a href="/type/InputChannel/">InputChannel</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.AffectedMessages/">messages.AffectedMessages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td><a href="/api/channel/">Channel/supergroup</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>IDs of messages to delete</td></tr></tbody></table>

### Result

[messages.AffectedMessages](/type/messages.AffectedMessages/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>420</td><td>FROZEN_METHOD_INVALID</td><td>The current account is <a href="/api/auth/#frozen-accounts">frozen</a>, and thus cannot execute the specified action.</td></tr><tr><td>403</td><td>MESSAGE_DELETE_FORBIDDEN</td><td>You can't delete one of the messages you tried to delete, most likely because it is a service message.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
