---
title: "RecentStory"
original: "https://core.telegram.org/type/RecentStory"
section: ref
description: "Summary of a peer's active stories »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"RecentStory","url":"/type/RecentStory/"}]
layout: layout.njk
---

# RecentStory

Summary of a peer's [active stories »](/api/stories/#recent-story-summaries).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/recentStory/">recentStory</a>#711d692d flags:<a href="/type/%23/">#</a> live:flags.0?true max_id:flags.1?<a href="/type/int/">int</a> = <a href="/type/RecentStory/" class="current_page_link">RecentStory</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/recentStory/">recentStory</a></td><td>Summary of a peer's <a href="/api/stories/#recent-story-summaries">active stories »</a>, embedded in <a href="/constructor/user/">user</a>.<code>stories_max_id</code> and <a href="/constructor/channel/">channel</a>.<code>stories_max_id</code> and returned by <a href="/method/stories.getPeerMaxIDs/">stories.getPeerMaxIDs</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
