---
title: "messages.deleteParticipantReactions"
original: "https://core.telegram.org/method/messages.deleteParticipantReactions"
section: ref
description: "As an admin, remove all of a specific participant's reactions from every message in a group or channel."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deleteParticipantReactions","url":"/method/messages.deleteParticipantReactions/"}]
layout: layout.njk
---

# messages.deleteParticipantReactions

As an admin, remove all of a specific participant's [reactions](/api/reactions/) from every message in a group or channel.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="/method/messages.deleteParticipantReactions/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The group or channel where the participant's reactions should be removed</td></tr><tr><td><strong>participant</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The participant whose reactions should be removed</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
