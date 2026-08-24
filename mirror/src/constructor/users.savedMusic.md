---
title: "users.savedMusic"
original: "https://core.telegram.org/constructor/users.savedMusic"
section: ref
description: "List of songs currently pinned on a user's profile, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"users.savedMusic","url":"/constructor/users.savedMusic/"}]
layout: layout.njk
---

# users.savedMusic

List of songs currently pinned on a user's profile, see [here »](/api/profile/#music) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/users.savedMusic/" class="current_page_link">users.savedMusic</a>#34a2f297 count:<a href="/type/int/">int</a> documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/users.SavedMusic/">users.SavedMusic</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of songs (can be bigger than <code>documents</code> depending on the passed <code>limit</code>, and the default maximum <code>limit</code> in which case pagination is required).</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;</td><td>Songs.</td></tr></tbody></table>

### Type

[users.SavedMusic](/type/users.SavedMusic/)

### Related pages

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
