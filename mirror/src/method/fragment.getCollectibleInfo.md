---
title: "fragment.getCollectibleInfo"
original: "https://core.telegram.org/method/fragment.getCollectibleInfo"
section: ref
description: "Fetch information about a fragment collectible, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"fragment.getCollectibleInfo","url":"/method/fragment.getCollectibleInfo/"}]
layout: layout.njk
---

# fragment.getCollectibleInfo

Fetch information about a [fragment collectible, see here »](/api/fragment/#fetching-info-about-fragment-collectibles) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/fragment.collectibleInfo/">fragment.collectibleInfo</a>#6ebdff91 purchase_date:<a href="/type/int/">int</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> crypto_currency:<a href="/type/string/">string</a> crypto_amount:<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> = <a href="/type/fragment.CollectibleInfo/">fragment.CollectibleInfo</a>;
---functions---
<a href="/method/fragment.getCollectibleInfo/" class="current_page_link">fragment.getCollectibleInfo</a>#be1e85ba collectible:<a href="/type/InputCollectible/">InputCollectible</a> = <a href="/type/fragment.CollectibleInfo/">fragment.CollectibleInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>collectible</strong></td><td style="text-align: center;"><a href="/type/InputCollectible/">InputCollectible</a></td><td>Collectible to fetch info about.</td></tr></tbody></table>

### Result

[fragment.CollectibleInfo](/type/fragment.CollectibleInfo/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>COLLECTIBLE_INVALID</td><td>The specified collectible is invalid.</td></tr><tr><td>400</td><td>COLLECTIBLE_NOT_FOUND</td><td>The specified collectible could not be found.</td></tr></tbody></table>

### Related pages

#### [Fragment collectibles](/api/fragment/)

Telegram users can make it easy for others to contact them or find their public groups and channels via usernames: clients can also assign multiple Fragment » collectible usernames to accounts, supergroups and channels they own; Fragment » also allows purchasing phone number collectibles that can be used to register Telegram accounts.
