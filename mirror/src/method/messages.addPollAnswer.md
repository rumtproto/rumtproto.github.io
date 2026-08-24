---
title: "messages.addPollAnswer"
original: "https://core.telegram.org/method/messages.addPollAnswer"
section: ref
description: "Add an answer option to an open-answer poll »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.addPollAnswer","url":"/method/messages.addPollAnswer/"}]
layout: layout.njk
---

# messages.addPollAnswer

Add an answer option to an [open-answer poll »](/api/poll/#open-answer-polls)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 224. <a href="https://core.telegram.org/method/messages.addPollAnswer?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer where the poll is located</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID of the poll</td></tr><tr><td><strong>answer</strong></td><td style="text-align: center;"><a href="/type/PollAnswer/">PollAnswer</a></td><td>The new answer option to add, use <a href="/constructor/inputPollAnswer/">inputPollAnswer</a></td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [inputPollAnswer](/constructor/inputPollAnswer/)

An answer option to add to an [open-answer poll »](/api/poll/#open-answer-polls)

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.
