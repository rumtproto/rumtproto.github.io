---
title: "messages.SavedReactionTags"
original: "https://core.telegram.org/type/messages.SavedReactionTags"
section: ref
description: "List of reaction tag » names assigned by the user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.SavedReactionTags","url":"/type/messages.SavedReactionTags/"}]
layout: layout.njk
---

# messages.SavedReactionTags

List of [reaction tag »](/api/saved-messages/#tags) names assigned by the user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.savedReactionTagsNotModified/">messages.savedReactionTagsNotModified</a>#889b59ef = <a href="/type/messages.SavedReactionTags/" class="current_page_link">messages.SavedReactionTags</a>;
<a href="/constructor/messages.savedReactionTags/">messages.savedReactionTags</a>#3259950a tags:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedReactionTag/">SavedReactionTag</a>&gt; hash:<a href="/type/long/">long</a> = <a href="/type/messages.SavedReactionTags/" class="current_page_link">messages.SavedReactionTags</a>;

---functions---

<a href="/method/messages.getSavedReactionTags/">messages.getSavedReactionTags</a>#3637e05b flags:<a href="/type/%23/">#</a> peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.SavedReactionTags/" class="current_page_link">messages.SavedReactionTags</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.savedReactionTagsNotModified/">messages.savedReactionTagsNotModified</a></td><td>The list of <a href="/api/saved-messages/#tags">reaction tag »</a> names assigned by the user hasn't changed.</td></tr><tr><td><a href="/constructor/messages.savedReactionTags/">messages.savedReactionTags</a></td><td>List of <a href="/api/saved-messages/#tags">reaction tag »</a> names assigned by the user.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getSavedReactionTags/">messages.getSavedReactionTags</a></td><td>Fetch the full list of <a href="/api/saved-messages/#tags">saved message tags</a> created by the user.</td></tr></tbody></table>

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
