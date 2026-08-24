---
title: "account.savedRingtones"
original: "https://core.telegram.org/constructor/account.savedRingtones"
section: ref
description: "A list of saved notification sounds"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.savedRingtones","url":"/constructor/account.savedRingtones/"}]
layout: layout.njk
---

# account.savedRingtones

A list of saved notification sounds

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.savedRingtones/" class="current_page_link">account.savedRingtones</a>#c1e92cc5 hash:<a href="/type/long/">long</a> ringtones:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/account.SavedRingtones/">account.SavedRingtones</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>ringtones</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;</td><td>Saved notification sounds</td></tr></tbody></table>

### Type

[account.SavedRingtones](/type/account.SavedRingtones/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
