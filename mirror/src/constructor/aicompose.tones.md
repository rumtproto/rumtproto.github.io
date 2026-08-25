---
title: "aicompose.tones"
original: "https://core.telegram.org/constructor/aicompose.tones"
section: ref
description: "The list of saved AI composer tones » of the current user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"aicompose.tones","url":"/constructor/aicompose.tones/"}]
layout: layout.njk
---

# aicompose.tones

The list of saved [AI composer tones »](/api/ai/#ai-compose-tones) of the current user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 225. <a href="/constructor/aicompose.tones/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash for pagination, for more info click here</a></td></tr><tr><td><strong>tones</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AiComposeTone/">AiComposeTone</a>&gt;</td><td>The saved AI composer tones</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users (i.e. the authors of the tones)</td></tr></tbody></table>

### Type

[aicompose.Tones](/type/aicompose.Tones/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
