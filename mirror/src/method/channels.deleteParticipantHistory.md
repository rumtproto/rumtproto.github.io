---
title: "channels.deleteParticipantHistory"
original: "https://core.telegram.org/method/channels.deleteParticipantHistory"
section: ref
description: "Delete all messages sent by a specific participant of a given supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.deleteParticipantHistory","url":"/method/channels.deleteParticipantHistory/"}]
layout: layout.njk
---

# channels.deleteParticipantHistory

Delete all messages sent by a specific participant of a given supergroup

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.affectedHistory/">messages.affectedHistory</a>#b45c69d1 pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> offset:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedHistory/">messages.AffectedHistory</a>;
---functions---
<a href="/method/channels.deleteParticipantHistory/" class="current_page_link">channels.deleteParticipantHistory</a>#367544db channel:<a href="/type/InputChannel/">InputChannel</a> participant:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/messages.AffectedHistory/">messages.AffectedHistory</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Supergroup</td></tr><tr><td><strong>participant</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The participant whose messages should be deleted</td></tr></tbody></table>

### Result

[messages.AffectedHistory](/type/messages.AffectedHistory/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PARTICIPANT_ID_INVALID</td><td>The specified participant ID is invalid.</td></tr></tbody></table>
