---
title: "stats.getStoryStats"
original: "https://core.telegram.org/method/stats.getStoryStats"
section: ref
description: "Get statistics for a certain story."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stats.getStoryStats","url":"/method/stats.getStoryStats/"}]
layout: layout.njk
---

# stats.getStoryStats

Get [statistics](/api/stats/) for a certain [story](/api/stories/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stats.storyStats/">stats.storyStats</a>#50cd067c views_graph:<a href="/type/StatsGraph/">StatsGraph</a> reactions_by_emotion_graph:<a href="/type/StatsGraph/">StatsGraph</a> = <a href="/type/stats.StoryStats/">stats.StoryStats</a>;
---functions---
<a href="/method/stats.getStoryStats/" class="current_page_link">stats.getStoryStats</a>#374fef40 flags:<a href="/type/%23/">#</a> dark:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> = <a href="/type/stats.StoryStats/">stats.StoryStats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to enable the dark theme for graph colors</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer that posted the story</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Story ID</td></tr></tbody></table>

### Result

[stats.StoryStats](/type/stats.StoryStats/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>STORIES_NEVER_CREATED</td><td>This peer hasn't ever posted any stories.</td></tr></tbody></table>

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
