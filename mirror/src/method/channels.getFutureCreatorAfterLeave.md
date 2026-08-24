---
title: "channels.getFutureCreatorAfterLeave"
original: "https://core.telegram.org/method/channels.getFutureCreatorAfterLeave"
section: ref
description: "Group/channel owners only: returns the ID of the user that will become the new owner of the group if we decide to leave the group, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getFutureCreatorAfterLeave","url":"/method/channels.getFutureCreatorAfterLeave/"}]
layout: layout.njk
---

# channels.getFutureCreatorAfterLeave

Group/channel owners only: returns the ID of the user that will become the new owner of the group if we decide to leave the group, see [here »](/api/channel/#leaving-groups-channels) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 223. <a href="https://core.telegram.org/method/channels.getFutureCreatorAfterLeave?layer=223">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>The basic supergroup/channel we're about to leave.</td></tr></tbody></table>

### Result

[User](/type/User/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr></tbody></table>
