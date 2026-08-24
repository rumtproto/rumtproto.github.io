---
title: "storyFwdHeader"
original: "https://core.telegram.org/constructor/storyFwdHeader"
section: ref
description: "Contains info about the original poster of a reposted story."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"storyFwdHeader","url":"/constructor/storyFwdHeader/"}]
layout: layout.njk
---

# storyFwdHeader

Contains info about the original poster of a reposted story.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyFwdHeader/" class="current_page_link">storyFwdHeader</a>#b826e150 flags:<a href="/type/%23/">#</a> modified:flags.3?true from:flags.0?<a href="/type/Peer/">Peer</a> from_name:flags.1?<a href="/type/string/">string</a> story_id:flags.2?<a href="/type/int/">int</a> = <a href="/type/StoryFwdHeader/">StoryFwdHeader</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>modified</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether the story media was modified before reposting it (for example by overlaying a round video with a reaction).</td></tr><tr><td><strong>from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Peer/">Peer</a></td><td>Peer that originally posted the story; will be empty for stories forwarded from a user with forwards privacy enabled, in which case <code>from_name</code> will be set, instead.</td></tr><tr><td><strong>from_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Will be set for stories forwarded from a user with forwards privacy enabled, in which case <code>from</code> will also be empty.</td></tr><tr><td><strong>story_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>, contains the story ID</td></tr></tbody></table>

### Type

[StoryFwdHeader](/type/StoryFwdHeader/)
