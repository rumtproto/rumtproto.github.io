---
title: "StoryViews"
original: "https://core.telegram.org/type/StoryViews"
section: ref
description: "Aggregated view and reaction information of a story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StoryViews","url":"/type/StoryViews/"}]
layout: layout.njk
---

# StoryViews

Aggregated view and reaction information of a [story](/api/stories/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyViews/">storyViews</a>#8d595cd6 flags:<a href="/type/%23/">#</a> has_viewers:flags.1?true views_count:<a href="/type/int/">int</a> forwards_count:flags.2?<a href="/type/int/">int</a> reactions:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ReactionCount/">ReactionCount</a>&gt; reactions_count:flags.4?<a href="/type/int/">int</a> recent_viewers:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/StoryViews/" class="current_page_link">StoryViews</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/storyViews/">storyViews</a></td><td>Aggregated view and reaction information of a <a href="/api/stories/">story</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
