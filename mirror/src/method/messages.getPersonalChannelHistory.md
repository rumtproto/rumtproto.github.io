---
title: "messages.getPersonalChannelHistory"
original: "https://core.telegram.org/method/messages.getPersonalChannelHistory"
section: ref
description: "Fetch the message history of a user's personal channel »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getPersonalChannelHistory","url":"/method/messages.getPersonalChannelHistory/"}]
layout: layout.njk
---

# messages.getPersonalChannelHistory

Fetch the message history of a user's [personal channel »](/api/profile/#personal-channel).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="https://core.telegram.org/method/messages.getPersonalChannelHistory?layer=225">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user whose personal channel history to fetch</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>If a positive value was transferred, the method will return only messages with IDs less than <strong>max_id</strong></td></tr><tr><td><strong>min_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>If a positive value was transferred, the method will return only messages with IDs more than <strong>min_id</strong></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/">Result hash</a></td></tr></tbody></table>

### Result

[messages.Messages](/type/messages.Messages/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
