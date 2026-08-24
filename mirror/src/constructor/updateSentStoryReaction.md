---
title: "updateSentStoryReaction"
original: "https://core.telegram.org/constructor/updateSentStoryReaction"
section: ref
description: "Indicates we reacted to a story »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateSentStoryReaction","url":"/constructor/updateSentStoryReaction/"}]
layout: layout.njk
---

# updateSentStoryReaction

Indicates we [reacted to a story »](/api/stories/#reactions).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateSentStoryReaction/" class="current_page_link">updateSentStoryReaction</a>#7d627683 peer:<a href="/type/Peer/">Peer</a> story_id:<a href="/type/int/">int</a> reaction:<a href="/type/Reaction/">Reaction</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The peer that sent the story</td></tr><tr><td><strong>story_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the story we reacted to</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction/">Reaction</a></td><td>The reaction that was sent</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
