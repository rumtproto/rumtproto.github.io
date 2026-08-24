---
title: "users.getSavedMusic"
original: "https://core.telegram.org/method/users.getSavedMusic"
section: ref
description: "Get songs pinned to the user's profile, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"users.getSavedMusic","url":"/method/users.getSavedMusic/"}]
layout: layout.njk
---

# users.getSavedMusic

Get songs [pinned to the user's profile, see here »](/api/profile/#music) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/users.savedMusicNotModified/">users.savedMusicNotModified</a>#e3878aa4 count:<a href="/type/int/">int</a> = <a href="/type/users.SavedMusic/">users.SavedMusic</a>;
<a href="/constructor/users.savedMusic/">users.savedMusic</a>#34a2f297 count:<a href="/type/int/">int</a> documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/users.SavedMusic/">users.SavedMusic</a>;
---functions---
<a href="/method/users.getSavedMusic/" class="current_page_link">users.getSavedMusic</a>#788d7fe3 id:<a href="/type/InputUser/">InputUser</a> offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/users.SavedMusic/">users.SavedMusic</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The ID of the user.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset for pagination.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash »</a> of the IDs of previously added songs, to avoid returning any result if there was no change.</td></tr></tbody></table>

### Result

[users.SavedMusic](/type/users.SavedMusic/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
