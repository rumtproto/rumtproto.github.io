---
title: "channels.getForumTopicsByID"
original: "https://core.telegram.org/method/channels.getForumTopicsByID"
section: ref
description: "Get forum topics by their ID"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getForumTopicsByID","url":"/method/channels.getForumTopicsByID/"}]
layout: layout.njk
---

# channels.getForumTopicsByID

Get forum topics by their ID

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 216. <a href="https://core.telegram.org/method/channels.getForumTopicsByID?layer=216">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Forum</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Topic IDs</td></tr></tbody></table>

### Result

[messages.ForumTopics](/type/messages.ForumTopics/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_FORUM_MISSING</td><td>This supergroup is not a forum.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>TOPICS_EMPTY</td><td>You specified no topic IDs.</td></tr></tbody></table>
