---
title: "storyView"
original: "https://core.telegram.org/constructor/storyView"
section: ref
description: "Story view date and reaction information"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"storyView","url":"/constructor/storyView/"}]
layout: layout.njk
---

# storyView

[Story](/api/stories/) view date and reaction information

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyView/" class="current_page_link">storyView</a>#b0bdeac5 flags:<a href="/type/%23/">#</a> blocked:flags.0?true blocked_my_stories_from:flags.1?true user_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> reaction:flags.2?<a href="/type/Reaction/">Reaction</a> = <a href="/type/StoryView/">StoryView</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether we have <a href="/api/block/">completely blocked</a> this user, including from viewing more of our stories.</td></tr><tr><td><strong>blocked_my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether we have <a href="/api/block/">blocked</a> this user from viewing more of our stories.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The user that viewed the story</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When did the user view the story</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Reaction/">Reaction</a></td><td>If present, contains the reaction that the user left on the story</td></tr></tbody></table>

### Type

[StoryView](/type/StoryView/)

### Related pages

#### [Blocked users](/api/block/)

Working with the blocklist.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
