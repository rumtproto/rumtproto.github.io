---
title: "storyViewPublicForward"
original: "https://core.telegram.org/constructor/storyViewPublicForward"
section: ref
description: "A certain peer has forwarded the story as a message to a public chat or channel."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"storyViewPublicForward","url":"/constructor/storyViewPublicForward/"}]
layout: layout.njk
---

# storyViewPublicForward

A certain peer has forwarded the story as a message to a public chat or channel.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyViewPublicForward/" class="current_page_link">storyViewPublicForward</a>#9083670b flags:<a href="/type/%23/">#</a> blocked:flags.0?true blocked_my_stories_from:flags.1?true message:<a href="/type/Message/">Message</a> = <a href="/type/StoryView/">StoryView</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether we have <a href="/api/block/">completely blocked</a> this user, including from viewing more of our stories.</td></tr><tr><td><strong>blocked_my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether we have <a href="/api/block/">blocked</a> this user from viewing more of our stories.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message/">Message</a></td><td>The message with the forwarded story.</td></tr></tbody></table>

### Type

[StoryView](/type/StoryView/)

### Related pages

#### [Blocked users](/api/block/)

Working with the blocklist.
