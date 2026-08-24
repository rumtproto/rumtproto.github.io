---
title: "messages.savedReactionTags"
original: "https://core.telegram.org/constructor/messages.savedReactionTags"
section: ref
description: "List of reaction tag » names assigned by the user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.savedReactionTags","url":"/constructor/messages.savedReactionTags/"}]
layout: layout.njk
---

# messages.savedReactionTags

List of [reaction tag »](/api/saved-messages/#tags) names assigned by the user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.savedReactionTags/" class="current_page_link">messages.savedReactionTags</a>#3259950a tags:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedReactionTag/">SavedReactionTag</a>&gt; hash:<a href="/type/long/">long</a> = <a href="/type/messages.SavedReactionTags/">messages.SavedReactionTags</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>tags</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedReactionTag/">SavedReactionTag</a>&gt;</td><td>Saved reaction tags.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>. Can also be manually regenerated, if needed, using the <a href="/api/saved-messages/#tags">custom algorithm specified here »</a>.</td></tr></tbody></table>

### Type

[messages.SavedReactionTags](/type/messages.SavedReactionTags/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
