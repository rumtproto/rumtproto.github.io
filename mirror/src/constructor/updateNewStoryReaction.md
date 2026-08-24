---
title: "updateNewStoryReaction"
original: "https://core.telegram.org/constructor/updateNewStoryReaction"
section: ref
description: "Represents a new reaction to a story."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateNewStoryReaction","url":"/constructor/updateNewStoryReaction/"}]
layout: layout.njk
---

# updateNewStoryReaction

Represents a new [reaction to a story](/api/reactions/#notifications-about-reactions).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateNewStoryReaction/" class="current_page_link">updateNewStoryReaction</a>#1824e40b story_id:<a href="/type/int/">int</a> peer:<a href="/type/Peer/">Peer</a> reaction:<a href="/type/Reaction/">Reaction</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>story_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/stories/">Story ID</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The peer where the story was posted.</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction/">Reaction</a></td><td>The <a href="/api/reactions/">reaction</a>.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
