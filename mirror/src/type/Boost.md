---
title: "Boost"
original: "https://core.telegram.org/type/Boost"
section: ref
description: "Info about one or more boosts applied by a specific user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Boost","url":"/type/Boost/"}]
layout: layout.njk
---

# Boost

Info about one or more [boosts](/api/boost/) applied by a specific user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boost/">boost</a>#4b3e14d6 flags:<a href="/type/%23/">#</a> gift:flags.1?true giveaway:flags.2?true unclaimed:flags.3?true id:<a href="/type/string/">string</a> user_id:flags.0?<a href="/type/long/">long</a> giveaway_msg_id:flags.2?<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> expires:<a href="/type/int/">int</a> used_gift_slug:flags.4?<a href="/type/string/">string</a> multiplier:flags.5?<a href="/type/int/">int</a> stars:flags.6?<a href="/type/long/">long</a> = <a href="/type/Boost/" class="current_page_link">Boost</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/boost/">boost</a></td><td>Info about one or more <a href="/api/boost/">boosts</a> applied by a specific user.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
