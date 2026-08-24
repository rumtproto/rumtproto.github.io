---
title: "starsAmount"
original: "https://core.telegram.org/constructor/starsAmount"
section: ref
description: "Describes a real (i.e. possibly decimal) amount of Telegram Stars."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starsAmount","url":"/constructor/starsAmount/"}]
layout: layout.njk
---

# starsAmount

Describes a real (i.e. possibly decimal) amount of [Telegram Stars](/api/stars/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsAmount/" class="current_page_link">starsAmount</a>#bbb6b4a3 amount:<a href="/type/long/">long</a> nanos:<a href="/type/int/">int</a> = <a href="/type/StarsAmount/">StarsAmount</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The integer amount of Telegram Stars.</td></tr><tr><td><strong>nanos</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The decimal amount of Telegram Stars, expressed as nanostars (i.e. 1 nanostar is equal to <code>1/1_000_000_000</code>th (one billionth) of a Telegram Star).<br>This field may also be negative (the allowed range is from <code>-999_999_999</code> to <code>999_999_999</code>).</td></tr></tbody></table>

### Type

[StarsAmount](/type/StarsAmount/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
