---
title: "messages.deletePollAnswer"
original: "https://core.telegram.org/method/messages.deletePollAnswer"
section: ref
description: "Remove an answer option from an open-answer poll »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deletePollAnswer","url":"/method/messages.deletePollAnswer/"}]
layout: layout.njk
---

# messages.deletePollAnswer

Remove an answer option from an [open-answer poll »](/api/poll/#open-answer-polls)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 224. <a href="https://core.telegram.org/method/messages.deletePollAnswer?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer where the poll is located</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID of the poll</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>The <code>option</code> identifier of the answer to remove</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.
