---
title: "StoryView"
original: "https://core.telegram.org/type/StoryView"
section: ref
description: "Story view date and reaction information"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StoryView","url":"/type/StoryView/"}]
layout: layout.njk
---

# StoryView

[Story](/api/stories/) view date and reaction information

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyView/">storyView</a>#b0bdeac5 flags:<a href="/type/%23/">#</a> blocked:flags.0?true blocked_my_stories_from:flags.1?true user_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> reaction:flags.2?<a href="/type/Reaction/">Reaction</a> = <a href="/type/StoryView/" class="current_page_link">StoryView</a>;
<a href="/constructor/storyViewPublicForward/">storyViewPublicForward</a>#9083670b flags:<a href="/type/%23/">#</a> blocked:flags.0?true blocked_my_stories_from:flags.1?true message:<a href="/type/Message/">Message</a> = <a href="/type/StoryView/" class="current_page_link">StoryView</a>;
<a href="/constructor/storyViewPublicRepost/">storyViewPublicRepost</a>#bd74cf49 flags:<a href="/type/%23/">#</a> blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:<a href="/type/Peer/">Peer</a> story:<a href="/type/StoryItem/">StoryItem</a> = <a href="/type/StoryView/" class="current_page_link">StoryView</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/storyView/">storyView</a></td><td><a href="/api/stories/">Story</a> view date and reaction information</td></tr><tr><td><a href="/constructor/storyViewPublicForward/">storyViewPublicForward</a></td><td>A certain peer has forwarded the story as a message to a public chat or channel.</td></tr><tr><td><a href="/constructor/storyViewPublicRepost/">storyViewPublicRepost</a></td><td>A certain peer has reposted the story.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
