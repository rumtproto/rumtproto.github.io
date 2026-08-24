---
title: "stories.getStoriesViews"
original: "https://core.telegram.org/method/stories.getStoriesViews"
section: ref
description: "Obtain info about the view count, forward count, reactions and recent viewers of one or more stories."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getStoriesViews","url":"/method/stories.getStoriesViews/"}]
layout: layout.njk
---

# stories.getStoriesViews

Obtain info about the view count, forward count, reactions and recent viewers of one or more [stories](/api/stories/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.storyViews/">stories.storyViews</a>#de9eed1d views:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryViews/">StoryViews</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stories.StoryViews/">stories.StoryViews</a>;
---functions---
<a href="/method/stories.getStoriesViews/" class="current_page_link">stories.getStoriesViews</a>#28e16cc8 peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/stories.StoryViews/">stories.StoryViews</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer whose stories should be fetched</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Story IDs</td></tr></tbody></table>

### Result

[stories.StoryViews](/type/stories.StoryViews/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>STORY_ID_EMPTY</td><td>You specified no story IDs.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
