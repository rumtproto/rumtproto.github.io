---
title: "StoryReaction"
original: "https://core.telegram.org/type/StoryReaction"
section: ref
description: "How a certain peer reacted to or interacted with a story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StoryReaction","url":"/type/StoryReaction/"}]
layout: layout.njk
---

# StoryReaction

How a certain peer reacted to or interacted with a story

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyReaction/">storyReaction</a>#6090d6d5 peer_id:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> reaction:<a href="/type/Reaction/">Reaction</a> = <a href="/type/StoryReaction/" class="current_page_link">StoryReaction</a>;
<a href="/constructor/storyReactionPublicForward/">storyReactionPublicForward</a>#bbab2643 message:<a href="/type/Message/">Message</a> = <a href="/type/StoryReaction/" class="current_page_link">StoryReaction</a>;
<a href="/constructor/storyReactionPublicRepost/">storyReactionPublicRepost</a>#cfcd0f13 peer_id:<a href="/type/Peer/">Peer</a> story:<a href="/type/StoryItem/">StoryItem</a> = <a href="/type/StoryReaction/" class="current_page_link">StoryReaction</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/storyReaction/">storyReaction</a></td><td>How a certain peer reacted to a story</td></tr><tr><td><a href="/constructor/storyReactionPublicForward/">storyReactionPublicForward</a></td><td>A certain peer has forwarded the story as a message to a public chat or channel.</td></tr><tr><td><a href="/constructor/storyReactionPublicRepost/">storyReactionPublicRepost</a></td><td>A certain peer has reposted the story.</td></tr></tbody></table>
