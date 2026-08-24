---
title: "stories.Stories"
original: "https://core.telegram.org/type/stories.Stories"
section: ref
description: "Telegram users and channels can easily post and view stories through the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.Stories","url":"/type/stories.Stories/"}]
layout: layout.njk
---

# stories.Stories

List of [stories](/api/stories/#pinned-or-archived-stories)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.stories/">stories.stories</a>#63c3dd0a flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> stories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryItem/">StoryItem</a>&gt; pinned_to_top:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stories.Stories/" class="current_page_link">stories.Stories</a>;

---functions---

<a href="/method/stories.getPinnedStories/">stories.getPinnedStories</a>#5821a5dc peer:<a href="/type/InputPeer/">InputPeer</a> offset_id:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/stories.Stories/" class="current_page_link">stories.Stories</a>;
<a href="/method/stories.getStoriesArchive/">stories.getStoriesArchive</a>#b4352016 peer:<a href="/type/InputPeer/">InputPeer</a> offset_id:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/stories.Stories/" class="current_page_link">stories.Stories</a>;
<a href="/method/stories.getStoriesByID/">stories.getStoriesByID</a>#5774ca74 peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/stories.Stories/" class="current_page_link">stories.Stories</a>;
<a href="/method/stories.getAlbumStories/">stories.getAlbumStories</a>#ac806d61 peer:<a href="/type/InputPeer/">InputPeer</a> album_id:<a href="/type/int/">int</a> offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/stories.Stories/" class="current_page_link">stories.Stories</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.stories/">stories.stories</a></td><td>List of <a href="/api/stories/#pinned-or-archived-stories">stories</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getPinnedStories/">stories.getPinnedStories</a></td><td>Fetch the <a href="/api/stories/#pinned-or-archived-stories">stories</a> pinned on a peer's profile.</td></tr><tr><td><a href="/method/stories.getStoriesArchive/">stories.getStoriesArchive</a></td><td>Fetch the <a href="/api/stories/#pinned-or-archived-stories">story archive »</a> of a peer we control.</td></tr><tr><td><a href="/method/stories.getStoriesByID/">stories.getStoriesByID</a></td><td>Obtain full info about a set of <a href="/api/stories/">stories</a> by their IDs.</td></tr><tr><td><a href="/method/stories.getAlbumStories/">stories.getAlbumStories</a></td><td>Get stories in a <a href="/api/stories/#story-albums">story album »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
