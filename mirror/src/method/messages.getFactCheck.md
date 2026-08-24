---
title: "messages.getFactCheck"
original: "https://core.telegram.org/method/messages.getFactCheck"
section: ref
description: "Fetch one or more factchecks, see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getFactCheck","url":"/method/messages.getFactCheck/"}]
layout: layout.njk
---

# messages.getFactCheck

Fetch one or more [factchecks, see here »](/api/factcheck/) for the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/messages.getFactCheck/" class="current_page_link">messages.getFactCheck</a>#b9cdc5ee peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FactCheck/">FactCheck</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer where the messages were sent.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Messages that have associated <a href="/constructor/factCheck/">factCheck</a> constructors with the <code>need_check</code> flag set.</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[FactCheck](/type/FactCheck/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [factCheck](/constructor/factCheck/)

Represents a [fact-check »](/api/factcheck/) created by an independent fact-checker.

#### [Fact checks](/api/factcheck/)

Telegram clients support displaying fact-checks added to messages by independent fact-checkers.
