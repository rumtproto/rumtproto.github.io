---
title: "publicForwardStory"
original: "https://core.telegram.org/constructor/publicForwardStory"
section: ref
description: "Contains info about a forward of a story as a repost by a public channel."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"publicForwardStory","url":"/constructor/publicForwardStory/"}]
layout: layout.njk
---

# publicForwardStory

Contains info about a forward of a [story](/api/stories/) as a repost by a public channel.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/publicForwardStory/" class="current_page_link">publicForwardStory</a>#edf3add0 peer:<a href="/type/Peer/">Peer</a> story:<a href="/type/StoryItem/">StoryItem</a> = <a href="/type/PublicForward/">PublicForward</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The channel that reposted the story.</td></tr><tr><td><strong>story</strong></td><td style="text-align: center;"><a href="/type/StoryItem/">StoryItem</a></td><td>The reposted story (may be different from the original story).</td></tr></tbody></table>

### Type

[PublicForward](/type/PublicForward/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
