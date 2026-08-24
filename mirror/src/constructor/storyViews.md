---
title: "storyViews"
original: "https://core.telegram.org/constructor/storyViews"
section: ref
description: "Aggregated view and reaction information of a story."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"storyViews","url":"/constructor/storyViews/"}]
layout: layout.njk
---

# storyViews

Aggregated view and reaction information of a [story](/api/stories/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyViews/" class="current_page_link">storyViews</a>#8d595cd6 flags:<a href="/type/%23/">#</a> has_viewers:flags.1?true views_count:<a href="/type/int/">int</a> forwards_count:flags.2?<a href="/type/int/">int</a> reactions:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ReactionCount/">ReactionCount</a>&gt; reactions_count:flags.4?<a href="/type/int/">int</a> recent_viewers:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/StoryViews/">StoryViews</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>has_viewers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, indicates that the viewers list is currently viewable, and was not yet deleted because the story has expired while the user didn't have a <a href="/api/premium/">Premium</a> account.</td></tr><tr><td><strong>views_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>View counter of the story</td></tr><tr><td><strong>forwards_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Forward counter of the story</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ReactionCount/">ReactionCount</a>&gt;</td><td>All reactions sent to this story</td></tr><tr><td><strong>reactions_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Number of reactions added to the story</td></tr><tr><td><strong>recent_viewers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>User IDs of some recent viewers of the story</td></tr></tbody></table>

### Type

[StoryViews](/type/StoryViews/)

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
