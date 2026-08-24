---
title: "stories.canSendStory"
original: "https://core.telegram.org/method/stories.canSendStory"
section: ref
description: "Check whether we can post stories as the specified peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.canSendStory","url":"/method/stories.canSendStory/"}]
layout: layout.njk
---

# stories.canSendStory

Check whether we can post stories as the specified peer.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.canSendStoryCount/">stories.canSendStoryCount</a>#c387c04e count_remains:<a href="/type/int/">int</a> = <a href="/type/stories.CanSendStoryCount/">stories.CanSendStoryCount</a>;
---functions---
<a href="/method/stories.canSendStory/" class="current_page_link">stories.canSendStory</a>#30eb63f0 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/stories.CanSendStoryCount/">stories.CanSendStoryCount</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer from which we wish to post stories.</td></tr></tbody></table>

### Result

[stories.CanSendStoryCount](/type/stories.CanSendStoryCount/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOOSTS_REQUIRED</td><td>The specified channel must first be <a href="/api/boost/">boosted by its users</a> in order to perform this action.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr><tr><td>400</td><td>STORIES_TOO_MUCH</td><td>You have hit the maximum active stories limit as specified by the <a href="/api/config/#story-expiring-limit-default"><code>story_expiring_limit_*</code> client configuration parameters</a>: you should buy a <a href="/api/premium/">Premium</a> subscription, delete an active story, or wait for the oldest story to expire.</td></tr><tr><td>400</td><td>STORY_SEND_FLOOD_MONTHLY_%d</td><td>You've hit the monthly story limit as specified by the <a href="/api/config/#stories-sent-monthly-limit-default"><code>stories_sent_monthly_limit_*</code> client configuration parameters</a>: wait %d seconds before posting a new story.</td></tr><tr><td>400</td><td>STORY_SEND_FLOOD_WEEKLY_%d</td><td>You've hit the weekly story limit as specified by the <a href="/api/config/#stories-sent-weekly-limit-default"><code>stories_sent_weekly_limit_*</code> client configuration parameters</a>: wait for %d seconds before posting a new story.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
