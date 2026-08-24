---
title: "StoryItem"
original: "https://core.telegram.org/type/StoryItem"
section: ref
description: "Represents a Telegram Story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StoryItem","url":"/type/StoryItem/"}]
layout: layout.njk
---

# StoryItem

Represents a [Telegram Story](/api/stories/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyItemDeleted/">storyItemDeleted</a>#51e6ee4f id:<a href="/type/int/">int</a> = <a href="/type/StoryItem/" class="current_page_link">StoryItem</a>;
<a href="/constructor/storyItemSkipped/">storyItemSkipped</a>#ffadc913 flags:<a href="/type/%23/">#</a> close_friends:flags.8?true live:flags.9?true id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> expire_date:<a href="/type/int/">int</a> = <a href="/type/StoryItem/" class="current_page_link">StoryItem</a>;
<a href="/constructor/storyItem/">storyItem</a>#edf164f1 flags:<a href="/type/%23/">#</a> pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> from_id:flags.18?<a href="/type/Peer/">Peer</a> fwd_from:flags.17?<a href="/type/StoryFwdHeader/">StoryFwdHeader</a> expire_date:<a href="/type/int/">int</a> caption:flags.0?<a href="/type/string/">string</a> entities:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; media:<a href="/type/MessageMedia/">MessageMedia</a> media_areas:flags.14?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MediaArea/">MediaArea</a>&gt; privacy:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PrivacyRule/">PrivacyRule</a>&gt; views:flags.3?<a href="/type/StoryViews/">StoryViews</a> sent_reaction:flags.15?<a href="/type/Reaction/">Reaction</a> albums:flags.19?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/StoryItem/" class="current_page_link">StoryItem</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/storyItemDeleted/">storyItemDeleted</a></td><td>Represents a previously active story, that was deleted</td></tr><tr><td><a href="/constructor/storyItemSkipped/">storyItemSkipped</a></td><td>Represents an active story, whose full information was omitted for space and performance reasons; use <a href="/method/stories.getStoriesByID/">stories.getStoriesByID</a> to fetch full info about the skipped story when and if needed.</td></tr><tr><td><a href="/constructor/storyItem/">storyItem</a></td><td>Represents a <a href="/api/stories/">story</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
