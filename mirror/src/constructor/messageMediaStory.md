---
title: "messageMediaStory"
original: "https://core.telegram.org/constructor/messageMediaStory"
section: ref
description: "Represents a forwarded story or a story mention."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaStory","url":"/constructor/messageMediaStory/"}]
layout: layout.njk
---

# messageMediaStory

Represents a forwarded [story](/api/stories/) or a story mention.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaStory/" class="current_page_link">messageMediaStory</a>#68cb6283 flags:<a href="/type/%23/">#</a> via_mention:flags.1?true peer:<a href="/type/Peer/">Peer</a> id:<a href="/type/int/">int</a> story:flags.0?<a href="/type/StoryItem/">StoryItem</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>via_mention</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, indicates that this someone has mentioned us in this story (i.e. by tagging us in the description) or vice versa, we have mentioned the other peer (if the message is outgoing).</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer that posted the story.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Story ID</td></tr><tr><td><strong>story</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/StoryItem/">StoryItem</a></td><td>The story itself, if absent fetch it using <a href="/method/stories.getStoriesByID/">stories.getStoriesByID</a> and the <code>peer</code>/<code>id</code> parameters specified above.</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)

### Related pages

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Obtain full info about a set of [stories](/api/stories/) by their IDs.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
