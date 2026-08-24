---
title: "starsRating"
original: "https://core.telegram.org/constructor/starsRating"
section: ref
description: "Represents the profile's star rating, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starsRating","url":"/constructor/starsRating/"}]
layout: layout.njk
---

# starsRating

Represents the profile's [star rating, see here »](/api/stars/#star-rating) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsRating/" class="current_page_link">starsRating</a>#1b0e4f07 flags:<a href="/type/%23/">#</a> level:<a href="/type/int/">int</a> current_level_stars:<a href="/type/long/">long</a> stars:<a href="/type/long/">long</a> next_level_stars:flags.0?<a href="/type/long/">long</a> = <a href="/type/StarsRating/">StarsRating</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>level</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The current level, may be negative.</td></tr><tr><td><strong>current_level_stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The numerical value of the rating required for the current level.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Numerical value of the current rating.</td></tr><tr><td><strong>next_level_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>The numerical value of the rating required for the next level.</td></tr></tbody></table>

### Type

[StarsRating](/type/StarsRating/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
