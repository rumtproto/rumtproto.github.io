---
title: "messages.getSavedReactionTags"
original: "https://core.telegram.org/method/messages.getSavedReactionTags"
section: ref
description: "Fetch the full list of saved message tags created by the user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSavedReactionTags","url":"/method/messages.getSavedReactionTags/"}]
layout: layout.njk
---

# messages.getSavedReactionTags

Fetch the full list of [saved message tags](/api/saved-messages/#tags) created by the user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.savedReactionTagsNotModified/">messages.savedReactionTagsNotModified</a>#889b59ef = <a href="/type/messages.SavedReactionTags/">messages.SavedReactionTags</a>;
<a href="/constructor/messages.savedReactionTags/">messages.savedReactionTags</a>#3259950a tags:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedReactionTag/">SavedReactionTag</a>&gt; hash:<a href="/type/long/">long</a> = <a href="/type/messages.SavedReactionTags/">messages.SavedReactionTags</a>;
---functions---
<a href="/method/messages.getSavedReactionTags/" class="current_page_link">messages.getSavedReactionTags</a>#3637e05b flags:<a href="/type/%23/">#</a> peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.SavedReactionTags/">messages.SavedReactionTags</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputPeer/">InputPeer</a></td><td>If set, returns tags only used in the specified <a href="/api/saved-messages/#saved-message-dialogs">saved message dialog</a>.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.SavedReactionTags](/type/messages.SavedReactionTags/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
