---
title: "account.getSavedRingtones"
original: "https://core.telegram.org/method/account.getSavedRingtones"
section: ref
description: "Fetch saved notification sounds"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getSavedRingtones","url":"/method/account.getSavedRingtones/"}]
layout: layout.njk
---

# account.getSavedRingtones

Fetch saved notification sounds

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.savedRingtonesNotModified/">account.savedRingtonesNotModified</a>#fbf6e8b1 = <a href="/type/account.SavedRingtones/">account.SavedRingtones</a>;
<a href="/constructor/account.savedRingtones/">account.savedRingtones</a>#c1e92cc5 hash:<a href="/type/long/">long</a> ringtones:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/account.SavedRingtones/">account.SavedRingtones</a>;
---functions---
<a href="/method/account.getSavedRingtones/" class="current_page_link">account.getSavedRingtones</a>#e1902288 hash:<a href="/type/long/">long</a> = <a href="/type/account.SavedRingtones/">account.SavedRingtones</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[account.SavedRingtones](/type/account.SavedRingtones/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
