---
title: "messages.getAvailableEffects"
original: "https://core.telegram.org/method/messages.getAvailableEffects"
section: ref
description: "Fetch the full list of usable animated message effects »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getAvailableEffects","url":"/method/messages.getAvailableEffects/"}]
layout: layout.njk
---

# messages.getAvailableEffects

Fetch the full list of usable [animated message effects »](/api/effects/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.availableEffectsNotModified/">messages.availableEffectsNotModified</a>#d1ed9a5b = <a href="/type/messages.AvailableEffects/">messages.AvailableEffects</a>;
<a href="/constructor/messages.availableEffects/">messages.availableEffects</a>#bddb616e hash:<a href="/type/int/">int</a> effects:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AvailableEffect/">AvailableEffect</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.AvailableEffects/">messages.AvailableEffects</a>;
---functions---
<a href="/method/messages.getAvailableEffects/" class="current_page_link">messages.getAvailableEffects</a>#dea20a39 hash:<a href="/type/int/">int</a> = <a href="/type/messages.AvailableEffects/">messages.AvailableEffects</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.AvailableEffects](/type/messages.AvailableEffects/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.
