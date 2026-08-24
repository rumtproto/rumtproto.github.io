---
title: "stories.allStories"
original: "https://core.telegram.org/constructor/stories.allStories"
section: ref
description: "Full list of active (or active and hidden) stories."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.allStories","url":"/constructor/stories.allStories/"}]
layout: layout.njk
---

# stories.allStories

Full list of active (or active and hidden) [stories](/api/stories/#watching-stories).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.allStories/" class="current_page_link">stories.allStories</a>#6efc5e81 flags:<a href="/type/%23/">#</a> has_more:flags.0?true count:<a href="/type/int/">int</a> state:<a href="/type/string/">string</a> peer_stories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PeerStories/">PeerStories</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; stealth_mode:<a href="/type/StoriesStealthMode/">StoriesStealthMode</a> = <a href="/type/stories.AllStories/">stories.AllStories</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>has_more</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether more results can be fetched as <a href="/api/stories/#watching-stories">described here »</a>.</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of active (or active and hidden) stories</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>State to use for pagination</td></tr><tr><td><strong>peer_stories</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PeerStories/">PeerStories</a>&gt;</td><td>Stories</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr><tr><td><strong>stealth_mode</strong></td><td style="text-align: center;"><a href="/type/StoriesStealthMode/">StoriesStealthMode</a></td><td>Current <a href="/api/stories/#stealth-mode">stealth mode</a> information</td></tr></tbody></table>

### Type

[stories.AllStories](/type/stories.AllStories/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
