---
title: "StarsAmount"
original: "https://core.telegram.org/type/StarsAmount"
section: ref
description: "Describes a real (i.e. possibly decimal) amount of Telegram Stars."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarsAmount","url":"/type/StarsAmount/"}]
layout: layout.njk
---

# StarsAmount

Describes a real (i.e. possibly decimal) amount of [Telegram Stars](/api/stars/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsAmount/">starsAmount</a>#bbb6b4a3 amount:<a href="/type/long/">long</a> nanos:<a href="/type/int/">int</a> = <a href="/type/StarsAmount/" class="current_page_link">StarsAmount</a>;
<a href="/constructor/starsTonAmount/">starsTonAmount</a>#74aee3e0 amount:<a href="/type/long/">long</a> = <a href="/type/StarsAmount/" class="current_page_link">StarsAmount</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starsAmount/">starsAmount</a></td><td>Describes a real (i.e. possibly decimal) amount of <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><a href="/constructor/starsTonAmount/">starsTonAmount</a></td><td>Describes an amount of Gram in nanograms (i.e. <code>1/1_000_000_000</code> of a Gram).</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
