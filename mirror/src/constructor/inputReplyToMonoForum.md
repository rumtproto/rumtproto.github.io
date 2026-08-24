---
title: "inputReplyToMonoForum"
original: "https://core.telegram.org/constructor/inputReplyToMonoForum"
section: ref
description: "Used to send messages to a monoforum topic."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputReplyToMonoForum","url":"/constructor/inputReplyToMonoForum/"}]
layout: layout.njk
---

# inputReplyToMonoForum

Used to send messages to a [monoforum topic](/api/monoforum/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputReplyToMonoForum/" class="current_page_link">inputReplyToMonoForum</a>#69d66c45 monoforum_peer_id:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/InputReplyTo/">InputReplyTo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>monoforum_peer_id</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The topic ID.</td></tr></tbody></table>

### Type

[InputReplyTo](/type/InputReplyTo/)

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
