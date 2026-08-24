---
title: "account.SavedMusicIds"
original: "https://core.telegram.org/type/account.SavedMusicIds"
section: ref
description: "List of IDs of songs (document.ids) currently pinned on our profile, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.SavedMusicIds","url":"/type/account.SavedMusicIds/"}]
layout: layout.njk
---

# account.SavedMusicIds

List of IDs of songs ([document](/constructor/document/).`id`s) currently pinned on our profile, see [here »](/api/profile/#music) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.savedMusicIdsNotModified/">account.savedMusicIdsNotModified</a>#4fc81d6e = <a href="/type/account.SavedMusicIds/" class="current_page_link">account.SavedMusicIds</a>;
<a href="/constructor/account.savedMusicIds/">account.savedMusicIds</a>#998d6636 ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/account.SavedMusicIds/" class="current_page_link">account.SavedMusicIds</a>;

---functions---

<a href="/method/account.getSavedMusicIds/">account.getSavedMusicIds</a>#e09d5faf hash:<a href="/type/long/">long</a> = <a href="/type/account.SavedMusicIds/" class="current_page_link">account.SavedMusicIds</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.savedMusicIdsNotModified/">account.savedMusicIdsNotModified</a></td><td>The list of IDs of songs (<a href="/constructor/document/">document</a>.<code>id</code>s) currently pinned on our profile hasn't changed.</td></tr><tr><td><a href="/constructor/account.savedMusicIds/">account.savedMusicIds</a></td><td>List of IDs of songs (<a href="/constructor/document/">document</a>.<code>id</code>s) currently pinned on our profile, see <a href="/api/profile/#music">here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getSavedMusicIds/">account.getSavedMusicIds</a></td><td>Fetch the full list of only the IDs of <a href="/api/profile/#music">songs currently added to the profile, see here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [document](/constructor/document/)

Document

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
