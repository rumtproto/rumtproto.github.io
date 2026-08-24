---
title: "account.getSavedMusicIds"
original: "https://core.telegram.org/method/account.getSavedMusicIds"
section: ref
description: "Fetch the full list of only the IDs of songs currently added to the profile, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getSavedMusicIds","url":"/method/account.getSavedMusicIds/"}]
layout: layout.njk
---

# account.getSavedMusicIds

Fetch the full list of only the IDs of [songs currently added to the profile, see here »](/api/profile/#music) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.savedMusicIdsNotModified/">account.savedMusicIdsNotModified</a>#4fc81d6e = <a href="/type/account.SavedMusicIds/">account.SavedMusicIds</a>;
<a href="/constructor/account.savedMusicIds/">account.savedMusicIds</a>#998d6636 ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/account.SavedMusicIds/">account.SavedMusicIds</a>;
---functions---
<a href="/method/account.getSavedMusicIds/" class="current_page_link">account.getSavedMusicIds</a>#e09d5faf hash:<a href="/type/long/">long</a> = <a href="/type/account.SavedMusicIds/">account.SavedMusicIds</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Hash <a href="/api/offsets/#hash-generation">generated »</a> from the previously returned list of IDs.</td></tr></tbody></table>

### Result

[account.SavedMusicIds](/type/account.SavedMusicIds/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
