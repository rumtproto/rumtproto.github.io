---
title: "stories.getAllStories"
original: "https://core.telegram.org/method/stories.getAllStories"
section: ref
description: "Fetch the List of active (or active and hidden) stories, see here » for more info on watching stories."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getAllStories","url":"/method/stories.getAllStories/"}]
layout: layout.njk
---

# stories.getAllStories

Fetch the List of active (or active and hidden) stories, see [here »](/api/stories/#watching-stories) for more info on watching stories.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.allStoriesNotModified/">stories.allStoriesNotModified</a>#1158fe3e flags:<a href="/type/%23/">#</a> state:<a href="/type/string/">string</a> stealth_mode:<a href="/type/StoriesStealthMode/">StoriesStealthMode</a> = <a href="/type/stories.AllStories/">stories.AllStories</a>;
<a href="/constructor/stories.allStories/">stories.allStories</a>#6efc5e81 flags:<a href="/type/%23/">#</a> has_more:flags.0?true count:<a href="/type/int/">int</a> state:<a href="/type/string/">string</a> peer_stories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PeerStories/">PeerStories</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; stealth_mode:<a href="/type/StoriesStealthMode/">StoriesStealthMode</a> = <a href="/type/stories.AllStories/">stories.AllStories</a>;
---functions---
<a href="/method/stories.getAllStories/" class="current_page_link">stories.getAllStories</a>#eeb0d625 flags:<a href="/type/%23/">#</a> next:flags.1?true hidden:flags.2?true state:flags.0?<a href="/type/string/">string</a> = <a href="/type/stories.AllStories/">stories.AllStories</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>next</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If <code>next</code> and <code>state</code> are both set, uses the passed <code>state</code> to paginate to the next results; if neither <code>state</code> nor <code>next</code> are set, fetches the initial page; if <code>state</code> is set and <code>next</code> is not set, check for changes in the active/hidden peerset, see <a href="/api/stories/#watching-stories">here »</a> for more info on the full flow.</td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>If set, fetches the hidden active story list, otherwise fetches the active story list, see <a href="/api/stories/#watching-stories">here »</a> for more info on the full flow.</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>If <code>next</code> and <code>state</code> are both set, uses the passed <code>state</code> to paginate to the next results; if neither <code>state</code> nor <code>next</code> are set, fetches the initial page; if <code>state</code> is set and <code>next</code> is not set, check for changes in the active/hidden peerset, see <a href="/api/stories/#watching-stories">here »</a> for more info on the full flow.</td></tr></tbody></table>

### Result

[stories.AllStories](/type/stories.AllStories/)

### Only users can use this method

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
