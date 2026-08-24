---
title: "stories.AllStories"
original: "https://core.telegram.org/type/stories.AllStories"
section: ref
description: "Full list of active (or active and hidden) stories."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.AllStories","url":"/type/stories.AllStories/"}]
layout: layout.njk
---

# stories.AllStories

Full list of active (or active and hidden) [stories](/api/stories/#watching-stories).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.allStoriesNotModified/">stories.allStoriesNotModified</a>#1158fe3e flags:<a href="/type/%23/">#</a> state:<a href="/type/string/">string</a> stealth_mode:<a href="/type/StoriesStealthMode/">StoriesStealthMode</a> = <a href="/type/stories.AllStories/" class="current_page_link">stories.AllStories</a>;
<a href="/constructor/stories.allStories/">stories.allStories</a>#6efc5e81 flags:<a href="/type/%23/">#</a> has_more:flags.0?true count:<a href="/type/int/">int</a> state:<a href="/type/string/">string</a> peer_stories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PeerStories/">PeerStories</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; stealth_mode:<a href="/type/StoriesStealthMode/">StoriesStealthMode</a> = <a href="/type/stories.AllStories/" class="current_page_link">stories.AllStories</a>;

---functions---

<a href="/method/stories.getAllStories/">stories.getAllStories</a>#eeb0d625 flags:<a href="/type/%23/">#</a> next:flags.1?true hidden:flags.2?true state:flags.0?<a href="/type/string/">string</a> = <a href="/type/stories.AllStories/" class="current_page_link">stories.AllStories</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.allStoriesNotModified/">stories.allStoriesNotModified</a></td><td>The list of active (or active and hidden) <a href="/api/stories/#watching-stories">stories</a> has not changed.</td></tr><tr><td><a href="/constructor/stories.allStories/">stories.allStories</a></td><td>Full list of active (or active and hidden) <a href="/api/stories/#watching-stories">stories</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getAllStories/">stories.getAllStories</a></td><td>Fetch the List of active (or active and hidden) stories, see <a href="/api/stories/#watching-stories">here »</a> for more info on watching stories.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
