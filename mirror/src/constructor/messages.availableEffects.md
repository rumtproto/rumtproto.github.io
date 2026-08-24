---
title: "messages.availableEffects"
original: "https://core.telegram.org/constructor/messages.availableEffects"
section: ref
description: "The full list of usable animated message effects »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.availableEffects","url":"/constructor/messages.availableEffects/"}]
layout: layout.njk
---

# messages.availableEffects

The full list of usable [animated message effects »](/api/effects/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.availableEffects/" class="current_page_link">messages.availableEffects</a>#bddb616e hash:<a href="/type/int/">int</a> effects:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AvailableEffect/">AvailableEffect</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.AvailableEffects/">messages.AvailableEffects</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>effects</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AvailableEffect/">AvailableEffect</a>&gt;</td><td>Message effects</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;</td><td>Documents specified in the <code>effects</code> constructors.</td></tr></tbody></table>

### Type

[messages.AvailableEffects](/type/messages.AvailableEffects/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.
