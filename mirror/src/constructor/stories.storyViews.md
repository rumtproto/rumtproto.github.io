---
title: "stories.storyViews"
original: "https://core.telegram.org/constructor/stories.storyViews"
section: ref
description: "Reaction and view counters for a list of stories"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.storyViews","url":"/constructor/stories.storyViews/"}]
layout: layout.njk
---

# stories.storyViews

Reaction and view counters for a list of [stories](/api/stories/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.storyViews/" class="current_page_link">stories.storyViews</a>#de9eed1d views:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryViews/">StoryViews</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stories.StoryViews/">stories.StoryViews</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryViews/">StoryViews</a>&gt;</td><td>View date and reaction information of multiple stories</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[stories.StoryViews](/type/stories.StoryViews/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
